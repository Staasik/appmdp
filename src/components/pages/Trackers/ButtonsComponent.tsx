import { useState } from "react";
import {
  TrackButton,
  TrackButtonsDivNext,
  TrackButtonsDiv,
  TrackButtonN,
  TrackerButtonsDiv,
  TrackerMiniText,
} from "styles/pages/Trackers/Trackers";

const ButtonsMock = ["Общение с коллегой","Общение с учеником", "Общение с группой детей", "Общение с родителями учеников", "Общение с администрацией школы", "Другое"]

const ButtonsComponent = () => {

  const [selectedBtnIdx, setSelectedBtnIdx] = useState<number>(-1);
  
  const Click = (index:number) => {
    if(index === selectedBtnIdx) {
      setSelectedBtnIdx(-1);
    }
    else {
      setSelectedBtnIdx(index);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <TrackerMiniText>Выберите ситуацию общения, в которой вы сегодня в течение дня приняли участие, и она вызвала у вас сильные эмоции</TrackerMiniText>
      <TrackerButtonsDiv style={{ paddingBottom: "0px" }}>
        <TrackButtonsDiv>
          {ButtonsMock.map((data, index) => (
            <TrackButton key={index} onClick={() => Click(index)} $disabled={index !== selectedBtnIdx}>{data}</TrackButton>
          ))}
        </TrackButtonsDiv>
        <TrackButtonsDivNext>
          <TrackButtonN $disabled={selectedBtnIdx === -1}>Далее</TrackButtonN>
        </TrackButtonsDivNext>
      </TrackerButtonsDiv>
    </div>
  );
};

export default ButtonsComponent;
