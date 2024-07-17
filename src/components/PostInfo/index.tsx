import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment
} from '@fortawesome/free-solid-svg-icons'
import {
  PostContainer,
  PostHeader,
  PostContent,
  Link,
  IssueInfo,
  Title
} from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { GitHubPostIssue } from '../Post'
import { formatDate } from '@/utils/formatDate'

export function PostInfo() {
  const location = useLocation()
  const navigate = useNavigate()

  function handleGoBack() {
    navigate('/')
  }

  const post = location.state as GitHubPostIssue

  return (
    <div>
      <PostContainer>
        <PostHeader>
          <Link onClick={handleGoBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>

          <Link href={post.html_url} target='_blank'>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </PostHeader>

        <Title>{post?.title}</Title>

        <IssueInfo>
          <p>
            <FontAwesomeIcon icon={faGithub} />
            <span>{post?.user?.login}</span>
          </p>

          <p>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{formatDate(post?.created_at)}</span>
          </p>

          <p>
            <FontAwesomeIcon icon={faComment} />
            <span>{post?.comments} comentários</span>
          </p>
        </IssueInfo>
      </PostContainer>

      <PostContent>{post?.body}</PostContent>
    </div>
  )
}
