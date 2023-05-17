import styled from "styled-components";
import colors from "utils/colors";

export const ResultsItems = styled.div`
    display: flex;
    width:75%; 
    justify-content:center;
    align-items:center;
    flex-direction:row;
    margin:20px;
    gap:20px;
    @media (max-width:1000px) {
        width:95%; 
    }
    @media (max-width:800px) {
        gap: 10px;
        flex-direction:column;
    }
`
export const ResultsTextBlock = styled(ResultsItems)`
    @media (max-width:800px) {
        flex-direction:row;
    }
`
export const NumbersBlock = styled(ResultsItems)`
    width:30%; 
    margin:0px;
    @media (max-width:800px) {
        flex-direction:row;
        width:100%; 
    }
`
export const TextBlock = styled(ResultsItems)`
    width:70%; 
    margin:0px;
    @media (max-width:800px) {
        flex-direction:row;
        width:100%; 
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
export const ResultsText = styled(DiagnText)` 
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
export const ResultsBlock = styled(DescriptionBlock)`
    padding-bottom: 0px;
`

const InputStyles = `
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
`

export const TextComponents = styled.textarea`
    width: 100%;
    ${InputStyles}
`
export const TextComponentsNumber = styled.input`
    width: 50%;
    ${InputStyles}
`
