import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const Trigger = styled(Select.Trigger)`
  font-size: 1rem;
  background: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-subtitle']};

  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 0;

  gap: 8px;
  display: flex;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border: 1px solid ${({ theme }) => theme['red']};
  }

  &:not(:disabled) {
    border: 1px solid ${({ theme }) => theme['blue']};
  }
`

export const Item = styled(Select.Item)`
  padding: 1rem;

  font-size: 1rem;
  background: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-subtitle']};

  padding: 0.75rem 1rem;
  /* border-radius: 6px; */

  border: 0;
  outline: none;
  border: 1px solid ${({ theme }) => theme['base-border']};

  &:hover {
    background: ${({ theme }) => theme['blue']};
    color: ${({ theme }) => theme['base-text']};
    cursor: pointer;
  }
`
