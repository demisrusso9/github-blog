import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
  faX
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import { useGitHubBlog } from '@/contexts/BlogContext'

import {
  Link,
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileHeader,
  ProfileInfo,
  ProfileTitle,
  SearchFormInput,
  SearchProfile,
  Title,
  UserImage} from './styles'

export function Profile() {
  const {
    profile,
    fetchGitHubProfile,
    fetchGithubRepository,
    handleClearProfile
  } = useGitHubBlog()

  const [searchProfile, setSearchProfile] = useState('')

  async function handleSearchProfile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    await fetchGitHubProfile(searchProfile)
    await fetchGithubRepository(searchProfile)

    setSearchProfile('')
  }

  return (
    <ProfileContainer>
      {profile ? (
        <>
          <UserImage src={profile?.avatar_url} />

          <section>
            <ProfileHeader>
              <ProfileTitle>{profile?.name}</ProfileTitle>

              <div>
                <Link
                  href={`https://github.com/${profile?.login}`}
                  target='_blank'
                >
                  GITHUB
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Link>

                <Link color='red' onClick={handleClearProfile}>
                  Remover Perfil
                  <FontAwesomeIcon icon={faX} />
                </Link>
              </div>
            </ProfileHeader>

            <ProfileContent>
              <ProfileDescription>{profile?.bio}</ProfileDescription>

              <ProfileInfo>
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
              </ProfileInfo>
            </ProfileContent>
          </section>
        </>
      ) : (
        <SearchProfile>
          <Title>Busque um perfil no Github</Title>

          <form onSubmit={handleSearchProfile}>
            <SearchFormInput
              type='text'
              placeholder='Buscar perfil'
              value={searchProfile}
              onChange={e => setSearchProfile(e.target.value)}
            />
          </form>
        </SearchProfile>
      )}
    </ProfileContainer>
  )
}
