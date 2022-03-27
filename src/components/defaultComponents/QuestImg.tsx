import React from "react";
import { DiagnTextBlackBold } from 'styles/pages/Diagnostics/DiagnHeader';
import { QuestNumImg } from 'styles/defaultComponents/Quest'
interface IProps {
  text: string,
  options: string,
  index: number,
}

const Quest = ({ text, options, index }: IProps) => {

  return (
    <QuestNumImg index={index}>
      <DiagnTextBlackBold>{text}</DiagnTextBlackBold>
      <img src={options} style={{ "height": "100%", "width": "100%" }} />
    </QuestNumImg>

  );
}


export default Quest;