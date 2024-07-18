import styled from 'styled-components'
import Markdown from 'react-markdown'

export const PostContainer = styled.div`
  position: relative;

  background: ${({ theme }) => theme['base-profile']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  padding: 32px 40px;
  border-radius: 10px;

  margin-top: -95px;
  margin-bottom: 2.5rem;
`

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.25rem;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme['base-title']};
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`

export const Link = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme['blue']};
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 0;
    height: 12px;
    width: 12px;
    color: ${({ theme }) => theme['blue']};

    &:first-child {
      margin-right: 0.5rem;
    }

    &:last-child {
      margin-left: 0.5rem;
    }
  }
`

export const IssueInfo = styled.div`
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

export const PostContent = styled(Markdown)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    color: ${({ theme }) => theme['base-title']};
  }

  a {
    color: ${({ theme }) => theme['blue']};
  }

  h2 {
    margin: 1rem 0;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    color: ${({ theme }) => theme['base-text']};
    margin-bottom: 0.5rem;
    font-size: 1rem;

    strong {
      margin: 0.5rem 0;
    }
  }

  ul {
    margin: 1rem 0;
    margin-left: 1.5rem;

    li {
      color: ${({ theme }) => theme['base-text']};
    }
  }

  img {
    width: 100%;
    height: auto;
    margin: 1rem 0;
  }
`
