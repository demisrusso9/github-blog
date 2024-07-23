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
  CardNoIssueFound,
  CardTitle
} from './styles'

export function Cards() {
  const navigate = useNavigate()
  const { repository, posts } = useGitHubBlog()

  function limitCharacters(text: string, limit: number) {
    if (text?.length > limit) {
      return text.slice(0, limit) + '...'
    }

    return text
  }

  function handleNavigateToPost(post: BlogIssueDTO) {
    navigate('/post', { state: post })
  }

  return (
    <>
      <CardContainer>
        {posts &&
          posts.map(post => (
            <CardContent
              key={post.html_url}
              onClick={() => handleNavigateToPost(post)}
            >
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDate>{formatDate(post.created_at)}</CardDate>
              </CardHeader>

              <CardDescription>
                {limitCharacters(post.body, 200)}
              </CardDescription>
            </CardContent>
          ))}
      </CardContainer>

      {repository && !posts.length && (
        <CardNoIssueFound>
          <span>Não encontramos nenhuma Issue!</span>
        </CardNoIssueFound>
      )}
    </>
  )
}
