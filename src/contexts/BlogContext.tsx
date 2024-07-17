import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

export interface BlogContextData {
  posts: GitHubIssues
  profile: ProfileProps | undefined
  fetchGitHubProfile: (username: string) => Promise<void>
  fetchGithubIssues: (search: string) => Promise<void>
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

interface GitHubIssues {
  total: number
  items: {
    title: string
    repository_url: string
    created_at: string
    comments: number
    body: string
    html_url: string
    user: {
      login: string
    }
  }[]
}

export const BlogContext = createContext({} as BlogContextData)

export function BlogProvider({ children }: BlogContextProps) {
  const [profile, setProfile] = useState<ProfileProps>()
  const [posts, setPosts] = useState<GitHubIssues>({} as GitHubIssues)

  const endpoint = 'https://api.github.com/search/issues?'
  const repository = 'rocketseat-education/reactjs-github-blog-challenge'

  async function fetchGitHubProfile(username: string) {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      )

      setProfile(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchGithubIssues(search: string) {
    const { data } = await axios.get(
      `${endpoint}q=${search}&repo=${repository}`
    )

    setPosts({
      total: data.total_count,
      items: data.items.slice(0, 10)
    })
  }

  useEffect(() => {
    fetchGitHubProfile('demisrusso9')
    fetchGithubIssues('boas praticas')
  }, [])

  return (
    <BlogContext.Provider
      value={{
        posts,
        profile,
        fetchGitHubProfile,
        fetchGithubIssues
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
