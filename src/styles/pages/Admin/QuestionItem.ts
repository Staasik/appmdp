import styled from "styled-components";
import colors from "utils/colors";

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
        width:95%; 
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
        width: 83%;
    }
`