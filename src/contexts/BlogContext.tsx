import { createContext, ReactNode, useState } from 'react'
import { BlogIssueDTO } from '@/dtos/blogIssueDTO'
import { api } from '@/services/api'
import { toast, Bounce } from 'react-toastify'

export interface BlogContextData {
  posts: BlogIssueDTO[]
  profile: ProfileProps | null
  repositories: RepositoryProps[]
  repository: string
  fetchGitHubProfile: (username: string) => Promise<void>
  fetchGithubRepository: (username: string) => Promise<void>
  fetchGithubIssues: (search: string) => Promise<void>
  selectRepository: (name: string) => void
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

  async function fetchGitHubProfile(username: string) {
    try {
      const { data } = await api.get(`/users/${username}`)

      setProfile(data)
    } catch (error) {
      toast.error('Perfil não encontrado', {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
        transition: Bounce
      })
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
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchGithubIssues(search: string, repositoryName?: string) {
    const repo = repositoryName ?? repository

    try {
      const { data } = await api.get(
        `/search/issues?q=${search}%20repo:${profile?.login}/${repo}`
      )

      setPosts(data.items.slice(0, 10))
    } catch (error) {
      console.log(error)
    }
  }

  function handleClearProfile() {
    setProfile(null)
    setPosts([])
    setRepositories([])
    setRepository('')
  }

  async function selectRepository(repository: string) {
    setRepository(repository)
    await fetchGithubIssues('', repository)
  }

  return (
    <BlogContext.Provider
      value={{
        posts,
        profile,
        repositories,
        repository,
        fetchGitHubProfile,
        fetchGithubRepository,
        fetchGithubIssues,
        selectRepository,
        handleClearProfile
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
