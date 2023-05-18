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
    align-items:flex-start;
    margin:20px;
    @media (max-width:1000px) {
        width:90%; 
    }
`
export const AdminText = styled.a`
    display:flex;       
    color: ${colors.BLACK};
    font-size:40px;
    font-weight:600;
    margin-top:20px;
    margin-bottom:20px;
    @media (max-width:1000px) {
        font-size:30px;
        text-align:center;
        margin:0;
    }
`
export const DiagnText = styled.a`
    color:${colors.BLACK};
    font-weight : 600;
    height:40px;    
    font-size:30px;
    @media (max-width:1000px) {  
        height:30px; 
        font-size:22px;   
    }
`
export const DiagnBlocks = styled.div`
    display: flex;
    margin:20px;
    width:75%; 
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap:20px;
    padding-top:50px;       
    padding-bottom:50px;
    @media (max-width:1000px) { 
        width:90%; 
        margin-top:0px;
        padding-top:0px;       
        padding-bottom:20px;
    }
`
export const DiagnBlockstItem = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    justify-content:flex-start;
    align-content:center;
    align-items:center;
    gap:30px;
    background: ${colors.WHITE};
    box-shadow: 0px 4px 11px 1px rgba(43, 43, 43, 0.05);
    border-radius: 12px;
    padding:10px;
    padding:20px;
    @media (max-width:1000px) {  
        width:95%;
        gap:20px;
    }
    @media (max-width:600px) {  
        flex-direction: column;
    }
`
export const ImgBlockItem = styled.img`
    width:150px;
    height:100px; 
    @media (max-width:600px) {  
        width:100%;
        height:200px; 
    }
`
export const DiagnTextItem = styled.a`
    color:${colors.BLACK};
    font-weight : 600;
    font-size:24px;
    @media (max-width:1000px) {  
        font-size:16px;   
    }
    @media (max-width:600px) {  
        align-self:flex-start;
        width:70%;
    }
`
export const ButtonPublish = styled.button`
    margin-left:auto;
    text-decoration: none ;
    display:flex;
    width: 250px;
    font-size: 16px;
    height: 50px;
    background: ${colors.ORANGE_LIGHT};
    border-radius: 8px; 
    border:0;
    color:${colors.WHITE};
    justify-content:center;
    align-items:center;
    @media (max-width:600px) {
        width: 100%;  
        margin-top:20px; 
    }
`
export const ButtonAdd = styled(ButtonPublish)`
    margin-left:0px;
    cursor: pointer;
    background: ${colors.BLUE_LIGHT};
    @media (max-width:800px) {
        width: 90%;  
        margin-top:20px; 
    }
`
