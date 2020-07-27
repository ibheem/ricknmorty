import React, { useState, useEffect } from "react";
import { PageLayout, SearchBox, AsideSection, MainSection, UtilWrapper, Pagination } from '../components/common';
import { Dropdown, LeftFilter } from '../components/common';
import { Characters } from "../components/common";
// import { loadGetInitialProps } from "next/dist/next-server/lib/utils";



export default function Home(){
    const [name, setName ] = useState('');
    const [page, setPage ] = useState(1);
    const [sortingFlag, setsortingFlag ] = useState(true);
    const [sorting, setSorting ] = useState('ascending');
    const [gender, setGender ] = useState('');
    const [species, setSpecies ] = useState('');
    const [queryParams, setQueryParams ] = useState({page: page, filter: { name:name, gender:gender, species:species}});
    const [info, setInfo] = useState({next: 2, pages: 30, prev: null});

    useEffect(()=>{
        setQueryParams({page: page, filter: { name:name, gender:gender, species:species}});
        
        
    },[name,page,sorting,gender,species]);
    
    return(
        <PageLayout>
            <AsideSection>
            <LeftFilter species={species} setSpecies={setSpecies} gender={gender} setGender={setGender}  />
            </AsideSection>
            <MainSection>
                <UtilWrapper>
                    <SearchBox  updateName={setName}/>
                    <Dropdown sortingFlag={sortingFlag} updateFlag={setsortingFlag} species={species} sorting={sorting} updateSorting={setSorting}/>
                </UtilWrapper>
                <Characters sortingFlag={sortingFlag} sorting={sorting} updateInfo={setInfo} queryParams={queryParams}/>
                <Pagination info={info} updatePage={setPage}/>
            </MainSection>
        </PageLayout>
    )
}