import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: Orbitron, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
        background-color: #fff;
    } 

    *{
        box-sizing: border-box;
        font-family:inherit;
    }

    p{
        margin-top:0;
        margin-bottom: 10px;
    }
    .img-fluid{
        height:auto;
        max-width: 100%;
    }

    .container{
        width:1200px;
        padding:0 15px;
        margin:0 auto;
    }
    .filter-header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:0 0 26px 10px;
    }
    .filter-toggle{
        font-weight:900;
        border:1px solid #626262;
        border-radius:50%;
        height:25px;
        width:25px;
        font-size:32px;
        color:white;
        background:black;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        display:none;
        @media only screen and (max-width: 768px){
            display:inline-flex;
        }
    }
    .filter-label{
        display:block;
        color:#626262;
        /* margin:0 0 26px 10px; */
        font-size:24px;
        font-weight:700;
    }
    input[type="checkbox"]:checked + span {
        color: green;
    }
    .created{
        word-break: break-all;
    }
    #filter-container{
        display:block;
        @media only screen and (max-width: 768px){
            display:none;
        }
    }
    [type="checkbox"]:checked+span:after {
        content: '✔';
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 16px;
        line-height: 0.8;
        color: #fff;
        transition: all .2s;
        }
    
`;