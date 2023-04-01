import { ReactComponent as Line } from "images/LineModal.svg";
import { ReactComponent as Calendar } from "images/Trackers/Calendar_Check.svg";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import StepMock from "mockdata/MoсkTacker";
import { useState, useContext, useEffect } from "react";
import { DiagHtml, DiagnImg } from "styles/pages/Diagnostics/DiagnHeader";
import { BtnNextContainer, ButtonNext } from "styles/pages/Trackers/Buttons";
import {
  CalendarContainer,
  DateContainer,
  ComponentContainer,
  DatePickerCalendar,
  DiaryText,
  EventContainer,
  StepContainer,
  StepText,
  TextCalendar,
  TextCalendarContainer,
  TextDescription,
  TrackDate,
  WelcomeText,
} from "styles/pages/Trackers/Trackers";
import { IAnswer } from "./Choises";

const Trackers = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [date, setDate] = useState(new Date());
  const { store } = useContext(Context);
  const { trackerAnswers } = store;

  const handleClick = () => {
    if (trackerAnswers[currentStep].value !== null) {
      currentStep < 5 && setCurrentStep(currentStep + 1);
    }
  };

  function getCurrentDate(newDate: Date) {
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date < 10 ? `0${date}` : `${date}`}${"."}${
      month < 10 ? `0${month}` : `${month}`
    }${"."}${year}`;
  }

  return (
    <DiagHtml>
      <DiagnImg style={{ gap: "0px" }}>
        <WelcomeText>Здравствуйте, </WelcomeText>
        <TextDescription>
          В личном кабинете появились новые чек-листы для Вас
        </TextDescription>
        <Line style={{ width: "100%" }} />
        <DiaryText> Дневник Настроения</DiaryText>
        <StepContainer>
          {StepMock.map((data, index) => (
            <StepText key={index} $color={index <= currentStep}>
              {data.stepName}
            </StepText>
          ))}
        </StepContainer>
        <ComponentContainer>
          {StepMock[currentStep].component}
          <BtnNextContainer>
            <ButtonNext
              $disabled={
                trackerAnswers[currentStep].value === null ||
                (trackerAnswers[currentStep].type == "multiselect" &&
                  (trackerAnswers[currentStep].value as Array<IAnswer>).some(
                    (obj) => obj.value == null
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
          <DateContainer>
            <TrackDate>{getCurrentDate(date)}</TrackDate>
            <TextCalendarContainer>
              <Calendar />
              <TextCalendar>
                Чтобы просмотреть события, выберете нужный день в календаре
              </TextCalendar>
            </TextCalendarContainer>
          </DateContainer>
        </EventContainer>
      </DiagnImg>
    </DiagHtml>
  );
};

export default observer(Trackers);
