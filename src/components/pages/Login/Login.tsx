import { MAIN_IP } from "App";
import Cookies from 'codebase/Cookies';
import { Context } from "index";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { LinkButton, LoginBlock, LoginButton, LoginContainer, LoginImage, LoginInput, LoginRegistr, LoginRegistrText, LoginText, LoginWrapper, PasswordInput, PasswordWrapper, ShowIcon } from 'styles/pages/Login/Login';

const Login = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [inputType, setInputType] = useState<string>('password')
  const { store } = useContext(Context)

  const onLogin = () => {
    if (login && password) {
      store.login(login,password)
    }
  }

  return (
    <LoginWrapper>
      <LoginBlock>
        <LoginContainer>
          <LoginRegistr>
            <LinkButton to='../login'><LoginRegistrText>Вход</LoginRegistrText></LinkButton>
            <LinkButton to='../reg'><LoginRegistrText>Регистрация</LoginRegistrText></LinkButton>
          </LoginRegistr>
          <LoginText>Мы скучали!</LoginText>
          <LoginRegistr>Войдите, чтобы продолжить</LoginRegistr>
          <LoginInput placeholder='Логин' value={login} onChange={(e) => setLogin(e.target.value.replace( /\s/g, ""))} />
          <PasswordWrapper>
            <PasswordInput $error={store.authError} placeholder='Пароль' value={password} type={inputType} onChange={(e) => setPassword(e.target.value.replace( /\s/g, ""))} />
            <ShowIcon onClick={() => setInputType(a => a.includes('password') ? 'text' : 'password')}/>
          </PasswordWrapper>
          <LoginButton onClick={() => onLogin()}>Войти</LoginButton>
        </LoginContainer>
        {isDesktop && <LoginImage></LoginImage>}
      </LoginBlock>
    </LoginWrapper>
  );
}

export default observer(Login)
