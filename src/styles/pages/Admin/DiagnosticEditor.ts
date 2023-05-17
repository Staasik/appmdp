import styled from "styled-components";
import colors from "utils/colors";
import Select from "react-select";

export const SelectAdd = styled(Select)`
    width: 30%;
    @media (max-width:1000px) {
        margin-top:20px;
        width: 100%;
    }
`
export const DiagHtml = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:center;
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
export const QuestionTextBlock = styled(TextBlock)`
    @media (max-width:800px) {
        flex-direction:row;
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
export const ButtonSave = styled(ButtonBack)`
    margin-top:0px;
    margin-left:auto;
    background: ${colors.WHITE};
    border:1px solid ${colors.ORANGE_LIGHT};
    color:${colors.ORANGE_LIGHT};
`
export const DiagnText = styled.a`
    color:${colors.BLACK};
    font-weight : 600;
    height:40px;    
    font-size:20px;
    @media (max-width:1000px) {  
        height:30px;   
        align-self:flex-start;
    }
`
export const QuestionText = styled(DiagnText)` 
    font-size:30px;
    margin-right:auto;
    @media (max-width:1000px) {  
        font-size:20px;  
    }
`
export const DescriptionBlock = styled.div`
    display: flex;
    width:100%; 
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:20px;
    @media (max-width:1000px) {
        width:100%; 
    }
`
export const QuestionBlock = styled(DescriptionBlock)`
    padding-bottom: 40px;
`


export const TextComponents = styled.textarea`
    margin-left:20px;
    margin-right:20px;
    width: 73%;
    height: 50px;
    border: 1px solid ${colors.GRAY};
    border-radius: 20px;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    resize: none;
    align-items: center;
    justify-content: center;
    overflow: none;
    @media (max-width:1000px) {  
        width: 85%;
    }
`

export const ResultsBlock = styled.div`
    display: flex;
    width: 75%;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    margin:20px;
    gap:25px;
    border: 1px solid ${colors.GRAY};
    border-radius: 20px;
    @media (max-width:1000px) {  
        width: 90%;
        flex-direction:column;
    }
`

export const ResultsText = styled.a`     
    color: ${colors.BLACK};
    font-size:24px;
    font-weight:600;
    margin-top:20px;
    margin-bottom:20px;
    width: 45%;
    @media (max-width:1300px) {  
        width: 35%;
        font-size:20px;
    }
    @media (max-width:1000px) {  
        width: 95%;
        font-size:24px;
    }
`
export const ResultsButton = styled(ButtonBack)`
    margin-top:0px;
    margin-right:30px;
    background: ${colors.ORANGE_LIGHT};
    color:${colors.WHITE};
    cursor:pointer;
    @media (max-width:1000px) {  
        width: 95%;
        margin-right:0px;
        margin-bottom:30px;
    }
`
