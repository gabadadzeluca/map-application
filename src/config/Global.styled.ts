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
  body{
    font-family: 'Pathway Extreme', sans-serif;
  }
  button, select{
    font-family: inherit;
    font-weight: 500;
  }
`;
