import styled from "styled-components";

export const LoginWrapper = styled.div`
    display:flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`
export const LoginContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    justify-content: center;
    align-items: center;
    background-color:aqua;
    width: 20%;
    height: 30%;
    min-height: 300px;
    min-width: 300px;
    border-radius: 20px;
`
export const LoginInput = styled.input`
    width: 80%;
    border:0;
`
export const LoginText = styled.text`

`

export const LoginButton = styled.button`
    width: 80%;
    background-color:red;
    border:0;
`
export const LoginButtonRed = styled(LoginButton)`
    color:red;
`
export default LoginWrapper;