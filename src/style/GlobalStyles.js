import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    ${'' /* font-family: 'Dosis', sans-serif; */}
    transition: all ease 0.2s;
    
}

input{
    color: black;
}
body{
    /* background-color: #ffffff;  */
    /* background-color: #eafbeb;  */
    background-color: #f6f9f6; 
    ${'' /* background-color: #ffb4b4; */}
     
}   

@keyframes showUp {
        from {opacity: 0;}
        to {opacity: 1;}
}


@media screen and (max-width: 650px) {
  body {
    background-color: lightgreen;
  }
}

@keyframes showUp {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

`;

export default GlobalStyles;