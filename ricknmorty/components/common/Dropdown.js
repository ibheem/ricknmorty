import React, {useState, useEffect} from "react";
import Select from 'react-select';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  width:200px;
`;
const options = [
  { value: 'ascending', label: 'Ascending' },
  { value: 'descending', label: 'Descending' }
]

export const Dropdown = (props) => {
  useEffect(() => {
    props.updateFlag(!props.sortingFlag);
  },[props.sorting]);
  return(
    <SelectWrapper>
      <Select id='_dropdown'
      defaultValue={{ label: "Ascending", value: props.sorting }}
      placeholder={'Sort'}
      instanceId='_dropdown'
      inputId='_dropdown' options={options}
      onChange={(selectedOption) => props.updateSorting(selectedOption.value)}/>
    </SelectWrapper>
  )
}
  