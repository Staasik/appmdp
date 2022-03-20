import {DiagHtml,DiagHeader,DiagBody,DiagFooter,DiagnMenu,DiagnText,DiagnTextBlackBold,DiagnTextBlack,QuestItem,QuestNum,DiagnBlockImg,FooterItems,FooterItemsKGU,DiagnIcon,DiagnCP,DiagnTextDiagn,DiagnImg,DiagnBlock,DiagnTextProf,DiagnBlockText} from 'styles/pages/Diagnostic1'

import React, { useState } from "react";
import Select from 'react-select';

import {IOptions} from 'mockdata/mocktest1'

interface IProps {
    text: string,
    options: IOptions[],
    index:number,
} 

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