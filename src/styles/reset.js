import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: 0;
        font-family: "Inter", sans-serif;
    }

    button{
        cursor: pointer;
        border: none;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
`