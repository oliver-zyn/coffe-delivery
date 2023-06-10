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

  h1, h2, h3 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
  }

  @media (max-width: 900px) {
        html {
            font-size: 87.5%;
        }
    }

`
