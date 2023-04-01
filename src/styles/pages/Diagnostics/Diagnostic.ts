import styled from "styled-components";
import { Link } from 'react-router-dom';
import colors from "utils/colors";
export const DiagBody = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
interface ButtonProps{
    $completeDisabled: boolean
}
export const Button = styled.button<ButtonProps>`
    display:flex;
    ${({$completeDisabled}: ButtonProps) => !$completeDisabled && 'cursor: pointer;'}
    width: 200px;    
    height: 50px;
    background:${({$completeDisabled}: ButtonProps) => $completeDisabled ? colors.FORD_GRAY : colors.ORANGE_LIGHT };
    border-radius: 8px; 
    border:0;
    margin-top: 50px;
    color:${colors.WHITE}; 
    justify-content:center;
    align-items:center;
    @media (max-width:600px) {
        width: 90%;  
    }
`
export const DiagnBlock = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width: 70%;
    row-gap:50px;
    padding-top: 50px;
    justify-content:center;
    @media (max-width:1400px) {
        width: 90%;  
    }
    @media (max-width:800px) {
        row-gap:20px;
    } 
`
export const DiagnLink = styled(Link)`
    text-decoration: none;
`
export const Diagn3Block = styled(DiagnBlock)`
    width: 90%;
`
export const BlockTwo = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    width: 100%;
    row-gap:10px;
    box-sizing: border-box;
    box-shadow: 0px -20px 40px -15px rgba(0, 0, 0, 0.05), 0px 20px 40px -15px rgba(0, 0, 0, 0.05);
    border-radius: 19px;

`

export const DiagnBlockImg = styled.div`
    display:flex;
    flex-direction:column;
    width: 50%;
    height:100%;
    row-gap:5px;
    @media (max-width:1000px) {
        width: 70%;
    } 
    @media (max-width:1000px) {
        width: 100%;
    }  
`
export const BlockFive = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start; 
    padding-left:5%;
    align-items:center; 
    flex-wrap:wrap;
    width: 80%;
    row-gap:50px;
    background: ${colors.SMOKE};
    border: 2px solid ${colors.GRAY_GRAY};
    box-sizing: border-box;
    box-shadow: 0px 20px 40px -15px rgba(0, 0, 0, 0.05);
    border-radius: 19px;
    @media (max-width:1200px) {
    width: 90%;
    }
    @media (max-width:600px) {
    padding-left:0;
    width: 100%;
    row-gap:0px;
    }

`
export const TextFive = styled.div`
    display:flex;       
    color: ${colors.BLACK};
    margin-top:30px;
    width: 100%;
    padding-left:3%;
    font-size:26px;
    @media (max-width:600px) {
    font-size:20px;
    padding-left:5%;
    }
`

export default DiagnBlock