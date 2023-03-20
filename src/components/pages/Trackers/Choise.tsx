import { ReactComponent as AddPlus } from "images/Trackers/Add_Plus.svg";
import { ReactComponent as TrashFull } from "images/Trackers/Trash_Full.svg";
import { IOptions } from "mockdata/MoсkTrackersSelect";
import Select from "react-select";
import { OneChoiseContainer, Number, Img, Emotion, SelectBlockEmotion, SelectBlockNumber, SelectImg } from "styles/pages/Trackers/Choise";
import { IAnswer,defaultOption } from "./ChoiseComponent";
import { useState,useEffect } from "react";
interface IProps {
  text: IOptions[];
  value: IAnswer;
  options: IOptions[];
  onChange({ ...args }: any): any;
  addEmotion() : void;
  removeEmotion(): void
}

const Choise = ({ options, onChange, text, addEmotion, removeEmotion, value}: IProps) => {
  
  return (
    <OneChoiseContainer>
      <SelectBlockEmotion>
        <Emotion>
          <Select options={text} value={text[value.value]} placeholder="Выберите эмоцию" onChange={(opt) => {opt != null && onChange({value:opt.value,label:value.label})}} />
        </Emotion>
      </SelectBlockEmotion>
      <SelectBlockNumber>
        <Number>
          <Select options={options} value={options[value.label]} placeholder="0" onChange={(opt) => {opt != null && onChange({value:value.value,label:opt.value})}} />
        </Number>
      </SelectBlockNumber>
      <SelectImg>
        <Img>
          <AddPlus onClick={() => addEmotion()}/>
        </Img>
      </SelectImg>
      <SelectImg>
        <Img>
          <TrashFull onClick={() => removeEmotion()}/>
        </Img>
      </SelectImg>
    </OneChoiseContainer>
  );
};

export default Choise;
