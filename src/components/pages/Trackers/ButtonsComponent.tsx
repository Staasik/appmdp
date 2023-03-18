import { useState } from "react";
import {
  TrackButton,
  TrackButtonsDivNext,
  TrackButtonsDiv,
  TrackButtonN,
  TrackerButtonsDiv,
  TrackerMiniText,
} from "styles/pages/Trackers/Trackers";

const ButtonsMock = [
  {
    value: "Общение с коллегой",
  },
  {
    value: "Общение с учеником",
  },
  {
    value: "Общение с группой детей",
  },
  {
    value: "Общение с родителями учеников",
  },
  {
    value: "Общение с администрацией школы",
  },
  {
    value: "Другое",
  },
];

const ButtonsComponent = () => {


  const [selectedButton, setSelectedButton] = useState<number>(-1);
  const Click = (index:number) => {
    if(index === selectedButton) {
        setSelectedButton(-1);
    }
    else {
        setSelectedButton(index);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <TrackerMiniText>Выберите ситуацию общения, в которой вы сегодня в течение дня приняли участие, и она вызвала у вас сильные эмоции</TrackerMiniText>
      <TrackerButtonsDiv style={{ paddingBottom: "0px" }}>
        <TrackButtonsDiv>
          {ButtonsMock.map((data, index) => (
            <TrackButton key={index} onClick={() => Click(index)} $isClick={index === selectedButton}>{data.value}</TrackButton>
          ))}
        </TrackButtonsDiv>
        <TrackButtonsDivNext>
          <TrackButtonN $isClick={selectedButton !== -1}>Далее</TrackButtonN>
        </TrackButtonsDivNext>
      </TrackerButtonsDiv>
    </div>
  );
};

export default ButtonsComponent;
