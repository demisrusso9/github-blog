import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  Description,
  Link,
  Status,
  Title,
  UserImage
} from './styles'
import { useGitHubBlog } from '@/hooks/useGithubBlog'

export function Profile() {
  const { profile } = useGitHubBlog()

  return (
    <ProfileContainer>
      <UserImage src={profile?.avatar_url} />

      <section>
        <ProfileHeader>
          <Title>{profile?.name}</Title>

          <Link href={`https://github.com/${profile?.login}`} target='_blank'>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileHeader>

        <ProfileContent>
          <Description>{profile?.bio}</Description>

          <Status>
            <p>
              <FontAwesomeIcon icon={faGithub} />
              <span>{profile?.login}</span>
            </p>

            <p>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{profile?.company}</span>
            </p>

            <p>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{profile?.followers} seguidores</span>
            </p>
          </Status>
        </ProfileContent>
      </section>
    </ProfileContainer>
  )
}
