import styled from 'styled-components'

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin: 3rem 0;
`

export const PostContent = styled.div`
  background: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
`

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1.5rem;
  margin-bottom: 1.25rem;
`

export const PostTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme['base-title']};
  flex: 1;
`

export const PostDate = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-span']};
  display: inline-block;
`

export const PostDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme['base-text']};
`
