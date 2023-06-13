import { styled } from 'styled-components'

export const CoffeListContainer = styled.section`
  margin-top: 5.875rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: ${(props) => props.theme['title-l']};
    font-weight: 800;
    margin-bottom: 3.375rem;
  }

  > div {
    display: grid;
    gap: 2.5rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  }
`
