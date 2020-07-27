import styled from 'styled-components'
    const FilterBox = styled.div`
        display:flex;
        padding:15px;
        border:1px solid #626262;
        border-radius:10px;
        flex-direction: column;
        margin-bottom:20px;
    `;
    const CheckboxContainer = styled.label`
        display: inline-flex;
        cursor: pointer;
        position: relative;
        margin: 10px 0 10px 0;
    `;

    const CheckboxLabel = styled.span`
        color:#626262;
        /* color: ${p=> p.active?'green':'#626262'}; */
        padding: 0.25rem 0.25rem;
    `; 
    const CheckboxInput = styled.input`
        height: 25px;
        width: 25px;
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none;
        
        border: 1px solid #34495E;
        background-color: #eee;
        border-radius: 4px;
        outline: none;
        transition-duration: 0.3s;
        cursor: pointer;
        &:checked{
            border: 1px solid #41B883;
            background-color: green;
        }
        &:active{
            border: 2px solid #34495E;
        }
    `;

    export{ FilterBox, CheckboxContainer, CheckboxLabel, CheckboxInput }