import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin: 3rem 0;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const CardContent = styled.div`
  background: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  cursor: pointer;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1.5rem;
  margin-bottom: 1.25rem;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme['base-title']};
  flex: 1;
`

export const CardDate = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-span']};
  display: inline-block;
`

export const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme['base-text']};
`
