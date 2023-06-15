import { styled } from 'styled-components'

export const CoffeListContainer = styled.section`
  margin: 5.875rem 0;

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

  @media (max-width: 900px) {
    h2 {
      text-align: center;
    }
    > div {
      justify-items: center;
    }
  }
`
