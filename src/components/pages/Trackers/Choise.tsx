import { IOptions } from 'mockdata/mocktest1';
import Select from 'react-select';
import { TrackButtonNext, SelectBlocks, TrackButtonsDivNext, TrackerButtonsDiv, TrackerMiniText, TrackButtonsDiv } from "styles/pages/Trackers/Trackers";
import { ReactComponent as AddPlus } from 'images/Trackers/Add_Plus.svg'
import { ReactComponent as TrashFull } from 'images/Trackers/Trash_Full.svg';import { useState } from 'react';

interface IProps {
    text: IOptions[],
    options: IOptions[],
    index: number,
    onChange({...args}: any) : any,
  }

const Choise = ({ options, index, onChange,text }: IProps) => {

  const [target, setTarget] = useState(null);

  return (
    <TrackButtonsDiv style={{gap: "10px", flexWrap: "nowrap", paddingBottom: "0px"}}>
        <SelectBlocks style={{width: "80%", paddingBottom: "0px"}}>
            {
                <div style={{width: "100%"}}><Select  key={index} options={text}
                defaultValue={target} placeholder="Выберите эмоцию"
                onChange={(value) =>{onChange(value)}}/></div>
            }
        </SelectBlocks>
        <SelectBlocks style={{width: "10%", paddingBottom: "0px"}}>
            {
                <div style={{width: "100px"}}><Select  key={index} options={options}
                defaultValue={target} placeholder="0"
                onChange={(value) =>{onChange(value)}}/></div>
            }
        </SelectBlocks>
        <SelectBlocks style={{width: "5%", paddingBottom: "0px"}}>
            {
                <div style={{width: "50px"}}><AddPlus key={index}/></div>
            }
        </SelectBlocks>
        <SelectBlocks style={{width: "5%", paddingBottom: "0px"}}>
            {
                <div style={{width: "50px"}}><TrashFull key={index}/></div>
            }
        </SelectBlocks>
    </TrackButtonsDiv>
  );
};

export default Choise
