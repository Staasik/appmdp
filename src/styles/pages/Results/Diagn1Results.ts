import styled from "styled-components";
import image from "images/Results/diag1result.png"; 
import imagedesk from "images/Results/diag1result_600.png"; 
import { Link } from 'react-router-dom';

export const HomeTextBlock = styled.div`
    display: flex;
    width:90%; 
    gap:100px;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    margin:50px;
    @media (max-width:1000px) {
        gap:0px;
        margin:0px;
    }
    @media (max-width:800px) {
        flex-direction: column;
        margin:0px;
    }
`
export const ResultsBlock = styled.div`
    display: flex;
    width:100%; 
    gap:10px;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin:50px;
    @media (max-width:1000px) {      
        margin:0px;
        margin-top:50px;
    }
    @media (max-width:800px) {      
        gap:30px;
        margin:0px;
        margin-top:30px;
    }
`
export const ResultItem = styled.div`
    display: flex;
    width:25%;
    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:20px;
    @media (max-width:800px) {             
        width:100%; 
        gap:5px;
    }
`
export const ResultStaticItem = styled(ResultItem)`   
    width:33%;
    flex-direction:row;
    gap:0px;
    @media (max-width:800px) {             
        width:100%; 
        gap:5px;
        flex-direction:row;
    }
`
export const Result = styled.div`
    display: flex;
    width:70%;
    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;
    @media (max-width:1000px) {             
        width:90%;
    }
    @media (max-width:800px) {             
        width:90%;
        flex-direction: column;
    }
`
export const ResultLine = styled.div`
    display: flex;
    width:70%;
    gap:30px;
    flex-direction: row;
    justify-content:flex-start;
    align-items:flex-start;
    @media (max-width:1000px) {             
        width:90%;
    }
    @media (max-width:800px) {             
        width:90%;
        flex-direction: column;
        gap:15px;
    }
`
export const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:flex-start;
    gap:20px;    
    @media (max-width:800px) {             
        width:100%;
        gap:20px;    
        align-items:center;
    }
`
interface ImgBlockProps{
    images: string[]
}
export const ImgBlock = styled.div<ImgBlockProps>`
    display: flex;
    width:40%; 
    height:350px;
    justify-content:center;
    align-items:center;
    background-image:url(${({images}: ImgBlockProps) => images[0]});
    background-repeat: no-repeat; 
    background-size:cover;
    background-position: center; 
    @media (max-width:1000px) {
        width:50%;
        height:300px;
    }    
    @media (max-width:800px) {
        width:100%;
        height:350px;
        background-image:url(${({images}: ImgBlockProps) => images[1]});
    }
`
export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    height:300px;
    width:30%;
    justify-content:center;
    align-items:flex-start;
    @media (max-width:1000px) {
        width:50%;
    }
    @media (max-width:800px) {
        width:100%;
        align-items:center;
    }
`
export const Button = styled(Link)`
    text-decoration: none ;
    display:flex;
    width: 200px;    
    height: 50px;
    background: #FF9254;
    border-radius: 8px; 
    border:0;
    color:white;
    justify-content:center;
    align-items:center;
    @media (max-width:600px) {
        width: 100%;  
        margin-top:20px; 
    }
`
export const ErrorBlock = styled.div`
    display:flex;
    width: 250px;    
    justify-content:center;
    align-items:center;
    height: 50px;
    background: #fff;
    @media (max-width:600px) {
        width: 100%;  
        margin-top:20px; 
    }
`
export const DiagnTextBlackBold = styled.text`
    color:black;
    font-weight : 600;
    height:40px;    
    font-size:18px;
    @media (max-width:800px) {  
        height:30px;   
        font-size:14px; 
    }
`
export const DiagnTextBlack = styled.text`
    color:black;
    font-size:18px; 
    @media (max-width:800px) {     
        font-size:14px; 
    }
`
export const DiagnTextProfCenter = styled.text`
    display:flex;       
    color: black;
    font-weight: 600;
    font-size: 40px;
    @media (max-width:1680px) {
    font-size:36px;
    }
    @media (max-width:1350px) {
    font-size:30px;
    }
    @media (max-width:800px) {
    font-size:20px;
    text-align:center;
    }
`