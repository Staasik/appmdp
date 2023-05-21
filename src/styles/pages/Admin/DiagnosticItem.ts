import styled from "styled-components";
import colors from "utils/colors";

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
    cursor: pointer;
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
    cursor: pointer;
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

export const SvgBlock = styled.div`
    display: flex;
    justify-content:flex-start;
    align-items:flex-start;
    margin:20px;
    gap: 20px;
    @media (max-width:600px) { 
        gap: 100px;
        margin:0px;
    }
`
