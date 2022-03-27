import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { LoginBlock, LoginButton, LoginContainer, LoginImage, LoginInput, LoginRegistr, LoginRegistrText, LoginText, LoginWrapper, PasswordInput } from 'styles/pages/Login/Login';
import LoginModal from 'components/pages/Login/LoginModal'

const Login = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 800px)"
  });

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onLogin = () =>{
    setModalIsOpen(true)
  }

  return (
    <LoginWrapper>
      <LoginModal isOpen={modalIsOpen}></LoginModal>
      <LoginBlock>
        <LoginContainer>
          <LoginRegistr>
            <LoginRegistrText>Вход</LoginRegistrText>
            <LoginRegistrText>Регистрация</LoginRegistrText>
          </LoginRegistr>
          <LoginText>Мы скучали!</LoginText>
          <LoginRegistr>Войдите, чтобы продолжить</LoginRegistr>
          <LoginInput placeholder='Логин' value={login} onChange={(e)=>setLogin(e.target.value)}/>
          <PasswordInput placeholder='Пароль' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <LoginButton onClick={()=>onLogin()}>Войти</LoginButton>
        </LoginContainer>
        {isDesktop && <LoginImage></LoginImage>}
      </LoginBlock>
    </LoginWrapper>
  );
}

export default Login;
