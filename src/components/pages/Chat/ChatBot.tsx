import { ReactComponent as CloseModal } from "images/CloseModal.svg";
import { ReactComponent as Line } from "images/LineModal.svg";
import { ReactComponent as Online } from "images/Online.svg";
import { ReactComponent as Veronika } from "images/Veronika.svg";
import { useState } from "react";
import {BodySmsBot, BodySmsButton, Button, ModalBody, ModalButtons, ModalCont, ModalContainer, ModalHeader, ModalName, ModalText, ModalWrapper } from "styles/pages/Chat/ChatBot";

import { ButtonsStart, ButtonsHelp, ButtonsInspiration, IButtonsMock } from "mockdata/ModalButtons";
import { ISmsBotMock, SmsBotHelp, SmsBotInspiration, SmsBotStart } from "mockdata/ModalSmsBot";

const RegistrationModal = () => {
  const [buttonsStar, setButtonsStar] = useState<IButtonsMock[]>(ButtonsStart);
  const [buttonsHelp, setButtonsHelp] = useState<IButtonsMock[]>(ButtonsHelp);
  const [buttonsInspiration, setButtonsInspiration] = useState<IButtonsMock[]>(ButtonsInspiration);
  const [smsStart, setSmsStart] = useState<ISmsBotMock[]>(SmsBotStart);
  const [smsHelp, setSmsHelp] = useState<ISmsBotMock[]>(SmsBotHelp);
  const [smsInspiration, setSmsInspiration] = useState<ISmsBotMock[]>(SmsBotInspiration);
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
            <CloseModal style={{ width: "50px" }} />
          </ModalHeader>
          <Line style={{ width: "90%" }} />
          <ModalBody>
          {smsStart.map((value, index) => (
              <BodySmsBot>{value.title}</BodySmsBot>
            ))}
            <BodySmsBot>
              Привет!<p>Lorem ipsum dolor laboriosam.</p> Я бот POISE, твой
              онлайн - помощник. Я с радостью помогу тебе, найду занятие по
              душе, да и просто поговорю с тобой.Расскажи, что ты чувствуешь в
              данный момент?
            </BodySmsBot>
            <BodySmsButton>Вдохновение</BodySmsButton>
            <BodySmsBot>
              Хороший выбор!!!С данным методом можно ознакомиться по ссылке
              Надеюсь, что я был тебе полезен!Чем я ещё могу помочь?
            </BodySmsBot>
            <BodySmsButton>Ментальные карты</BodySmsButton>
            <BodySmsBot>
              Привет! Я бот POISE, твой онлайн - помощник. Я с радостью помогу
              тебе, найду занятие по душе, да и просто поговорю с
              тобой.Расскажи, что ты чувствуешь в данный момент?
            </BodySmsBot>
            <BodySmsButton>Вдохновение</BodySmsButton>
            <BodySmsBot>
              Каждый из нас уникален.Надеюсь, что я был тебе полезен!Чем я ещё
              могу помочь?
            </BodySmsBot>
            <BodySmsButton>Вдохновение</BodySmsButton>
            <BodySmsBot>
              Привет! Я бот POISE, твой онлайн - помощник. Я с радостью помогу
              тебе, найду занятие по душе, да и просто поговорю с
              тобой.Расскажи, что ты чувствуешь в данный момент?
            </BodySmsBot>
            <BodySmsButton>Пока</BodySmsButton>
          </ModalBody>
          <Line style={{ width: "90%" }} />
          <ModalButtons>
            {buttonsStar.map((value, index) => (
              <Button>{value.title}</Button>
            ))}
          </ModalButtons>
        </ModalContainer>
      </ModalCont>
    </ModalWrapper>
  );
};

export default RegistrationModal;
