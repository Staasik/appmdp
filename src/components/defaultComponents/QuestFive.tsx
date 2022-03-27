import {DiagnTextBlackBold} from 'styles/pages/Diagnostics/DiagnHeader'

import React, { useState } from "react";
import Select from 'react-select';
import styled from "styled-components";
import {IOptions} from 'mockdata/mocktest1'
import { QuestNumFive } from 'styles/defaultComponents/Quest'

interface IProps {
    text: string,
    options: IOptions[],
    index:number,
} 


const QuestFive = ({text,options,index}:IProps) => {
    const [target, setTarget] = useState(null) ;
  return (
    <QuestNumFive index={index}>
        <DiagnTextBlackBold>{text}</DiagnTextBlackBold>
            <Select
                options={options}
                defaultValue={target}
                placeholder='Вариант ответа'
            />
    </QuestNumFive>

  );}

  
export default QuestFive;