import { createGlobalStyle } from "styled-components";

 const GlobalStyles = createGlobalStyle`
  html {
 box-sizing: border-box;
  }

  body {
  font-size: 14px;
  color: ${({theme}) =>theme.colors.text}
  line-height: 1.4;
  fon-weight: 400;
  }

  *,
  *::after,
  *::before {
  box-sizing: inherit;
  }

  ul {
  
  list-style: none;
  }

  li {
  list-style: none;
  }

  a {
   text-decoration: none;
   color: inherit;
   margin: 0;
   padding: 0;
  }
 
 `



export default GlobalStyles