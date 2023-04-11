import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {

    //BRAND COLORS

    --brand-1: #4529E6;
    --brand-2: #5126EA;
    --brand-3: #B0A6F0;
    --brand-4: #EDEAFD;

    //GREY SCALE
    
    
    --grey-0: #0B0D0D;
    --grey-1: #212529;
    --grey-2: #495057;
    --grey-3: #868E96;
    --grey-4: #ADB5BD;
    --grey-5: #CED4DA;
    --grey-6: #DEE2E6;
    --grey-7: #E9ECEF;
    --grey-8: #F1F3F5;
    --grey-9: #F8F9FA;
    --grey-10: #FDFDFD;

    --fixed-white: #FFFFFF;

    //FEEBACK
    
    --alert-1: #CD2B31;
    --alert-2: #FDD8D8;
    --alert-3: #FFE5E5;
    --success-1: #18794E;
    --success-2: #CCEBD7;
    --success-3: #DDF3E4;
    
    --font-primary: 'Lexend', sans-serif;
    --font-secundary: 'Inter', sans-serif;


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
    min-height: 100vh;
    height: 100%;
    overflow-x: hidden;
    background-color: var(--grey-8)
    }

    button{
        cursor: pointer;
    }

    .heading-1-700{
        font-family: 'Lexend';
        font-weight: 700;
        font-size: 44px;
        line-height: 56px;        
        color: var(--grey-1);
    }

    .heading-2-600{
        font-family: 'Lexend';
        font-weight: 600;
        font-size: 36px;
        line-height: 45px;        
        color: var(--grey-1);
    }
    
    .heading-3-600{
        font-family: 'Lexend';
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;        
        color: var(--grey-1);
    }

    .heading-3-500{
        font-family: 'Lexend';
        font-weight: 500;
        font-size: 32px;
        line-height: 40px;        
        color: var(--grey-1);
    }

    .heading-4-600{
        font-family: 'Lexend';
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;        
        color: var(--grey-1);
    }

    .heading-4-500{
        font-family: 'Lexend';
        font-weight: 500;
        font-size: 28px;
        line-height: 35px;        
        color: var(--grey-1);
    }

    .heading-5-600{
        font-family: 'Lexend';
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;        
        color: var(--grey-1);
    }

    .heading-5-500{
        font-family: 'Lexend';
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;        
        color: var(--grey-1);
    }
    
    .heading-6-600{
        font-family: 'Lexend';
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;        
        color: var(--grey-1);
    }

    .heading-6-500{
        font-family: 'Lexend';
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;        
        color: var(--grey-1);
    }

    .heading-7-600{
        font-family: 'Lexend';
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;        
        color: var(--grey-1);
    }

    
    .heading-7-500{
        font-family: 'Lexend';
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;        
        color: var(--grey-1);
    }
    
    .heading-8-500{
        font-family: 'Lexend';
        font-size: 13px;
        line-height: 0px;
    }
    
`;

export default GlobalStyle;
