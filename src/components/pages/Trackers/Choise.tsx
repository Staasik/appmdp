import { ReactComponent as AddPlus } from "images/Trackers/Add_Plus.svg";
import { ReactComponent as TrashFull } from "images/Trackers/Trash_Full.svg";
import { IOptions } from "mockdata/MoсkTrackersSelect";
import Select from "react-select";
import { OneChoiseContainer, Number, Img, Emotion, SelectBlockEmotion, SelectBlockNumber, SelectImg } from "styles/pages/Trackers/Choise";

interface IProps {
  text: IOptions[];
  options: IOptions[];
  index: number;
  onChange({ ...args }: any): any;
  addEmotion() : void;
  removeEmotion(): void
}

const Choise = ({ options, index, onChange, text, addEmotion, removeEmotion }: IProps) => {

  return (
    <OneChoiseContainer>
      <SelectBlockEmotion>
        <Emotion>
          <Select key={index} options={text} placeholder="Выберите эмоцию" onChange={(value) => { onChange(value)}} />
        </Emotion>
      </SelectBlockEmotion>
      <SelectBlockNumber>
        <Number>
          <Select key={index} options={options}  placeholder="0" onChange={(value) => { onChange(value)}} />
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
