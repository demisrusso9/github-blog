import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    p {
      color: ${({ theme }) => theme['base-subtitle']};
      font-size: 1.125rem;
    }

    span {
      color: ${({ theme }) => theme['base-span']};
      font-size: 0.875rem;
    }
  }

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
