import React, {useState} from "react";
import { DiagnTextBlackBold } from 'styles/pages/Diagnostics/DiagnHeader';
import { QuestNumImg, Image } from 'styles/defaultComponents/Quest'
interface IProps {
  text: string,
  image: string,
  index: number,
  onChange({ ...args }: any): any,
  selected: boolean
}

const Quest = ({ text, image, index, onChange, selected }: IProps) => {

  return (
    <QuestNumImg index={index}>
      <DiagnTextBlackBold>{text}</DiagnTextBlackBold>
      <Image src={image} style={{ "height": "100%", "width": "100%"}} onClick={()=>{onChange(index)}} $selected={selected}/>
    </QuestNumImg>

  );
}


export default Quest;