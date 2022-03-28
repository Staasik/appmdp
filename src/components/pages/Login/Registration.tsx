import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { LoginBlock, LoginButton, LinkButton, LoginContainer, LoginImage, LoginInput, LoginRegistr, LoginRegistrText, LoginText, LoginWrapper, NameInput, PasswordInput } from 'styles/pages/Login/Registration';
import RegistrationModal from 'components/pages/Login/RegistrationModal'
import Cookies from 'codebase/Cookies'

const Registration = () => {

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [inputType, setInputType] = useState("password")

  const onReg = () => {
    fetch("/registration", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name, login, password })
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data){ 
          Cookies.setCookie('login', login)
          Cookies.setCookie('password', password)
          window.location.href = '/main'
        }
      });
    setModalIsOpen(true)
  }

  const isDesktop = useMediaQuery({
    query: "(min-width: 800px)"
  });
  return (
    <LoginWrapper>
      { modalIsOpen && <RegistrationModal></RegistrationModal>}
      <LoginBlock>
        <LoginContainer>
          <LoginRegistr>
            <LinkButton to='../login'><LoginRegistrText>Вход</LoginRegistrText></LinkButton>
            <LinkButton to='../reg'><LoginRegistrText>Регистрация</LoginRegistrText></LinkButton>
          </LoginRegistr>
          <LoginText>Будем рады!</LoginText>
          <LoginRegistr>Зарегистрируйтесь, чтобы продолжить</LoginRegistr>
          <NameInput placeholder='Имя' onChange={(e)=> setName(e.target.value)}/>
          <LoginInput placeholder='Логин' onChange={(e)=> setLogin(e.target.value)}/>
          <PasswordInput placeholder='Пароль' type={inputType} onChange={(e)=> setPassword(e.target.value)}/>
          <LoginButton onClick={()=>onReg()}>Войти</LoginButton>
        </LoginContainer>
        {isDesktop && <LoginImage />}
      </LoginBlock>
    </LoginWrapper>
  );
}

export default Registration;
