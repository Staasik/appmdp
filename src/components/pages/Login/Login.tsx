import {LoginWrapper,LoginContainer,LoginInput,LoginText,LoginButton} from 'styles/pages/Login/Login'

const Login = () => {
  return (
    <LoginWrapper>
      <LoginContainer>
        <LoginText>LOGIN</LoginText>
        <LoginInput></LoginInput>
        <LoginButton to="/main">Войти</LoginButton>
      </LoginContainer>
    </LoginWrapper>

  );
}

export default Login;
