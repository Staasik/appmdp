import { DiagnTextBlackBold } from 'styles/pages/Diagnostic2'

import React, { useState, useEffect } from "react";
import Select from 'react-select';
import styled from "styled-components";

interface IProps {
  text: string,
  options: string,
  index: number,
}
interface QuestNumProps {
  index: number,
}

export const QuestNum = styled.div<QuestNumProps>`
  display:flex;
  flex-direction:column;
  width: 300px;
  gap:20px;    
  justify-content:flex-start;
  align-items:flex-start;
  padding:50px;
  @media (max-width:1024px) {
  padding:20px;
  }

`
const QuestImg = ({ text, options, index }: IProps) => {

  return (
    <QuestNum index={index}>
      <DiagnTextBlackBold>{text}</DiagnTextBlackBold>
      <img src={options} style={{ "height": "100%", "width": "100%" }} />
    </QuestNum>

  );
}


export default QuestImg;