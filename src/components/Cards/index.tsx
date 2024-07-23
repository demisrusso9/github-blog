import { useNavigate } from 'react-router-dom'
import { useGitHubBlog } from '@/hooks/useGithubBlog'
import { formatDate } from '@/utils/formatDate'
import { BlogIssueDTO } from '@/dtos/blogIssueDTO'
import {
  CardContainer,
  CardContent,
  CardDate,
  CardDescription,
  CardHeader,
  CardTitle
} from './styles'

type BlogIssueItem = BlogIssueDTO['items'][0]

export function Cards() {
  const navigate = useNavigate()
  const { posts } = useGitHubBlog()

  function limitCharacters(text: string, limit: number) {
    if (text?.length > limit) {
      return text.slice(0, limit) + '...'
    }

    return text
  }

  function handleNavigateToPost(post: BlogIssueItem) {
    navigate('/post', { state: post })
  }

  return (
    <CardContainer>
      {posts.items &&
        posts.items.map(post => (
          <CardContent
            key={post.html_url}
            onClick={() => handleNavigateToPost(post)}
          >
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDate>{formatDate(post.created_at)}</CardDate>
            </CardHeader>

            <CardDescription>{limitCharacters(post.body, 200)}</CardDescription>
          </CardContent>
        ))}
    </CardContainer>
  )
}
