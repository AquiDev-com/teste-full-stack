import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Sono', sans-serif;
    font-weight: 400;
}
ul, ol, li{
    list-style-type: none;
}
a{
    text-decoration:none;
}
button{
    cursor: pointer;
    background-color:transparent;
    border:none;
}
body, html {
    overflow-X: hidden !important;
    background-color: #41342A;
    font-family: 'Nunito Sans', sans-serif;
}
`