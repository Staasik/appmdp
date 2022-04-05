import styled from "styled-components";
import { Link } from 'react-router-dom'

export const ModalWrapper = styled.div`
    display:flex;
    width: 100%;
    position: absolute;
    height:100%;
    top: 0;
    background-color:rgba(98, 98, 98, 0.4);
`
export const ModalHeader = styled.div`
    display:flex;
    flex-direction:row;
    width: 90%;
    gap:50px;
    justify-content: center;
    align-items:center;
    height:70px;
    padding:20px;   
    @media (max-width:800px) {
        height:50px;
        padding:10px; 
    }
`
export const ModalBody = styled.div`
    display:flex;
    flex-direction:column;
    width: 90%;
    gap:20px;
    //justify-content: flex-end;
    align-items:flex-start;
    height:60%;
    padding:10px;
    margin:20px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        background-color:#fff;
        width:16px
    }
    ::-webkit-scrollbar-track {
        background-color:#fff
    }
    ::-webkit-scrollbar-track:hover {
        background-color:#f4f4f4
    }
    ::-webkit-scrollbar-thumb {
        background-color:#babac0;
        border-radius:16px;
        border:5px solid #fff
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color:#a0a0a5;
        border:4px solid #f4f4f4
    }
    ::-webkit-scrollbar-button {display:none}
`
export const BodySmsBot = styled.div`
    display:flex;
    flex-direction:column;
    max-width:90%;
    justify-content: center;
    align-items:flex-start;
    padding:10px;
    background-color: #F6F6F9;
    border-radius: 15px 15px 15px 0px;
`
export const BodySmsButton = styled.div`
    display:flex;
    flex-direction:column;
    max-width:90%;
    justify-content: center;
    align-items:flex-start;
    padding:10px;
    background-color: #FFE9DD;
    align-self:flex-end;
    border-radius: 15px 15px 0px 15px;
`
export const ModalName = styled.div`
    display:flex;
    flex-direction:column;
    width: 70%;
    justify-content: center;
    align-items:center;
    gap:10px;
    height:100%;
`
export const ModalButtons = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width: 90%;
    justify-content: space-around;
    align-items:center;
    padding:10px;
    height:17%;
`
export const ModalContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 40%;
    position:fixed;
    height:85%;
    justify-content: center;
    align-items:center;
    background-color: #FFFFFF;
    box-shadow: 0px -20px 40px -15px rgba(0, 0, 0, 0.05), 0px 20px 40px -15px rgba(0, 0, 0, 0.05);
    border-radius: 19px;
    @media (max-width:1500px) {
        width: 50%;
    }
    @media (max-width:1200px) {
        width: 60%;
    }
    @media (max-width:1000px) {
        width: 70%;
    }
    @media (max-width:900px) {
        width: 80%;
    }
    @media (max-width:800px) {
        width: 90%;
    }
`

export const ModalText = styled.text`
    font-size: 24px;
    @media (max-width:800px) {
        font-size: 16px;
        height:15px;
    }   
`
export const ModalMiniText = styled.text`
    font-size: 12px;  
    width: 50%; 
    text-align:center; 
`
export const Button = styled.button`
    width: 30%;
    height: 30%;
    font-size: 12px; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    text-decoration: none;
    cursor: pointer;
    border: 1.5px solid #5496FF;
    border-radius: 11px;
    user-select: none;
`
export const ModalCont = styled.div`
    height: 100vh;
    width: 100%;
    position: sticky;
    justify-content: center;
    align-items:center;
    display: flex;
`