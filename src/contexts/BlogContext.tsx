import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

export interface BlogContextData {
  posts: GitHubIssues
  fetchGithubIssues: (search: string) => Promise<void>
}

interface BlogContextProps {
  children: ReactNode
}

interface GitHubIssues {
  total: number
  items: {
    title: string
    body: string
    created_at: string
    url: string
  }[]
}

export const BlogContext = createContext({} as BlogContextData)

export function BlogProvider({ children }: BlogContextProps) {
  const endpoint = 'https://api.github.com/search/issues?'
  const repository = 'rocketseat-education/reactjs-github-blog-challenge'

  const [posts, setPosts] = useState<GitHubIssues>({} as GitHubIssues)

  async function fetchGithubIssues(search: string) {
    const { data } = await axios.get(
      `${endpoint}q=${search}&repo=${repository}`
    )

    setPosts({
      total: data.total_count,
      items: data.items
    })
  }

  useEffect(() => {
    fetchGithubIssues('boas praticas')
  }, [])

  return (
    <BlogContext.Provider
      value={{
        posts,
        fetchGithubIssues
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
