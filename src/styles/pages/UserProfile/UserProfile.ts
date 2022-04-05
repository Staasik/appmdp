import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ReactComponent as UncheckedIcon } from "images/UserProfile/CheckNull.svg";
import { ReactComponent as CheckedIcon } from "images/UserProfile/CheckYes.svg";

export const HomeTextBlock = styled.div`
    display: flex;
    width:80%; 
    flex-direction: row;
    justify-content:center;
    align-items:center;
    margin:50px;
    @media (max-width:1240px) {  
        width:100%; 
    }
    @media (max-width:1000px) { 
        flex-direction: column;
        margin:20px;
    }
`
export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    width:70%;
    justify-content:center;
    align-items:flex-start;
    @media (max-width:1000px) { 
        width:95%;
        align-items:center;
        text-align:center;
        gap:10px;
    }
`
export const DiagnCheckBlocks = styled.div`
    display: flex;
    width:75%; 
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap:20px;
    padding-top:50px;       
    padding-bottom:50px;
    @media (max-width:1240px) {   
        width:90%;   
    }
    @media (max-width:1000px) { 
        padding-top:20px;       
        padding-bottom:20px;
    }
`
export const DiagnCheckBlockstItem = styled.div`
    display: flex;
    width:90%;
    flex-direction: row;
    justify-content:flex-start;
    align-items:center;
    gap:30px;
    background: #FFFFFF;
    box-shadow: 0px 4px 11px 1px rgba(43, 43, 43, 0.05);
    border-radius: 12px;
    padding:50px;
    cursor: pointer;
    @media (max-width:1000px) {  
        width:95%;
        gap:20px;
        padding:20px;
    }
`
export const DiagnCheckBlockstItemText = styled.div`
    display: flex;
    width:90%;
    flex-direction: column;
    justify-content:center;
    align-items:flex-start;
`
export const DiagnResult = styled.div`
    display: flex;
    width:73%; 
    flex-direction: row;
    justify-content:center;
    align-items:center;
    gap:20px;
    padding-top:50px;       
    padding-bottom:50px;
    @media (max-width:1240px) { 
        width:90%; 
    }
    @media (max-width:1000px) {        
        flex-direction: column;
        padding-top:20px;       
        padding-bottom:20px;
    }
`
export const DiagnResultItem = styled.div`
    display: flex;
    width:30%;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap:30px;
    background: #FFFFFF;
    box-shadow: 0px 4px 11px 1px rgba(43, 43, 43, 0.05);
    border-radius: 12px;
    padding:50px;
    @media (max-width:1000px) {  
        width:95%;
        gap:20px;
        padding:20px;
    }
`
export const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    width:20%;
    justify-content:center;
    align-items:center;
    @media (max-width:800px) {             
        width:100%;
        gap:20px;    
        align-items:center;
    }
`
export const DiagnTextProfCenter = styled.text`
    display:flex;       
    color: black;
    font-size:26px;
    @media (max-width:800px) {
    font-size:20px;
    text-align:center;
    }
`
export const DiagnTextBlack = styled.text`
    color:black;
    font-size:16px; 
    @media (max-width:800px) {     
        font-size:14px; 
    }
`
export const DiagnosticTextBlack = styled.text`
    color:black;
    font-size:16px; 
    height:70px;
    @media (max-width:1000px) {     
        height:auto;
    }
    @media (max-width:800px) {     
        font-size:14px; 
    }
`

export const DiagnTextBlackBold = styled.text`
    color:black;
    font-weight : bold;
    height:40px;    
    font-size:16px;
    align-self:flex-start;
    @media (max-width:800px) {  
        height:50px; 
        font-size:14px;   
    }
`
export const DiagnTextBlackBoldName = styled.text`
    color:black;
    font-weight : bold;
    height:40px;    
    font-size:20px;
    align-self:flex-start;
    margin-left:14%;
    @media (max-width:1000px) {  
        align-self:center;
        margin-left:0px;
    }
    @media (max-width:1240px) {  
        margin-left:5%;
    }
`
export const DiagnTextProf = styled.text`
    display:flex;       
    color: black;
    font-size:26px;
    @media (max-width:800px) {
    font-size:20px;
    }
`
export const ButtonWhite = styled.button`
    cursor: pointer;
    display:flex;
    width: 200px;
    height: 50px;
    background: #fff;
    border: 1px solid #FF9254;
    border-radius: 8px; 
    color:#FF9254;
    justify-content:center;
    align-items:center;
    @media (max-width:600px) {
        width: 90%;  
        margin-top:20px; 
    }
    @media (max-width:1000px) {
        margin-top:20px; 
    }
`
export const Button = styled(Link)`
    display:flex;
    width: 200px;
    height: 50px;
    font-size: 16px;
    text-decoration: none;
    background: #FF9254;
    border: 0;
    border-radius: 8px; 
    color:#fff;
    justify-content:center;
    align-items:center;
    @media (max-width:600px) {
        width: 100%;  
        margin-top:20px; 
    }
`
interface ImgBlockProps {
    images: string[]
}
export const ImgBlock = styled.div<ImgBlockProps>`
    width:150px;
    height:150px;
    background-image:url(${({ images }: ImgBlockProps) => images[0]});
    background-repeat: no-repeat; 
    background-size:cover;
    background-position: center; 
`
export const Img = styled.img`
    width:150px;
    height:150px; 
`
export const ImgBlockItem = styled.img`
    width:40px;
    height:40px; 
    cursor: pointer;
`
export const UncheckedImg = styled(UncheckedIcon)`
    width:40px;
    height:40px; 
    cursor: pointer;
`
export const CheckedImg = styled(CheckedIcon)`
    width:40px;
    height:40px; 
    cursor: pointer;
`
export const IconWrapper = styled.div`
    width:40px;
    height:40px; 
`
export const ItemBlockCheck = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    justify-content:center;
    align-items:center;
`
export const BlocksChecks = styled.div`
    display: flex;
    width:90%; 
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    padding:50px;
    align-items:center;
    background: #FFFFFF;
    box-shadow: 0px 4px 11px 1px rgba(43, 43, 43, 0.05);
    border-radius: 12px;
    @media (max-width:1000px) {  
        width:95%;
        gap:20px;
        padding:20px;
    }
`
export const BlockstItemChecks = styled.div`
    display: flex;
    width:45%;
    flex-direction: row;
    justify-content:flex-start;
    align-items:center;
    gap:20px;
    padding:20px;
    @media (max-width:1000px) {   
        width:95%;  
        padding:0px; 
    }
`
