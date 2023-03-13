import Icon from 'images/ok.png';
import { ModalButton, ModalCont, ModalContainer, ModalMiniText, ModalText, ModalWrapper } from 'styles/pages/Login/LoginModal';

const RegistrationModal = () => {
  return (
    <ModalWrapper>
      <ModalCont>
        <ModalContainer>
          <img src={Icon} style={{ "height": "50px", "width": "50px" }} />
          <ModalText>Добро пожаловать!</ModalText>
          <ModalMiniText>Спасибо, регистрация завершена</ModalMiniText>
          <ModalButton href="/main/diagnostics">Перейти к диагностике</ModalButton>
        </ModalContainer>
      </ModalCont>
    </ModalWrapper>
  )
}

export default RegistrationModal
