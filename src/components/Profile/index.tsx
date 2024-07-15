import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
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

interface ProfileProps {
  login: string
  name: string
  username: string
  company: string
  location: string
  bio: string
  avatar_url: string
  followers: number
  following: number
  public_repos: number
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>()

  async function fetchGitHubUserProfile(username: string) {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      )

      setProfile(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchGitHubUserProfile('demisrusso9')
  }, [])

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
