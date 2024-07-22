import styled from 'styled-components'

interface LinkPropColor {
  color?: 'blue' | 'red'
}

export const ProfileContainer = styled.div`
  position: relative;

  background: ${({ theme }) => theme['base-profile']};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  padding: 32px 40px;
  border-radius: 10px;

  margin-top: -95px;
  margin-bottom: 4.5rem;
  gap: 2rem;
`

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    gap: 2rem;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileTitle = styled.h2`
  color: ${({ theme }) => theme['base-title']};
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`

export const Link = styled.a<LinkPropColor>`
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme, color }) =>
    color === 'red' ? theme['red'] : theme['blue']};
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 0;
    margin-left: 0.5rem;
    height: 12px;
    width: 12px;
    color: ${({ theme, color }) =>
      color === 'red' ? theme['red'] : theme['blue']};
  }
`

export const ProfileDescription = styled.p`
  color: ${({ theme }) => theme['base-text']};
  font-size: 1rem;
  margin-bottom: 1.5rem;
`

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1.5rem;

  p {
    display: flex;
    align-items: center;
  }

  svg {
    font-size: 0;
    height: 18px;
    width: 18px;
    color: ${({ theme }) => theme['base-label']};
  }

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-left: 0.5rem;
  }
`

export const UserImage = styled.img`
  height: 9.25rem;
  width: 9.25rem;
  border-radius: 8px;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme['base-title']};
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
`

export const SearchFormInput = styled.input`
  width: 100%;
  font-size: 1rem;
  color: ${({ theme }) => theme['base-subtitle']};
  background: ${({ theme }) => theme['base-input']};

  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['base-border']};

  &::placeholder {
    color: ${({ theme }) => theme['base-border']};
  }
`

export const SearchProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
