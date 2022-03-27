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
export const BlockTwo = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    width: 100%;
    row-gap:10px;
    box-sizing: border-box;box-shadow: 0px -20px 40px -15px rgba(0, 0, 0, 0.05), 0px 20px 40px -15px rgba(0, 0, 0, 0.05);
    border-radius: 19px;
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
export const BlockFive = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start; 
    padding-left:5%;
    align-items:center; 
    flex-wrap:wrap;
    width: 80%;
    row-gap:50px;
    background: #FBFBFB;
    border: 2px solid #F2F2F2;
    box-sizing: border-box;
    box-shadow: 0px 20px 40px -15px rgba(0, 0, 0, 0.05);
    border-radius: 19px;
    @media (max-width:600px) {
    padding-left:0;
    width: 100%;
    row-gap:0px;
    }

`
export const TextFive = styled.div`
    display:flex;       
    color: black;
    margin-top:30px;
    width: 100%;
    padding-left:3%;
    font-size:26px;
    @media (max-width:600px) {
    font-size:20px;
    padding-left:10%;
    }
`

export default DiagnBlock