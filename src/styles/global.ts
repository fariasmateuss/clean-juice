import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.inline};
    text-decoration: none;
    cursor: pointer;
  }

  body {
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    overflow: hidden;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
    list-style: none;
  }
`;
