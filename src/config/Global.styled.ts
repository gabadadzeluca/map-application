import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }
  html{
    font-size: 62.5%
  }
`;
