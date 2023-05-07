import styled from "styled-components";
import image from "images/loginImg.png";
import image600 from "images/loginImg_600.png";
import { Link } from 'react-router-dom'
import { ReactComponent as Show } from 'images/Show.svg'
import colors from "utils/colors";

export const LoginWrapper = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
    padding-top:50px;
    padding-bottom:50px;
    @media (max-width:800px) {
        padding-top:20px;
        padding-bottom:20px;
    }
`
export const LoginBlock = styled.div`
    display:flex;
    width: 70%;
    height: 70vh;
    min-height:500px;
    flex-direction:row;
    background: ${colors.WHITE};
    box-shadow: 0px -20px 40px -15px rgba(0, 0, 0, 0.05), 0px 20px 40px -15px rgba(0, 0, 0, 0.05);
    border-radius: 19px;
    @media (max-width:1200px) {
        width: 80%;
        height: 80vh;
    }
    @media (max-width:1200px) {
        width: 90%;
        height: 80vh;
        min-height:600px;
        background-image:url(${image600});   
        background-repeat: no-repeat; 
        background-size: cover;
        flex-direction:column;
    }
`
export const LinkButton = styled(Link)`
    text-decoration: none;
    color: inherit;
`
export const LoginRegistr = styled.div`
    display:flex;
    flex-direction:row;
    margin-left:10%;
    font-size: 18px;
    gap:40px;    
    @media (max-width:800px) {
        font-size: 14px; 
    }
`
export const LoginContainer = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content: center;
    gap:15px;
    align-items: flex-start;
    @media (max-width:1200px) {
        justify-content: flex-end;
    }
`
export const LoginImage = styled.div`
    display:flex;
    flex:1;
    flex-direction:row;
    background-image:url(${image});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: center; 
    border-radius: 0px 19px 19px 0px;
`
export const LoginInput = styled.input`
    width: 50%;
    height: 45px;
    font-size: 14px;
    margin-left:10%;
    margin-top:40px;
    padding-left:2%;
    background-color: rgba(150, 150, 150, 0.1);
    border:0;
    border-radius: 8px;
    @media (max-width:1200px) {
        width: 60%;
    }
    @media (max-width:800px) {
        width: 78%; 
        margin-left:10%;
        margin-right:10%;
        margin-top:20px;
    }
`
interface PasswordInputProps {
    $error: boolean
}
export const PasswordInput = styled.input<PasswordInputProps>`
    user-select: none;
    width: 100%;
    height: 100%;
    font-size: 14px;
    padding-left:4%;
    background-color: rgba(150, 150, 150, 0.1);
    border:${({ $error }: PasswordInputProps) => !$error ? 0 : '1px solid red'};
    border-radius: 8px;
    @media (max-width:800px) {
        padding-left:3%;
    }
`

export const PasswordWrapper = styled.div`
    position: relative; 
    height: 45px;
    margin-left:10%;
    width: 50%;
    @media (max-width:1200px) {
        width: 60%;
    }
    @media (max-width:800px) {
        width: 78%;
        margin-left:10%;
        margin-right:10%;
    }
`
export const ShowIcon = styled(Show)`
    position: absolute;
    right: 7px;
    top: 11px;
    stroke: ${colors.FORD_GRAY};
`
export const LoginText = styled.a`
    font-size: 40px;
    font-weight:600;
    margin-left:10%;
    margin-top:50px;    
    @media (max-width:800px) {
        margin-top:20px;  
        font-size: 30px;
    }
`
export const LoginRegistrText = styled.a`
    font-size: 18px;    
    @media (max-width:800px) {
        font-size: 14px; 
    }
`
export const LoginButton = styled.button`
    cursor: pointer;
    width: 52%;
    margin-left:10%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: ${colors.ORANGE_LIGHT};
    border-radius: 8px;
    color: ${colors.WHITE};
    border:0;
    margin-bottom:50px;
    @media (max-width:1200px) {
        width: 62%;
    }
    @media (max-width:800px) {
        width: 80%;
        margin-left:10%;
        margin-right:10%;
    }
`
export const LoginButtonRed = styled(LoginButton)`
    color:red;
`
export default LoginWrapper;