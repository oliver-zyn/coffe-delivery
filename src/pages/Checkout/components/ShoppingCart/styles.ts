import { styled } from 'styled-components'

export const ShoppingCartContainer = styled.section`
  max-width: 28rem;
  width: 100%;

  h2 {
    font-size: ${(props) => props.theme['title-xs']};
  }

  section {
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme['base-card']};
    margin-top: 1rem;
    padding: 2.5rem;
    border-radius: 6px 36px;

    div.totalPrice {
      display: flex;
      flex-direction: column;
      padding: 1.5rem 0 0;
      gap: 0.75rem;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          font-size: ${(props) => props.theme['text-s']};
          color: ${(props) => props.theme['base-text']};
        }
      }

      div.total {
        span {
          font-size: ${(props) => props.theme['text-l']};
          font-weight: 700;
          color: ${(props) => props.theme['base-subtitle']};
        }
      }

      button {
        margin-top: 0.75rem;
        font-size: ${(props) => props.theme['button-g']};
        font-weight: 700;
        text-transform: uppercase;

        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme.yellow};
        border: 0;
        border-radius: 6px;
        padding: 1rem;

        cursor: pointer;
        transition: background 0.1s;

        &:hover {
          background: ${(props) => props.theme['yellow-dark']};
        }

        &:focus {
          outline: 1px solid ${(props) => props.theme['yellow-dark']};
        }
      }
    }
  }
`
