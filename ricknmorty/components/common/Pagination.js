import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import { client, loadCharacters } from "../../pages/api/characters"

const PaginationWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const BtnGroup = styled.div`
   font-family:Orbitron, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    > button{
        background-color: #4CAF50; /* Green background */
        border: 1px solid green; /* Green border */
        color: white; /* White text */
        padding: 10px 12px; /* Some padding */
        cursor: pointer; /* Pointer/hand icon */
        float: left; /* Float the buttons side by side */
        font-family:inherit;
        &:not(:last-child) {
            border-right: none; /* Prevent double borders */
        }
        &:disabled{
            background:#eee;
            color:#626262;
        }
        &:focus{
            outline:none;
            background: orange;
        }
    }
    &:after {
        content: "";
        clear: both;
        display: table;
    }
    
`;

export const Pagination = (props) => {
    const [page, setPage] = useState(1);  
    
    const handlePagination = (event)=>{
        event.preventDefault();
        event.target.blur();
        
            if(event.target.id=='prev'){
                if(page !=1)
                    setPage(page-1);
            }else{
                if(page !=props.info.pages)
                setPage(page+1);
            }
        
    };
    useEffect(()=>{
        props.updatePage(page);
    },[page]);
 
    return(
        <PaginationWrapper>
            <BtnGroup>
                <button  onClick={handlePagination} id="prev" >Back</button>
                <button style={{pointerEvents: "none",backgroundColor: "#2196F3",}}>Page - {page}</button>
                <button  id="next" onClick={handlePagination}>Forth</button>
            </BtnGroup>
        </PaginationWrapper>
    )
}