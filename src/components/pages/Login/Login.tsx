import React from "react" ;
import { useMediaQuery } from "react-responsive";

import {LoginWrapper,LoginContainer,LoginInput,LoginRegistr,LoginRegistrText,LoginBlock,PasswordInput,LoginImage,LoginText,LoginButton} from 'styles/pages/Login/Login'
import Footer from 'components/defaultComponents/Footer'
import Header from 'components/defaultComponents/Header'


const Login = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 800px)"
  });
  return (
    <>
    <Header/>
      <LoginWrapper>
        {isDesktop ?
            <LoginBlock>
            <LoginContainer>
              <LoginRegistr>            
                <LoginRegistrText>Вход</LoginRegistrText>  
                <LoginRegistrText>Регистрация</LoginRegistrText>
              </LoginRegistr>
              <LoginText>Мы скучали!</LoginText>
              <LoginRegistr>Войдите, чтобы продолжить</LoginRegistr>
              <LoginInput placeholder='Логин'></LoginInput>
              <PasswordInput 
              placeholder='Пароль'
              ></PasswordInput>
              <LoginButton to="/modal">Войти</LoginButton>
            </LoginContainer>     
            <LoginImage></LoginImage>
            </LoginBlock>
          :
            <LoginBlock>
            <LoginContainer>
              <LoginRegistr>            
                <LoginRegistrText>Вход</LoginRegistrText>  
                <LoginRegistrText>Регистрация</LoginRegistrText>
              </LoginRegistr>
              <LoginText>Мы скучали!</LoginText>
              <LoginRegistr>Войдите, чтобы продолжить</LoginRegistr>
              <LoginInput placeholder='Логин'></LoginInput>
              <PasswordInput 
              placeholder='Пароль'
              ></PasswordInput>
              <LoginButton to="/main">Войти</LoginButton>
            </LoginContainer>     
            </LoginBlock>
            }
        
      </LoginWrapper>
    <Footer/>
    </>
  );
}

export default Login;
