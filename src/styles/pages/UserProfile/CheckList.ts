import styled from "styled-components";
import { ReactComponent as Caret_Right } from "images/UserProfile/Caret_Right.svg";

interface CaretProps{
    $listOpened:boolean,
}
export const Caret = styled(Caret_Right)<CaretProps>`
    transform: ${({$listOpened}:CaretProps)=>$listOpened ? 'rotate(90deg)' : 'none'};
    transition:transform .5s;
`
export const Button = styled.a`
    display:flex;
    width: 200px;
    height: 50px;
    background: #FF9254;
    border: 0;
    border-radius: 8px; 
    color:#fff;
    justify-content:center;
    align-items:center;
    margin-top:50px; 
    text-decoration:none;
    text-align:center;
    cursor:pointer;
    @media (max-width:600px) {
        width: 100%;  
        margin-top:20px; 
    }
`
export default Caret;