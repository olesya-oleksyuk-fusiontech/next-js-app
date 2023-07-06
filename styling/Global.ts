import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.font.family};
    line-height: 1.6;
    font-size: ${({ theme }) => theme.font.size.sm};
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text.main};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
