import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  body::-webkit-scrollbar {
    width: .4em;
  }
 
  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['base-hover']};
    border-radius: 4px;
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
  }

  input:focus {
    box-shadow: none;
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }

  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
  }

  @media (max-width: 900px) {
    html {
        font-size: 87.5%;
    }
  }
`
