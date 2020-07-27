import React, { useState }  from "react";
import styled from 'styled-components';
const Content = styled.section`
    display: flex; 
    flex-flow: wrap;
    justify-content: space-between;
    min-height:100vh; 
    width:100%;
    margin-top: 70px;
    padding: 0 16px;
    box-sizing:border-box;
    font-family: Orbitron;
`;



export function PageLayout({children}){
   
    return(
            <Content>
                {children}
            </Content>
    )
}