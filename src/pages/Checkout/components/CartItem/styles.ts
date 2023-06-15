import { styled } from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem 0;

  &:first-child {
    padding: 0 0 1.5rem;
  }

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    max-width: 4rem;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'title title'
      'input button';
    gap: 0.5rem;
    max-width: 10.625rem;

    p {
      grid-area: title;
      font-size: ${(props) => props.theme['text-m']};
      color: ${(props) => props.theme['base-subtitle']};
    }

    input {
      grid-area: input;
      max-width: 4.5rem;
      min-height: 2rem;
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-title']};
      padding: 0.5rem;
      border: 0;
      border-radius: 6px;
      text-align: center;
    }

    button {
      grid-area: button;
      display: flex;
      align-items: center;

      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-text']};
      font-size: ${(props) => props.theme['button-m']};
      text-transform: uppercase;

      gap: 0.25rem;
      max-width: 5.75rem;
      min-height: 2rem;
      padding: 0.5rem;
      border: 0;
      border-radius: 6px;

      cursor: pointer;
      transition: background 0.1s;

      svg {
        color: ${(props) => props.theme.purple};
      }

      &:hover {
        background: ${(props) => props.theme['base-hover']};
      }
    }
  }

  span {
    align-self: flex-start;
    margin-left: 1.875rem;
    font-size: ${(props) => props.theme['text-m']};
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
`
