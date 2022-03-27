import styled from "styled-components";

export const DiagBody = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const Button = styled.button`
    display:flex;
    width: 200px;    
    height: 50px;
    background: #FF9254;
    border-radius: 8px; 
    border:0;
    margin-top: 50px;
    color:white;
    justify-content:center;
    align-items:center;
    @media (max-width:430px) {
        margin-top: 10px;
        width: 90%;  
    }
`
export const DiagnBlock = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width: 90%;
    row-gap:50px;
    padding-top: 50px;
    justify-content:center;
`
export const DiagnBlockImg = styled.div`
    display:flex;
    flex-direction:column;
    width: 40%;
    height:100%;
    row-gap:5px;
    @media (max-width:600px) {
        width: 100%;
    }  
`
export default DiagnBlock