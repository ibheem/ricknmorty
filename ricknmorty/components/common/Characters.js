import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import { loadCharacters } from "../../pages/api/characters";
import { Spinner } from "./Spinner";

const CharacterWrapper = styled.div`
    margin-top:20px;
    margin-bottom:20px;
`;

const ContentList = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #1f232a;
    
`;
const ContentBox = styled.div`
    width:25%;
    padding:10px 10px;
    margin-bottom:10px;
    @media only screen and (max-width: 767px){
        width:50%
    }
    
`;
const ImgBox = styled.div`
   position: relative;
    width: 100%;
    height: 429px;
    @media only screen and (max-width: 767px){
        height: 240px;
    }
    > img{
        object-fit: fill;
        width: 100%;
        height: 100%;
        object-position: center;
        border-radius: 7px 7px 0px 0px ;
    }
    
`;
const ImgCaption = styled.div`
    position: absolute;
    width:100%;
    bottom: 0;
    padding:8px;
    background-color: rgba(28, 25, 25, 0.8);
    
`;
const ImgName = styled.p`
    font-size: 16px;
    margin-bottom: 0;
    color:#b8b8b8;
    font-weight: 500;
    
`;
const ImgDetail = styled.p`
    font-size: 16px;
    margin-bottom: 0;
    color:#797979;
    font-weight: 500;
    
`;
const InfoList = styled.ul`
    padding:1px 15px 1px 15px;
    background-color: #333333;
    margin:0;
    list-style-type: none;
    border-radius: 0px 0px 7px 7px;
`;
const InfoItem = styled.li`
    border-bottom: 1px solid #3a3a3a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:5px 0;
    flex-wrap:wrap;
    &:last-child{
        border-color: transparent;
    }
`;
const InfoRight = styled.span`
    font-size: 14px;
    font-weight: 600;
    color:#b46d10;
    text-align: right;
    text-transform: capitalize;
    @media only screen and (max-width: 992px){
        width:100%;
        text-align: left;
    }
  
`;
const InfoLeft = styled.span`
    color:#686868;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    max-width: 70px;
    @media only screen and (max-width: 992px){
        width:100%;
    }
  
`;


export function Characters(props){
    
    let _characters = [];
    let _info = {};
    const { data, loading, error } = loadCharacters(props.queryParams);
    if(!loading){
        const {characters:{results}, characters:{info}} = data;
        _characters = _characters.concat(results);
        if(props.sortingFlag){
            _characters = _characters.slice().reverse();
        }
        
        
        _info=Object.assign({}, info)
        
    }
    useEffect(() => {
        props.updateInfo({..._info});
    },[props.queryParams]);
    const renderCharacters = ()=>{
        return(
            _characters.map(character=>{
                return(
                    <ContentBox key={character.id}>
                        <ImgBox>
                            <img src={character.image} alt={character.name} className="img-fluid" />
                            <ImgCaption>
                                <ImgName>{character.name}</ImgName>
                                <ImgDetail>
                                    <span className="id">id: </span>
                                    <span className="id-no">{character.id}</span>
                                    <span className="dash">&nbsp;-&nbsp;</span>
                                    <span className="created">created 2 years ago</span>
                                </ImgDetail>
                            </ImgCaption>
                        </ImgBox>
                        <InfoList>
                            <InfoItem>
                                <InfoLeft>status</InfoLeft>
                                <InfoRight>{character.status}</InfoRight>
                            </InfoItem>
                            <InfoItem>
                                <InfoLeft>species</InfoLeft>
                                <InfoRight>{character.species}</InfoRight>
                            </InfoItem>
                            <InfoItem>
                                <InfoLeft>gender</InfoLeft>
                                <InfoRight>{character.gender}</InfoRight>
                            </InfoItem>
                            <InfoItem>
                                <InfoLeft>origin</InfoLeft>
                                <InfoRight>{character.origin.name}</InfoRight>
                            </InfoItem>
                            <InfoItem>
                                <InfoLeft>last location</InfoLeft>
                                <InfoRight>post-apocalyptic Earth</InfoRight>
                            </InfoItem>
                        </InfoList>
                    </ContentBox>
                )
                
            })
        )
    };
    
    if(loading){
        return (
            <Spinner/>
        )
    }
    
    return(
        <CharacterWrapper>
            <ContentList>
                {renderCharacters()}
            </ContentList>
        </CharacterWrapper>        
    )
}