import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body,
  #root {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0;
    min-height: 100%;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
