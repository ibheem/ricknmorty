import styled from 'styled-components';
    const TagBox = styled.div`
        display:flex;
        padding:10px;
        border:1px solid #626262;
        border-radius:10px;
        flex-direction: column;
        margin-bottom:20px; 
    `;
    const TagBox = styled.div`
        display:flex;
        padding:10px;
        border:1px solid #626262;
        border-radius:10px;
        flex-direction: column;
        margin-bottom:20px;
    `;
    const TagText = styled.label`
        display: inline-flex;
        cursor: pointer;
        position: relative;
        margin: 10px 0 10px 0;
    `;

    const TagClose = styled.span`
        color:#626262;
        padding: 0.25rem 0.25rem;
    `; 
    

    export{ TagBox, TagText, TagClose }