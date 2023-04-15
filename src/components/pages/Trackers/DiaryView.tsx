import { ReactComponent as Calendar } from "images/Trackers/Calendar_Check.svg";
import { Description, BoldFont, Emotions, EmotionsEvent, EmotionsDiary, Done, WillDo, Container, Text } from "styles/pages/Trackers/DiaryView";
import { useState } from "react";
import { DateContainer, TextCalendar, TextCalendarContainer, TrackDate } from "styles/pages/Trackers/Trackers";
import { IDiaryMock } from "mockdata/DiaryViewText";

interface Props {
  date: Date;
  data?: IDiaryMock;
}

const DiaryView = ({ date, data }: Props) => {

  function parseDate(newDate: Date) {
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date < 10 ? `0${date}` : `${date}`}${"."}${month < 10 ? `0${month}` : `${month}`
      }${"."}${year}`;
  }

  return (
    <DateContainer>
      <TrackDate>{parseDate(date)} {(data && ` - ${data.title}`)}</TrackDate>
      <Container>
        {data ? <>
          <Description>
            <BoldFont>Описание: </BoldFont>{data.description}</Description>
          <Emotions>
            <EmotionsEvent>
              <BoldFont>Эмоции во время события:</BoldFont>
              {
                data.eventsEmotions.map((value, index) => {
                  return <Text key={index}>{value.name} - {value.score} балла(ов)</Text>
                })
              }
            </EmotionsEvent>
            <EmotionsDiary>
              <BoldFont>Эмоции во время заполнения дневника:</BoldFont>
              {
                data.diaryEmotions.map((value, index) => {
                  return <Text key={index}>{value.name} - {value.score} балла(ов)</Text>
                })
              }
            </EmotionsDiary>
          </Emotions>
          <Done>
            <BoldFont>Что я сделал, чтобы отдохнуть и позаботиться о себе:</BoldFont>
            <Text>{data.done}</Text>
          </Done>
          <WillDo>
            <BoldFont>Что я выполню завтра, чтобы улучшить своё настроение и состояние:</BoldFont>
            <Text>{data.willDo}</Text>
          </WillDo>
        </> :
          <TextCalendarContainer>
            <Calendar />
            <TextCalendar>
              Чтобы просмотреть события, выберете нужный день в календаре
            </TextCalendar>
          </TextCalendarContainer>
        }
      </Container>
    </DateContainer>
  );
};

export default DiaryView;
