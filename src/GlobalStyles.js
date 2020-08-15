import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
    ::after,
    ::before {
    box-sizing: inherit;
  }

  body {
    padding: 20px;
    font-family: "Montserrat", sans-serif;
    background-color: #efefef;
    justify-content: center;
  }
`;
