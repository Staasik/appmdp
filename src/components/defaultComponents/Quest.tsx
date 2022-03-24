import { IOptions } from 'mockdata/mocktest1';
import React, { useState } from "react";
import Select from 'react-select';
import { QuestNum } from 'styles/defaultComponents/Quest';
import { DiagnTextBlackBold } from 'styles/pages/Diagnostics/DiagnHeader';


interface IProps {
  text: string,
  options: IOptions[],
  index: number,
}

const Quest = ({ text, options, index }: IProps) => {
  const [target, setTarget] = useState(null);
  return (

    <QuestNum index={index}>
      <DiagnTextBlackBold>{text}</DiagnTextBlackBold>
      <Select
        options={options}
        defaultValue={target}
        placeholder='Вариант ответа'
      />
    </QuestNum>

  );
}


export default Quest;