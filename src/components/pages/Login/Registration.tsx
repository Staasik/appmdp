import { MAIN_IP } from "App";
import RegistrationModal from 'components/pages/Login/RegistrationModal';
import { Context } from "index";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { LinkButton, LoginBlock, LoginButton, LoginContainer, LoginImage, LoginInput, LoginRegistr, LoginRegistrText, LoginText, LoginWrapper, NameInput, PasswordInput, PasswordWrapper, ShowIcon } from 'styles/pages/Login/Registration';

interface IInputErrors {
  name:boolean;
  login:boolean;
  password:boolean;
  repeatPassword:boolean;
}

const Registration = () => {

  const { store } = useContext(Context)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [inputType, setInputType] = useState("password")
  const [inputTypeRepeat, setInputTypeRepeat] = useState("password")
  
  const [inputErrors, setInputErrors] = useState<IInputErrors>({name:false, login:false, password:false, repeatPassword:false})

  const onReg = () => {
    setInputErrors({
      name:name.length<3,
      login:login.length<3,
      password:password.length<3,
      repeatPassword:repeatPassword.length<3
    })

    if (name.replace( /\s/g, "") && login.replace( /\s/g, "") && password.replace( /\s/g, "") && repeatPassword.replace( /\s/g, "") && password === repeatPassword) {
      store.registration(name,login,password)
    }
    else
    {
      console.log('Данные нормальные впишите)')
      setInputErrors(obj => ({...obj, password:true, repeatPassword: true}));
    }
  }

  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });
  return (
    <LoginWrapper>
      {modalIsOpen && <RegistrationModal></RegistrationModal>}
      <LoginBlock>
        <LoginContainer>
          <LoginRegistr>
            <LinkButton to='../login'><LoginRegistrText>Вход</LoginRegistrText></LinkButton>
            <LinkButton to='../reg'><LoginRegistrText>Регистрация</LoginRegistrText></LinkButton>
          </LoginRegistr>
          <LoginText>Будем рады!</LoginText>
          <LoginRegistr>Зарегистрируйтесь, чтобы продолжить</LoginRegistr>
          <NameInput maxLength={10} $error={inputErrors.name} placeholder='Имя' value={name} onChange={(e) => setName(e.target.value.replace( /\s/g, ""))} />
          <LoginInput maxLength={10}  $error={inputErrors.login}placeholder='Логин' value={login} onChange={(e) => setLogin(e.target.value.replace( /\s/g, ""))} />
          <PasswordWrapper>
            <PasswordInput maxLength={10} $error={inputErrors.password} placeholder='Пароль' value={password} type={inputType} onChange={(e) => setPassword(e.target.value.replace( /\s/g, ""))} />
            <ShowIcon onClick={() => setInputType(a => a.includes('password') ? 'text' : 'password')} />
          </PasswordWrapper>
          <PasswordWrapper>
            <PasswordInput maxLength={10} $error={inputErrors.repeatPassword} placeholder='Пароль ещё раз' value={repeatPassword} type={inputTypeRepeat} onChange={(e) => setRepeatPassword(e.target.value.replace( /\s/g, ""))} />
            <ShowIcon onClick={() => setInputTypeRepeat(a => a.includes('password') ? 'text' : 'password')} />
          </PasswordWrapper>
          <LoginButton onClick={() => onReg()}>Зарегистрироваться</LoginButton>
        </LoginContainer>
        {isDesktop && <LoginImage />}
      </LoginBlock>
    </LoginWrapper>
  );
}

export default observer(Registration)
