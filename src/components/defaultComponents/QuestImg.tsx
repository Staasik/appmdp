import React from "react";
import { DiagnTextBlackBold } from 'styles/pages/Diagnostics/DiagnHeader';
import { QuestNum } from 'styles/defaultComponents/Quest'

interface IProps {
  text: string,
  options: string,
  index: number,
}

const Quest = ({ text, options, index }: IProps) => {

  return (
    <QuestNum index={index}>
      <DiagnTextBlackBold>{text}</DiagnTextBlackBold>
      <img src={options} style={{ "height": "50%", "width": "50%" }} />
    </QuestNum>

  );
}


export default Quest;