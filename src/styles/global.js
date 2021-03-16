import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  body {
    min-height: 100vh;
    margin: 0;
    color: ${({ theme }) => theme.color.gray};
    background-color: ${({ theme }) => theme.color.bg};
  }
  
  body,
  button {
    font-family: 'Poppins', sans-serif;
    font-family: 'DotGothic16', sans-serif;
    font-family: 'Syne Mono', monospace;
  }

`
 
export default GlobalStyle