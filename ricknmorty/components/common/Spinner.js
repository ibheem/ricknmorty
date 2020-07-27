import React from "react";
import styled from "styled-components";
const SpinnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:550px;
`;

const StyledSpinner = styled.div`
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  

 /* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export const Spinner = () => {
 
    return(
       <SpinnerContainer>
           <StyledSpinner/>
       </SpinnerContainer>
    )
}
