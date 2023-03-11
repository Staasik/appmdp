import { ReactComponent as CloseModal } from "images/CloseModal.svg";
import { ReactComponent as Line } from "images/LineModal.svg";
import { ReactComponent as Online } from "images/Online.svg";
import { ReactComponent as Veronika } from "images/Veronika.svg";
import _ from 'lodash';
import { observer } from "mobx-react-lite";
import { ButtonsHelp, ButtonsInspiration, ButtonsStart, IButtonsMock } from "mockdata/ModalButtons";
import BotAnswers from "mockdata/ModalSmsBot";
import { useEffect, useState } from "react";
import { BodySmsBot, BodySmsButton, Button, ModalBody, ModalButtons, ModalCont, ModalContainer, ModalHeader, ModalName, ModalText, ModalWrapper } from "styles/pages/Chat/ChatBot";

interface IMessages {
  messageId: number,
  senderBot: boolean,
  message: string,
  component(): any
}

interface IQuestions {
  buttons: IButtonsMock[],
  questionNumber: number
}

const FirstMessage: IMessages = {
  messageId: 0,
  senderBot: true,
  message: ``,
  component: () => <div>
    Привет! Я бот POISE, твой
    онлайн - помощник. Я с радостью помогу тебе, найду занятие по
    душе, да и просто поговорю с тобой.Расскажи, что ты чувствуешь в
    данный момент?
  </div>
}
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

interface Props{
  onClose(): any
}

const RegistrationModal = ({onClose} : Props) => {
  const [questions, setQuestions] = useState<IQuestions>({ buttons: ButtonsStart, questionNumber: 1 });
  const [allMessages, setAllMessages] = useState<IMessages[]>([FirstMessage]);

  const onQuestionClick = (question: string) => {
    setQuestions(a => ({ buttons: [], questionNumber: a.questionNumber}))
    setAllMessages(a => [...a, { messageId: a.length, senderBot: false, message: question, component: () => null }])
    sleep(500).then(() => {
      let an = _.find(BotAnswers, { message: question })
      an && setAllMessages(a => [...a, { messageId: a.length, senderBot: true, message: '', component: an?.answer || (() => null) }])
    switch (questions.questionNumber) {
      case 1:
        if (question.includes("Вдохновение")) setQuestions({ buttons: ButtonsInspiration, questionNumber: 2 })
        else setQuestions({ buttons: ButtonsHelp, questionNumber: 3 })
        break;
      case 2:
        setQuestions({ buttons: ButtonsHelp, questionNumber: 3 })
        break;
      case 3:
        if (question.includes("Спасибо, помощь не нужна")) setQuestions({ buttons: [{title: 'Начать заново'}], questionNumber: 4 })
        else setQuestions({ buttons: ButtonsHelp, questionNumber: 3 })
        break;
      case 4:
        setQuestions({ buttons: ButtonsStart, questionNumber: 1 })
        let newMsg = FirstMessage
        newMsg.messageId = allMessages.length
        setAllMessages(a => [...a, newMsg])
      break;
      default:
        break;
    }});
  }

  useEffect(() => {
    return () => {
      let chatContainer = document.getElementById("chatContainer");
      chatContainer && (chatContainer.scrollTop = chatContainer.scrollHeight)
    }
  }, [allMessages])
  
    return (
      <ModalWrapper>
        <ModalCont>
          <ModalContainer>
            <ModalHeader>
              <Veronika style={{ width: "50px" }} />
              <ModalName>
                <ModalText>Вероника</ModalText>
                <Online style={{ marginLeft: "-10px" }} />
              </ModalName>
              <CloseModal style={{ width: "50px", cursor: 'pointer' }}  onClick={()=>onClose()}/>
            </ModalHeader>
            <Line style={{ width: "90%" }} />
            <ModalBody id="chatContainer">
              {
                allMessages.map((value, index) => value.senderBot ? <BodySmsBot key={index}><value.component key={index}></value.component></BodySmsBot> : <BodySmsButton key={index}>{value.message}</BodySmsButton>)
              }
            </ModalBody>
            <Line style={{ width: "90%" }} />
            <ModalButtons>
              {questions.buttons.map((value, index) => (
                <Button key={index} onClick={() => { onQuestionClick(value.title) }}>{value.title}</Button>
              ))}
            </ModalButtons>
          </ModalContainer>
        </ModalCont>
      </ModalWrapper>
    );
  };

  export default observer(RegistrationModal)
