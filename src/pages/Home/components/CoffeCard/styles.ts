import { styled } from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  max-width: 16rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1.5rem 1.25rem;

  border-radius: 6px 36px;

  img {
    margin-top: -1.5rem;
    width: 7.5rem;
  }

  h3 {
    font-size: ${(props) => props.theme['title-s']};
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0.75rem 0 1rem 0;

  span {
    font-size: ${(props) => props.theme.tag};
    font-weight: 700;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;

    text-transform: uppercase;
  }
`

export const CoffeDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: ${(props) => props.theme['text-s']};
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const CoffeFooter = styled.div`
  display: flex;

  div:first-child {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  div:first-child span {
    font-size: ${(props) => props.theme['text-s']};
    color: ${(props) => props.theme['base-text']};
    align-self: flex-end;
  }

  div:first-child h4 {
    font-size: ${(props) => props.theme['title-m']};
    color: ${(props) => props.theme['base-text']};
    font-weight: 800;
  }
`
