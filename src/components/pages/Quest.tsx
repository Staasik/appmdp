import {DiagnTextBlackBold} from 'styles/pages/Diagnostics/DiagnHeader'

import React, { useState } from "react";
import Select from 'react-select';
import styled from "styled-components";
import {IOptions} from 'mockdata/mocktest1'

interface IProps {
    text: string,
    options: IOptions[],
    index:number,
} 
interface QuestNumProps {
  index:number,
}

export const QuestNum = styled.div<QuestNumProps>`
  display:flex;
  flex-direction:column;
  width: 450px;
  gap:30px;    
  justify-content:flex-start;
  align-items:flex-start;
  padding:30px;
  box-shadow: ${({index}:QuestNumProps)=>index%2==0?'0px 20px 40px -15px rgba(0, 0, 0, 0.05)':'0px 20px 40px -15px rgba(0, 0, 0, 0.05)'};
  border-radius: ${({index}:QuestNumProps)=>index%2!=0?'0 19px 19px 0':'19px 0 0 19px'};
  @media (max-width:1150px) {
    width: 300px;
  }
  @media (max-width:800px) {
    width: 80%;
    box-shadow: ${({index}:QuestNumProps)=>index%2==0?'0px':'0px'};
    border-radius: ${({index}:QuestNumProps)=>index%2!=0?'0':'0'};
  }
`

const Quest = ({text,options,index}:IProps) => {
    const [target, setTarget] = useState(null) ;
  return (
    <QuestNum index={index}>
        <DiagnTextBlackBold>{text}</DiagnTextBlackBold>
            <Select
                options={options}
                defaultValue={target}
                placeholder='Вариант ответа'
            />
    </QuestNum>

  );}

  
export default Quest;