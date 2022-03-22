import styled from "styled-components";
import { Link } from 'react-router-dom'

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
    justify-content: space-around;
    align-items: center;
    width: 20%;
    height: 30%;
    background-color: rgba(0, 0, 0, 0.1) ;
    min-height: 300px;
    min-width: 300px;
    border-radius: 20px;
    box-shadow: 0px 20px 40px -15px rgba(0, 0, 0, 0.1);
`
export const LoginInput = styled.input`
    width: 80%;
    border-radius: 20px;
    height: 40px;
    font-size: 20px;
    padding-left:10px;
    border:0;
`
export const LoginText = styled.text`

`

export const LoginButton = styled(Link)`
    width: 40%;
    min-width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: #FF9254;
    color: white;
    border-radius:20px; 
    border:0;
`
export const LoginButtonRed = styled(LoginButton)`
    color:red;
`
export default LoginWrapper;