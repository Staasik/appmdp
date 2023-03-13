import { IOptions } from 'mockdata/mocktest1';
import { useState } from "react";
import Select from 'react-select';
import { QuestNumFive } from 'styles/defaultComponents/Quest';
import { DiagnTextBlackBold } from 'styles/pages/Diagnostics/DiagnHeader';


interface IProps {
  text: string,
  options: IOptions[],
  index: number,
  onChange({ ...args }: any): any,
}


const QuestFive = ({ text, options, index, onChange }: IProps) => {
  const [target, setTarget] = useState(null);
  return (
    <QuestNumFive index={index}>
      <DiagnTextBlackBold>{text}</DiagnTextBlackBold>
      <Select
        options={options}
        defaultValue={target}
        placeholder='Вариант ответа'
        onChange={(value) =>{onChange(value)}}
      />
    </QuestNumFive>

  );
}


export default QuestFive