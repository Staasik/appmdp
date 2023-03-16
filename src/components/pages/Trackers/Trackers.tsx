import ChoiseComponent from 'components/pages/Trackers/ChoiseComponent';
import ButtonsComponent from 'components/pages/Trackers/ButtonsComponent';
import TextComponent from 'components/pages/Trackers/TextComponent';
import { ReactComponent as Line } from "images/LineModal.svg";
import { ReactComponent as Calendare } from 'images/Trackers/Calendar_Check.svg';
import { DiagHtml, DiagnImg } from "styles/pages/Diagnostics/DiagnHeader";
import { TextCalendare, TextCalendareDiv, TrackButtonsDiv, TrackButtonsDivNext, TrackDate, TrackerButtonsDiv, TrackerMiniText, TrackerText } from "styles/pages/Trackers/Trackers";

import { useState } from 'react';
import DatePicker from 'sassy-datepicker';
import 'sassy-datepicker/dist/styles.css';

const StepMosk = [{value: '1 шаг...'},{value: '2 шаг...'},{value: '3 шаг...'},{value: '4 шаг...'},{value: '5 шаг...'},{value: '6 шаг'}]


export function getCurrentDate(separator='.'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date<10?`0${date}`:`${date}`}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
    }

const Trackers = () => {

    const [date, setDate] = useState(new Date());
  
    const onChange = (newDate: any) => {
      console.log(`New date selected - ${newDate.toString()}`);
      setDate(newDate);
    };

  return (
    <DiagHtml>
        <DiagnImg style={{ gap: "0px" }}>
            <TrackerText style={{paddingBottom: "20px"}}>Здравствуйте, </TrackerText>
            <TrackerMiniText>В личном кабинете появились новые чек-листы для Вас</TrackerMiniText>
            <Line style={{ width: "100%" }} />
            <TrackerText style={{paddingTop: "60px",fontSize: "28px"}}>Дневник Настроения</TrackerText>

            <TrackButtonsDiv style={{ width: "100%", paddingBottom: "0px"}}>
                    {
                        StepMosk.map((data, index) => <TrackerMiniText style={{color: "#CBCBCB"}} key={index}>{data.value}</TrackerMiniText>)
                    }
            </TrackButtonsDiv>

            <ChoiseComponent />

  
            <Line style={{ width: "100%", paddingBottom: "40px", paddingTop:"0px" }} />
            <TrackerButtonsDiv>
                <TrackButtonsDivNext style={{backgroundColor: "#626262", height: "400px", width: "35%"}}>
                    <DatePicker onChange={onChange} value={date} />
                </TrackButtonsDivNext>
                <TrackButtonsDiv style={{justifyContent: "center", alignItems: "flex-start",  width: "65%"}}>
                    <TrackDate>{getCurrentDate()}</TrackDate>
                    <TextCalendareDiv>
                        <TextCalendare><Calendare /></TextCalendare>
                        <TextCalendare>Чтобы просмотреть события, выберете нужный день в календаре</TextCalendare>
                    </TextCalendareDiv>
                </TrackButtonsDiv>
            </TrackerButtonsDiv>         
        </DiagnImg>    
         
    </DiagHtml>
  );
};

export default Trackers
