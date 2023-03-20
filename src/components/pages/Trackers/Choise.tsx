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
  index: number;
  onChange({ ...args }: any): any;
  addEmotion() : void;
  removeEmotion(): void
}

const Choise = ({ options, index, onChange, text, addEmotion, removeEmotion, value }: IProps) => {

  const [option, setOption] = useState<IAnswer>(value);

  useEffect(() => {
    onChange(option);
  }, [option])
  
  return (
    <OneChoiseContainer>
      <SelectBlockEmotion>
        <Emotion>
          <Select key={index} options={text} placeholder="Выберите эмоцию" onChange={(opt) => {opt && setOption({value:opt.value,label:option.label})}} />
        </Emotion>
      </SelectBlockEmotion>
      <SelectBlockNumber>
        <Number>
          <Select key={index} options={options}  placeholder="0" onChange={(opt) => {opt && setOption({value:option.value,label:opt.value})}} />
        </Number>
      </SelectBlockNumber>
      <SelectImg>
        <Img>
          <AddPlus key={index} onClick={() => addEmotion()}/>
        </Img>
      </SelectImg>
      <SelectImg>
        <Img>
          <TrashFull key={index} onClick={() => removeEmotion()}/>
        </Img>
      </SelectImg>
    </OneChoiseContainer>
  );
};

export default Choise;
