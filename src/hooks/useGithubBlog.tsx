import { useContext } from 'react'
import { BlogContext } from '@/contexts/BlogContext'

export function useGitHubBlog() {
  return useContext(BlogContext)
}
