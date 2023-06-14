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

  input:focus {
    box-shadow: none;
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
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
    grid-template-columns: 3fr 3fr 1fr;

    input#district {
      grid-column: 1;
      width: 100%;
    }

    input#city {
      grid-column: 2;
      width: 100%;
    }

    input#uf {
      grid-column: 3;
      width: 100%;
    }
  }

  @media (max-width: 487px) {
    div.adressFirst {
      flex-direction: column-reverse;
    }

    div.adressSecond {
      grid-template-columns: 1fr 1fr 1fr;
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
    justify-content: space-between;
  }
`

export const RadioBox = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme['base-button']};
  padding: 1rem 1.25rem;
  min-width: 11.125rem;

  font-size: ${(props) => props.theme['button-m']};
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;

  border-radius: 6px;
  border: 0;

  svg {
    color: ${(props) => props.theme.purple};
  }
`
