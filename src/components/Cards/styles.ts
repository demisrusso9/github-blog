import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin: 3rem 0 5rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const CardContent = styled.div`
  background: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;
  min-width: 100px;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
`

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme['base-title']};
  flex: 1;
  overflow-wrap: anywhere;
`

export const CardDate = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-span']};
  display: inline-block;
`

export const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme['base-text']};
  overflow-wrap: anywhere;
`

export const CardNoIssueFound = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-span']};
  }
`

export const CardLoadMore = styled.button`
  font-size: 1.25rem;
  color: ${({ theme }) => theme['blue']};
  background: transparent;
  border: 0;
  width: 100%;
`
