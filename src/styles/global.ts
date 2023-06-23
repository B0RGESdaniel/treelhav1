import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --green-100: #B2CFCE;
        --green-200: #29A19C;
        --gray: #435055;
        --dark: #27323A;
        --white: #FEFEFE;

        --facebook: #19376D;
        --apple: #0F0E0E;
        --google: #C72C41;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    body {
        background: var(--dark);
        color: var(--white);
        font-family: 'Montserrat', sans-serif;
    }

    button, input {
        font-family: 'Montserrat', sans-serif;
    }
`;