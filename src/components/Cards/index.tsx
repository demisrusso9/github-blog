import { useNavigate } from 'react-router-dom'

import { BlogIssueDTO } from '@/dtos/blogIssueDTO'
import { useGitHubBlog } from '@/hooks/useGithubBlog'
import { formatDate } from '@/utils/formatDate'

import {
  CardContainer,
  CardContent,
  CardDate,
  CardDescription,
  CardHeader,
  CardLoadMore,
  CardNoIssueFound,
  CardTitle
} from './styles'

export function Cards() {
  const {
    repository,
    posts,
    fetchGithubIssues,
    incrementPage,
    page,
    showLoadMoreIssues
  } = useGitHubBlog()
  const navigate = useNavigate()

  function limitCharacters(text: string, limit: number) {
    if (text?.length > limit) {
      return text.slice(0, limit) + '...'
    }

    return text
  }

  function handleNavigateToPost(post: BlogIssueDTO) {
    navigate('/post', { state: post })
  }

  async function handleLoadMoreIssues() {
    incrementPage()
    await fetchGithubIssues('', page + 1)
  }

  return (
    <>
      <CardContainer>
        {posts.length > 0 &&
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

      {showLoadMoreIssues && posts.length > 0 && (
        <CardLoadMore onClick={handleLoadMoreIssues}>
          Carregar mais
        </CardLoadMore>
      )}

      {repository && !posts.length && (
        <CardNoIssueFound>
          <span>Não encontramos nenhuma Issue!</span>
        </CardNoIssueFound>
      )}
    </>
  )
}
