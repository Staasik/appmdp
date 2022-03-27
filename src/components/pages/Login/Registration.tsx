import React from "react";
import { useMediaQuery } from "react-responsive";
import { LoginBlock, LoginButton, LoginContainer, LoginImage, LoginInput, LoginRegistr, LoginRegistrText, LoginText, LoginWrapper, NameInput, PasswordInput } from 'styles/pages/Login/Registration';



const Registration = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 800px)"
  });
  return (
    <LoginWrapper>
      <LoginBlock>
        <LoginContainer>
          <LoginRegistr>
            <LoginRegistrText>Вход</LoginRegistrText>
            <LoginRegistrText>Регистрация</LoginRegistrText>
          </LoginRegistr>
          <LoginText>Будем рады!</LoginText>
          <LoginRegistr>Зарегистрируйтесь, чтобы продолжить</LoginRegistr>
          <NameInput placeholder='Имя' />
          <LoginInput placeholder='Логин' />
          <PasswordInput placeholder='Пароль' />
          <LoginButton to="/main">Войти</LoginButton>
        </LoginContainer>
        {isDesktop && <LoginImage />}
      </LoginBlock>
    </LoginWrapper>
  );
}

export default Registration;
