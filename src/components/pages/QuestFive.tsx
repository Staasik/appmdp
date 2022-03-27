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
  width: 400px;
  gap:40px;    
  justify-content:flex-start;
  align-items:flex-start;
  padding:20px;
  @media (max-width:1024px) {
    width: 300px;
  }
  @media (max-width:800px) {
    width: 90%;
  }
`

const QuestFive = ({text,options,index}:IProps) => {
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

  
export default QuestFive;