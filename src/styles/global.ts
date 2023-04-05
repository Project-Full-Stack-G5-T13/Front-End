import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {

    //BRAND COLORS

    --brand-1: #4529E6;
    --brand-2: #5126EA;
    --brand-3: #B0A6F0;
    --brand-4: #EDEAFD;

    //GRAY SCALE
    
    
    --gray-0: #0B0D0D;
    --gray-1: #212529;
    --gray-2: #495057;
    --gray-3: #868E96;
    --gray-4: #ADB5BD;
    --gray-5: #CED4DA;
    --gray-6: #DEE2E6;
    --gray-7: #E9ECEF;
    --gray-8: #F1F3F5;
    --gray-9: #F8F9FA;
    --gray-10: #FDFDFD;

    //FEEBACK
    
    --alert-1: #CD2B31;
    --alert-2: #FDD8D8;
    --alert-3: #FFE5E5;
    --sucess-1: #18794E;
    --sucess-2: #CCEBD7;
    --sucess-3: #DDF3E4;
    
    --font-primary: 'Lexend', sans-serif;
    --font-secundary: 'Inter', sans-serif;
    --font-title-0: 700 2rem/1.2"Inter", sans-serif;
    --font-title-1: 700 1.5rem/1.2"Inter", sans-serif;
    --font-title-2: 700 1.25rem/1.2"Inter", sans-serif;
    --font-title-3: 700 1rem/1.2"Inter", sans-serif;
    --font-text-0: 400 1.2rem/1.2"Inter", sans-serif;
    --font-text-1: 400 0.875rem/1.2"Inter", sans-serif;
    --font-text-2: 700 0.875rem/1.2"Inter", sans-serif;
    --font-text-3: 400 0.75rem/1.2"Inter", sans-serif;
    --radius-1: 5px;
    --radius-2: 10px;
    }
    
    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: var(--font-secundary);
    text-decoration: none;
    list-style: none;
    }
    body,html{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    }
`;

export default GlobalStyle;
