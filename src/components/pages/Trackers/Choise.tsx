import { ReactComponent as AddPlus } from "images/Trackers/Add_Plus.svg";
import { ReactComponent as TrashFull } from "images/Trackers/Trash_Full.svg";
import { IOptions } from "mockdata/MoskTrackersSelect";
import { useState } from "react";
import Select from "react-select";
import {OneChoiseContainer,Number,Img,Emotion,SelectBlockEmotion,SelectBlockNumber,SelectImg} from "styles/pages/Trackers/Choise";

interface IProps {
  text: IOptions[];
  options: IOptions[];
  index: number;
  onChange({ ...args }: any): any;
}

const Choise = ({ options, index, onChange, text }: IProps) => {
  const [target, setTarget] = useState(null);

  return (
    <OneChoiseContainer>
      <SelectBlockEmotion>
        {
          <Emotion><Select key={index} options={text} defaultValue={target} placeholder="Выберите эмоцию" onChange={(value) => {onChange(value);}}/></Emotion>
        }
      </SelectBlockEmotion>
      <SelectBlockNumber>
        {
          <Number><Select key={index} options={options} defaultValue={target} placeholder="0" onChange={(value) => {onChange(value);}}/></Number>
        }
      </SelectBlockNumber>
      <SelectImg>
        {
          <Img><AddPlus key={index} /></Img>
        }
      </SelectImg>
      <SelectImg>
        {
          <Img><TrashFull key={index} /></Img>
        }
      </SelectImg>
    </OneChoiseContainer>
  );
};

export default Choise;
