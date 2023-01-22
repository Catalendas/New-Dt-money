import styled from 'styled-components'

export const TransectionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  div {
    display: none;
    justify-content: space-between;
    color: ${({ theme }) => theme['gray-500']};
    margin-bottom: 0.75rem;
  }

  @media (max-width: 520px) {
    max-width: 327px;
    width: 100%;
    padding: 0;

    div {
      display: flex;
    }
  }
`

export const TransectionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  svg {
    display: none;
  }

  @media (max-width: 520px) {
    width: 100%;
    border-collapse: none;

    tr {
      background: ${({ theme }) => theme['gray-700']};
      display: grid;
      margin-bottom: 0.75rem;
      padding: 20px;

      /* height: 140px;
            width: 327px; */

      border-radius: 6px;

      .title {
        grid-area: title;
      }

      .price {
        grid-area: price;
        font-size: 20px;
        font-weight: 700;
      }

      .datas {
        grid-area: span 2;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
        color: ${({ theme }) => theme['gray-500']};

        svg {
          display: inline-block;
        }
      }

      grid-template-areas:
        'title title'
        'price price'
        'datas datas';
    }

    td {
      width: 100%;
      display: flex;
      flex-direction: column;
      border: 0;

      padding: 5px 20px;
      gap: 12px;

      &:first-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &:last-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
`

interface PriceHightLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHightLight = styled.span<PriceHightLightProps>`
  color: ${({ theme, variant }) =>
    variant == 'income' ? theme['green-300'] : theme['red-300']};
`
