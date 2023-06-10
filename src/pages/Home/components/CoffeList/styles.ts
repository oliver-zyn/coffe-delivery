import { styled } from 'styled-components'

export const CoffeListContainer = styled.section`
  margin-top: 5.875rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: ${(props) => props.theme['title-l']};
    font-weight: 800;
  }
`
