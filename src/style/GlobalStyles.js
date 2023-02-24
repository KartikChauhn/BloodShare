import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;;
}

body{
    background-color: #ffffff;  
}   


@media screen and (max-width: 650px) {
  body {
    background-color: lightgreen;
  }
}

`;

export default GlobalStyles;