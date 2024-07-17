import { useGitHubBlog } from '@/hooks/useGithubBlog'
import {
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostHeader,
  PostTitle
} from './styles'
import { formatDate } from '@/utils/formatDate'
import { useNavigate } from 'react-router-dom'

export interface GitHubPostIssue {
  title: string
  repository_url: string
  created_at: string
  comments: number
  body: string
  html_url: string
  user: {
    login: string
  }
}

export function Post() {
  const navigate = useNavigate()
  const { posts } = useGitHubBlog()

  function limitCharacters(text: string, limit: number) {
    if (text?.length > limit) {
      return text.slice(0, limit) + '...'
    }
  }

  function handleNavigateToPost(post: GitHubPostIssue) {
    console.log(post);
    
    navigate('/post', { state: post })
  }

  return (
    <PostContainer>
      {posts.items &&
        posts.items.map(post => (
          <PostContent
            key={post.html_url}
            onClick={() => handleNavigateToPost(post)}
          >
            <PostHeader>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{formatDate(post.created_at)}</PostDate>
            </PostHeader>

            <PostDescription>{limitCharacters(post.body, 200)}</PostDescription>
          </PostContent>
        ))}
    </PostContainer>
  )
}
