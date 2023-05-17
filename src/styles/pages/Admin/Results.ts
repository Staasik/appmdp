import styled from "styled-components";
import colors from "utils/colors";

export const DiagHtml = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:center;
`
export const TextBlock = styled.div`
    display: flex;
    width:75%; 
    justify-content:flex-start;
    align-items:center;
    flex-direction:row;
    margin:20px;
    @media (max-width:1000px) {
        width:90%; 
    }
    @media (max-width:800px) {
        width:90%; 
        flex-direction:column;
        gap: 20px;
    }
`
export const ButtonBack = styled.a`
    margin-top:50px;
    text-decoration: none ;
    display:flex;
    width:250px;
    font-size: 16px;
    height: 50px;
    background: ${colors.BLUE_LIGHT};
    border-radius: 8px; 
    border:0;
    color:${colors.WHITE};
    justify-content:center;
    align-items:center;
    justify-self:left;
    cursor:pointer;
    @media (max-width:800px) {
        width: 100%;  
        margin-top:20px; 
    }
`
export const AddText = styled.a`
    display:flex;       
    color: ${colors.BLACK};
    font-size:40px;
    font-weight:600;
    margin-top:20px;
    margin-bottom:20px;
    @media (max-width:1000px) {
        font-size:30px;
        margin:0;
        align-self:flex-start;
    }
`
