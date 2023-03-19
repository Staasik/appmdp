import { ReactComponent as Line } from "images/LineModal.svg";
import { ReactComponent as Calendar } from "images/Trackers/Calendar_Check.svg";
import { DiagHtml, DiagnImg } from "styles/pages/Diagnostics/DiagnHeader";
import { CalendarContainer, DateContainer, DatePicker, DiaryText, EventContainer, StepContainer, StepText, TextCalendar, TextCalendarContainer, TextDescription, TrackDate, WelcomeText } from "styles/pages/Trackers/Trackers";

import StepMock from "mockdata/MoсkTacker";
import { useState } from "react";

export function getCurrentDate(separator = ".") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date < 10 ? `0${date}` : `${date}`}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}

const Trackers = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [date, setDate] = useState(new Date());

  const onChange = (newDate: any) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };

  return (
    <DiagHtml>
        <DiagnImg style={{ gap: "0px" }}>
            <WelcomeText>Здравствуйте,{" "}</WelcomeText>
            <TextDescription>В личном кабинете появились новые чек-листы для Вас</TextDescription>
            <Line style={{ width: "100%" }} />
            <DiaryText> Дневник Настроения</DiaryText>
            <StepContainer>
                {
                    StepMock.map((data, index) => (<StepText key={index} onClick={() => {setCurrentStep(index);}}>{data.stepName}</StepText>
                ))}
            </StepContainer>

            {StepMock[currentStep].component}  
              
            <Line style={{ width: "100%", paddingBottom: "40px", paddingTop: "0px" }}/>
            <EventContainer>
                <CalendarContainer>
                    <DatePicker onChange={onChange} value={date} />
                </CalendarContainer>
                <DateContainer>
                    <TrackDate>{getCurrentDate()}</TrackDate>
                    <TextCalendarContainer>
                        <Calendar />
                        <TextCalendar>Чтобы просмотреть события, выберете нужный день в календаре</TextCalendar>
                    </TextCalendarContainer>
                </DateContainer>
            </EventContainer>
        </DiagnImg>
    </DiagHtml>
  );
};

export default Trackers;
