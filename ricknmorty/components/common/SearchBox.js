import React, {useState} from "react";
import styled from "styled-components";

const Input = styled.input`
    height:38px;
	padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 70%;
    background: rgb(255, 255, 255);;
    &:focus{
        outline:none;
        border: 1px solid green !important;
    }
`;
const ComboButton = styled.button`
    height:38px;
	float: left;
    width: 30%;
    background: #2196F3;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none; 
    cursor: pointer;
    &:hover{
        background: #0b7dda;
    }
    &:focus{
        outline:none;
        background: green;
    }
`;
const Form = styled.form`
    content: "";
    clear: both;
    display: table;
`;
const SearchWrapper = styled.div`
`;

export const SearchBox = (props) =>{
    const handleSubmit= (event) => {
        event.preventDefault();
        event.target.blur()
        let searchKey = event.target.previousSibling.value;
        props.updateName(searchKey)
    }
    
    return(
        <SearchWrapper>
            <Form>
                <Input/>
                <ComboButton onClick={handleSubmit}>Find</ComboButton>
            </Form>
        </SearchWrapper>
    )
};