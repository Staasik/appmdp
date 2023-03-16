import { TextComponents, TrackButton, TrackButtonNext, TrackButtonsDiv, TrackButtonsDivNext, TrackerButtonsDiv, TrackerMiniText } from "styles/pages/Trackers/Trackers";

const ButtonsComponent = () => {
  return (            
    
    <div style={{width: "100%"}}>
        <TrackerMiniText>Кратко опишите данное событие</TrackerMiniText>
        <TrackerButtonsDiv style={{paddingBottom: "0px"}}>

        <TrackButtonsDiv>
            <TextComponents maxLength={300} placeholder="Сегодня произошла ситуация, когда..."></TextComponents>
        </TrackButtonsDiv>

        <TrackButtonsDivNext>
            <TrackButtonNext>Далее</TrackButtonNext>
        </TrackButtonsDivNext>
        </TrackerButtonsDiv>
    </div>
  );
};

export default ButtonsComponent
