import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Poppins, sans-serif;
}

button{
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
}

a, li, ul{
    text-decoration: none;
}

`