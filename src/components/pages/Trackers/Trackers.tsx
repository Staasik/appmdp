import DiaryView from "components/pages/Trackers/DiaryView";
import { ReactComponent as Line } from "images/LineModal.svg";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import StepMock from "mockdata/MoсkTacker";
import { useContext, useState, useEffect } from "react";
import { DiagHtml, DiagnImg } from "styles/pages/Diagnostics/DiagnHeader";
import { BtnNextContainer, ButtonNext } from "styles/pages/Trackers/Buttons";
import {
  CalendarContainer,
  ComponentContainer,
  DatePickerCalendar,
  DiaryText,
  EventContainer,
  StepContainer,
  StepText,
  TextDescription,
  WelcomeText
} from "styles/pages/Trackers/Trackers";
import { IAnswer } from "./Choises";

const Trackers = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [date, setDate] = useState(new Date());
  const { store } = useContext(Context);
  const { tempTrackerAnswers, trackerAnswers, user: userData } = store;
  
  const handleClick = () => {
    if (tempTrackerAnswers[currentStep].value !== null) {
      if(currentStep < 5) {
        setCurrentStep(currentStep + 1)
      }
      else{
        store.setTrackersData(date)
      }
    }
  };

  useEffect(() => {
    store.getTrackersData(date);
    setCurrentStep(0);
  }, [date])
  
  return (
    <DiagHtml>
      <DiagnImg style={{ gap: "0px" }}>
        <WelcomeText>Здравствуйте, {userData.name}</WelcomeText>
        <TextDescription>
          В личном кабинете появились новые чек-листы для Вас
        </TextDescription>
        <Line style={{ width: "100%" }} />
        <DiaryText> Дневник Эмоций</DiaryText>
        <StepContainer>
          {StepMock.map((data, index) => (
            <StepText key={index} $color={index <= currentStep} onClick={() => { setCurrentStep(index)}}> 
              {data.stepName}
            </StepText>
          ))}
        </StepContainer>
        <ComponentContainer>
          {StepMock[currentStep].component}
          <BtnNextContainer>
            <ButtonNext
              $disabled={
                tempTrackerAnswers[currentStep].value === null ||
                (tempTrackerAnswers[currentStep].type === "multiselect" &&
                  (tempTrackerAnswers[currentStep].value as Array<IAnswer>).some(
                    (obj) => obj.value === null
                  ))
              }
              onClick={() => handleClick()}
            >
              {currentStep != 5 ? "Далее" : "Записать в дневник"}
            </ButtonNext>
          </BtnNextContainer>
        </ComponentContainer>
        <Line
          style={{ width: "100%", paddingBottom: "40px", paddingTop: "0px" }}
        />
        <EventContainer>
          <CalendarContainer>
            <DatePickerCalendar
              onChange={(value, e) => setDate(value as Date)}
              value={date}
            />
          </CalendarContainer>
          <DiaryView date={date} data={trackerAnswers} />
        </EventContainer>
      </DiagnImg>
    </DiagHtml>
  );
};

export default observer(Trackers);
