import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    border: 1px solid ${({ theme }) => theme['green-300']};
    padding: 1rem;
    background: transparent;
    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;
    border-radius: 6px;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      border: 1px solid ${({ theme }) => theme['green-500']};
      transition: background-color 0.2s border-color 0.2s color 0.2s;
    }

    @media (max-width: 520px) {
      span {
        display: none;
      }
    }
  }
`
