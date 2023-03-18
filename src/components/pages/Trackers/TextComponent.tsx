import { useState } from "react";
import { TextComponents, TrackButtonN, TrackButtonsDiv, TrackButtonsDivNext, TrackerButtonsDiv, TrackerMiniText } from "styles/pages/Trackers/Trackers";

const ButtonsComponent = () => {

  const [eventText, setEventText] = useState<string>('')

  return (
    <div style={{ width: "100%" }}>
      <TrackerMiniText>Кратко опишите данное событие</TrackerMiniText>
      <TrackerButtonsDiv style={{ paddingBottom: "0px" }}>
        <TrackButtonsDiv>
          <TextComponents onChange={(e) => setEventText(e.target.value.trimStart())} value={eventText} maxLength={300} placeholder="Сегодня произошла ситуация, когда..."></TextComponents>
        </TrackButtonsDiv>
        <TrackButtonsDivNext>
          <TrackButtonN $disabled={eventText.length === 0}>Далее</TrackButtonN>
        </TrackButtonsDivNext>
      </TrackerButtonsDiv>
    </div>
  );
};

export default ButtonsComponent
