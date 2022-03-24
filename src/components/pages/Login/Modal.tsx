import React from "react" ;
import { useMediaQuery } from "react-responsive";

import {ModalWrapper,ModalContainer,ModalText,ModalMiniText,ModalButton} from 'styles/pages/Login/Modal'

import Icon from 'images/ok.png';

const Login = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 800px)"
  });
  return (
    <ModalWrapper>
        <ModalContainer>
            <img src={Icon} style={{ "height": "50px", "width": "50px" }} />
            <ModalText>Добро пожаловать!</ModalText>
            <ModalMiniText>Спасибо, регистрация завершена</ModalMiniText>
            <ModalButton to="/main">Перейти к диагностике</ModalButton>
        </ModalContainer>
    </ModalWrapper>
  );
}

export default Login;
