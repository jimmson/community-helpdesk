import { createGlobalStyle } from "styled-components";
import SFProDisplayLight from "../fonts/SF-Pro-Display-Light.otf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display Light';
    src: local('SF Pro Display Light'), url(${SFProDisplayLight}) format('opentype');
  }
  body {
    font-family: 'SF Pro Display Light', BlinkMacSystemFont, 
      -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;
