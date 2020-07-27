import React, {useState, useEffect} from 'react'
import { FilterBox, CheckboxContainer, CheckboxLabel, CheckboxInput } from './Checkbox'


export const LeftFilter=(props)=>{
    const [currentSpecies, setCurrentSpecies] = useState("");
    const [currentGender, setCurrentGender] = useState("");
    const [checked, setChecked] = useState(false);
    const handleChangeSpecies = (event)=>{
        if(event.target.checked){
            setChecked(true);
            setCurrentSpecies(event.target.value);
        }else{
            setChecked(false);
            setCurrentSpecies('');
        }
            
    }
    const handleChangeGender = (event)=>{
        if(event.target.checked){
            setChecked(true);
            setCurrentGender(event.target.value);
        }else{
            setChecked(false);
            setCurrentGender('');
        }
            
    }
    const toggleFilter = (event)=>{
        if(event.target.innerHTML.trim()=='-'){
            event.target.innerHTML = "+";
            document.getElementById('filter-container').style.display='none';
        }else{
            event.target.innerHTML = "-";
            document.getElementById('filter-container').style.display='block';
        }
        
    }
    useEffect(() => {
        if(checked){
            props.setSpecies(currentSpecies);
            props.setGender(currentGender);
        }
    },[currentSpecies,currentGender]);
    return ( 
        <>
            <div className="filter-header">
                <label className="filter-label">Filters</label>
                <span className="filter-toggle" onClick={toggleFilter}>+</span>
            </div>
            <div id="filter-container">
                <FilterBox>
                    <label className="filter-label">Species</label>
                    <CheckboxContainer>
                        <CheckboxInput value="Human"   onChange={handleChangeSpecies} type="checkbox" />
                        <CheckboxLabel>Human</CheckboxLabel>
                    </CheckboxContainer>
                    <CheckboxContainer>
                        <CheckboxInput value="Mytholog"   onChange={handleChangeSpecies} type="checkbox" />
                        <CheckboxLabel active >Mytholog</CheckboxLabel>
                    </CheckboxContainer>
                    <CheckboxContainer>
                        <CheckboxInput value=""  onChange={(event)=>props.setSpecies(event.target.value)} type="checkbox" />
                        <CheckboxLabel>Other Species</CheckboxLabel>
                    </CheckboxContainer>
                </FilterBox>
                <FilterBox>
                    <label className="filter-label">Gender</label>
                    <CheckboxContainer>
                        <CheckboxInput value='male'    onChange={handleChangeGender} type="checkbox" />
                        <CheckboxLabel>Male</CheckboxLabel>
                    </CheckboxContainer>
                    <CheckboxContainer>
                        <CheckboxInput  value='female'   onChange={handleChangeGender} type="checkbox" />
                        <CheckboxLabel>Female</CheckboxLabel>
                    </CheckboxContainer>
                </FilterBox>
                <FilterBox>
                    <label className="filter-label">Origin</label>
                    <CheckboxContainer>
                        <CheckboxInput   type="checkbox" />
                        <CheckboxLabel>Unknown</CheckboxLabel>
                    </CheckboxContainer>
                    <CheckboxContainer>
                        <CheckboxInput    type="checkbox" />
                        <CheckboxLabel>Post-Apocalyptic Earth</CheckboxLabel>
                    </CheckboxContainer>
                    <CheckboxContainer>
                        <CheckboxInput    type="checkbox" />
                        <CheckboxLabel>Nuptia-4</CheckboxLabel>
                    </CheckboxContainer>
                    <CheckboxContainer>
                        <CheckboxInput    type="checkbox" />
                        <CheckboxLabel>Other Origins</CheckboxLabel>
                    </CheckboxContainer>
                </FilterBox>
            </div>
        </>
    )
    
};