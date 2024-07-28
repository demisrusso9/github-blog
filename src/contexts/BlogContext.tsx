import { createContext, ReactNode, useState } from 'react'
import { BlogIssueDTO } from '@/dtos/blogIssueDTO'
import { api } from '@/services/api'
import { showToast } from '@/utils/toastify'

export interface BlogContextData {
  posts: BlogIssueDTO[]
  profile: ProfileProps | null
  repositories: RepositoryProps[]
  repository: string
  showLoadMoreIssues: boolean
  page: number
  fetchGitHubProfile: (username: string) => Promise<void>
  fetchGithubRepository: (username: string) => Promise<void>
  fetchGithubIssues: (
    search: string,
    pageNumber: number,
    repositoryName?: string
  ) => Promise<void>
  selectRepository: (name: string) => void
  incrementPage: () => void
  handleClearProfile: () => void
}

interface BlogContextProps {
  children: ReactNode
}

interface ProfileProps {
  login: string
  name: string
  company: string
  bio: string
  avatar_url: string
  followers: number
}

interface RepositoryProps {
  name: string
  issues_url: string
}

export const BlogContext = createContext({} as BlogContextData)

export function BlogProvider({ children }: BlogContextProps) {
  const [profile, setProfile] = useState<ProfileProps | null>(null)
  const [posts, setPosts] = useState<BlogIssueDTO[]>([])
  const [repositories, setRepositories] = useState<RepositoryProps[]>([])
  const [repository, setRepository] = useState('')
  const [showLoadMoreIssues, setShowLoadMoreIssues] = useState(false)
  const [page, setPage] = useState(1)

  async function fetchGitHubProfile(username: string) {
    try {
      const { data } = await api.get(`/users/${username}`)

      setProfile(data)
    } catch {
      showToast('Perfil não encontrado')
    }
  }

  async function fetchGithubRepository(username: string) {
    try {
      const { data } = await api.get(`/users/${username}/repos`)

      const repos = data.map((repo: RepositoryProps) => {
        return {
          name: repo.name,
          issues_url: repo.issues_url.replace('{/number}', '')
        }
      })

      setRepositories(repos)
    } catch {
      showToast('Erro ao buscar repositórios')
    }
  }

  async function fetchRepoIssues(pageNumber: number, repositoryName?: string) {
    const repo = repositoryName ?? repository
    const endpoint = `/repos/${profile?.login}/${repo}/issues?page=${pageNumber}`

    try {
      const { data } = await api.get(endpoint)

      return data
    } catch {
      showToast('Erro ao buscar issues')
    }
  }

  async function searchRepoIssues(
    search: string,
    pageNumber: number,
    repositoryName?: string
  ) {
    const repo = repositoryName ?? repository
    const endpoint = `/search/issues?page=${pageNumber}&q=${search}%20repo:${profile?.login}/${repo}`

    try {
      const { data } = await api.get(endpoint)

      return data.items
    } catch {
      showToast('Erro ao buscar issues')
    }
  }

  async function fetchGithubIssues(
    search: string = '',
    pageNumber: number,
    repositoryName?: string
  ) {
    let data

    if (search) {
      setPosts([])
      data = await searchRepoIssues(search, pageNumber, repositoryName)
    } else {
      data = await fetchRepoIssues(pageNumber, repositoryName)
    }

    setShowLoadMoreIssues(data.length >= 30)

    if (data.length >= 30) {
      setPosts(prevPosts => [...prevPosts, ...data])
    } else {
      setPosts([...data])
    }
  }

  async function selectRepository(repository: string) {
    setPage(1)
    setPosts([])
    setRepository(repository)
  }

  function incrementPage() {
    setPage(page + 1)
  }

  function handleClearProfile() {
    setProfile(null)
    setPosts([])
    setRepositories([])
    setRepository('')
    setPage(1)
  }

  return (
    <BlogContext.Provider
      value={{
        posts,
        profile,
        repositories,
        repository,
        showLoadMoreIssues,
        page,
        fetchGitHubProfile,
        fetchGithubRepository,
        fetchGithubIssues,
        selectRepository,
        incrementPage,
        handleClearProfile
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
