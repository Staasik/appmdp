import React from "react";
import { ModalWrapper, ModalContainer, ModalText, ModalMiniText, ModalButton, ModalCont } from 'styles/pages/Login/LoginModal'
import Icon from 'images/ok.png';

interface Props {
  isOpen: boolean
}

const LoginModal = ({ isOpen }: Props) => {
  
  if(isOpen) return (
    <ModalWrapper>
      <ModalCont>
        <ModalContainer>
          <img src={Icon} style={{ "height": "50px", "width": "50px" }} />
          <ModalText>Добро пожаловать!</ModalText>
          <ModalMiniText>Спасибо, регистрация завершена</ModalMiniText>
          <ModalButton to="/main">Перейти к диагностике</ModalButton>
        </ModalContainer>
      </ModalCont>
    </ModalWrapper>
  )
  else return null
}

export default LoginModal;
