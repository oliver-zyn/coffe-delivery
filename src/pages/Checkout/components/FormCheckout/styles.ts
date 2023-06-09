import { styled } from 'styled-components'

export const FormCheckoutContainer = styled.section`
  max-width: 40rem;

  h2 {
    font-size: ${(props) => props.theme['title-xs']};
  }

  form,
  section {
    background: ${(props) => props.theme['base-card']};
    margin-top: 1rem;
    padding: 2.5rem;
    border-radius: 6px;
  }
`

export const HeaderBase = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: ${(props) => props.theme['text-m']};
    }

    span {
      color: ${(props) => props.theme['base-text']};
      font-size: ${(props) => props.theme['text-s']};
    }
  }
`

export const FormHeader = styled(HeaderBase)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const FormBody = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  input {
    background: ${(props) => props.theme['base-input']};
    margin-top: 1rem;
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 6px;
    color: 1px solid ${(props) => props.theme['base-text']};
  }

  div.adressFirst {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    gap: 0 0.75rem;

    input#num {
      flex: 1;
    }

    input#comp {
      flex: 2;
    }

    span {
      position: absolute;
      right: 0.75rem;
      top: 1.9rem;
      color: ${(props) => props.theme['base-label']};
      font-style: italic;
      font-size: ${(props) => props.theme['text-xs']};
    }
  }

  div.adressSecond {
    display: grid;
    grid-gap: 0 0.75rem;
    grid-template-columns: 2.55fr 3fr 1fr;

    input#district {
      width: 100%;
    }

    input#city {
      width: 100%;
    }

    input#uf {
      width: 100%;
    }
  }

  @media (max-width: 487px) {
    div.adressFirst {
      flex-direction: column-reverse;
    }

    div.adressSecond {
      grid-template-columns: 3fr 1fr;
      grid-template-areas:
        'dist dist'
        'city uf';

      input#district {
        grid-area: dist;
        width: 100%;
      }

      input#city {
        grid-area: city;
        width: 100%;
      }

      input#uf {
        grid-area: uf;
        width: 100%;
      }
    }
  }
`

export const PaymentHeader = styled(HeaderBase)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentBody = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  @media (max-width: 900px) {
    div {
      flex-direction: column;

      button {
        flex: 1;
        width: 100%;
        justify-content: center;
      }
    }
  }
`

interface RadioBoxProps {
  $isActive: boolean
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) =>
    props.$isActive ? props.theme['purple-light'] : props.theme['base-button']};

  padding: 1rem 1.25rem;
  min-width: 11rem;

  font-size: ${(props) => props.theme['button-m']};
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;

  border-radius: 6px;
  border: 1px solid
    ${(props) =>
      props.$isActive ? props.theme.purple : props.theme['base-button']};

  cursor: pointer;
  transition: background 0.1s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:focus {
    box-shadow: none;
  }

  &:hover {
    background: ${(props) =>
      props.$isActive
        ? props.theme['purple-light']
        : props.theme['base-hover']};
  }
`
