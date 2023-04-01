import styled from "styled-components";
import { ReactComponent as Caret_Right } from "images/UserProfile/Caret_Right.svg";
import colors from "utils/colors";

interface CaretProps{
    $listOpened:boolean,
}
export const Caret = styled(Caret_Right)<CaretProps>`
    transform: ${({$listOpened}:CaretProps)=>$listOpened ? 'rotate(90deg)' : 'none'};
    transition:transform .5s;
`
export const Button = styled.a`
    display:flex;
    width: 250px;
    height: 50px;
    background: ${colors.ORANGE_LIGHT};
    border: 0;
    border-radius: 8px; 
    color:${colors.WHITE};
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