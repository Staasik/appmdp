import styled from "styled-components";
import image from "images/Results/diag3result_600.png"; 
import imagedesk from "images/Results/diag3result_600.png"; 
import Lines from "images/Results/Lines.png";
import colors from "utils/colors";

export const HomeTextBlock = styled.div`
    display: flex;
    width:90%; 
    gap:100px;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    @media (max-width:1000px) {
        gap:0px;
        margin:0px;
    }
    @media (max-width:800px) {
        flex-direction: column;
        gap:30px;
        margin:0px;
    }
`
export const RecommendWrapper = styled.div`
    display: flex;
    width:70%; 
    margin:50px;
    @media (max-width:1000px) {
        width:100%; 
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
    width:45%; 
    gap:10px;
    margin-left:15%;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    align-self:flex-start;
    box-shadow: 0px 20px 40px -15px rgba(0, 0, 0, 0.05);
    background-image:url(${Lines});
    background-repeat: no-repeat; 
    background-size:cover;
    background-position: center; 
    border-radius: 19px;
    @media (max-width:1200px) {   
        width:60%; 
        margin-left:10%;   
    }
    @media (max-width:1000px) {  
        width:90%; 
        margin-left:0;  
        gap:0px;
        align-self:center;  
        background-image:none;
        padding-bottom:30px;   
        padding-top:30px;   
    }
`
export const ResultItem = styled.div`
    display: flex;
    width:80%;
    flex-direction: column;
    justify-content:center;
    align-items:flex-start;
    gap:20px;
    padding:30px;
    @media (max-width:1200px) {             
        width:95%;
    }
    @media (max-width:800px) {             
        gap:10px;
        padding:0px;
        width:85%;
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
    width:100%;
    gap:30px;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    @media (max-width:1000px) {             
        width:90%;
    }
    @media (max-width:800px) {             
        width:90%;
        flex-direction: column;
        gap:0px;
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
export const ImgBlock = styled.div`
    display: flex;
    width:40%; 
    height:300px;
    justify-content:center;
    align-items:center;
    background-image:url(${image});
    background-repeat: no-repeat; 
    background-size:cover;
    background-position: center; 
    @media (max-width:1000px) {
        width:50%;
    }    
    @media (max-width:800px) {
        width:100%;
        height:350px;
    background-image:url(${imagedesk});
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
export const Button = styled.a`
    text-decoration: none ;
    display:flex;
    width: 200px;    
    height: 50px;
    background: ${colors.ORANGE_LIGHT};
    border-radius: 8px; 
    border:0;
    color:${colors.WHITE};
    justify-content:center;
    font-size: 16px;
    font-weight: 400;
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
    background: ${colors.WHITE};
    @media (max-width:600px) {
        width: 100%;  
        margin-top:20px; 
    }
`
export const DiagnTextBlackBold = styled.a`
    color:${colors.BLACK};
    font-weight : bold;
    height:40px;    
    font-size:18px;
    @media (max-width:800px) {  
        height:30px; 
        font-size:14px;   
    }
`
export const DiagnTextProf = styled.a`
    display:flex;       
    color: ${colors.BLACK};
    font-size:26px;
    @media (max-width:800px) {
    font-size:20px;
    }
`
export const DiagnTextProfCenter = styled.a`
    display:flex;       
    color: ${colors.BLACK};
    font-size:26px;
    @media (max-width:800px) {
    font-size:20px;
    text-align:center;
    }
`
export const DiagnTextBlack = styled.a`
    color:${colors.BLACK};
    font-size:18px; 
    @media (max-width:800px) {     
        font-size:14px; 
    }
`
export const Discription = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    margin-top: 20px;
    padding: 25px 50px;
    align-items: center;
    gap: 30px;
`
export const DiscriptionContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 70%;
    gap: 20px;
    @media (max-width:800px) {             
        width:85%;
    }

`
export const DiscriptionContainerTitle = styled.div`
    width: 70%;
    color: ${colors.BLUE_LIGHT};
    font-weight: 600;
    font-size: 18px;
    @media (max-width:800px) {             
        width:85%;
    }
`
export const DiscTitle = styled.div`
    font-weight: 600;
    font-size: 24px;
    width: 70%;
    @media (max-width:800px) {             
        width:85%;
    }
`
export const DiscContent = styled.div`
    font-weight: 400;
    font-size: 18px;
    width: 100%;
`
export const DiscriptionImageCont = styled.div`
    display: flex;
    width: 30px;
    align-items: center;
    gap: 16px;
`
export const DiscriptionPS = styled.div`
    display: flex;
    width: 70%;
    align-items: center;
    gap: 16px;
    color: ${colors.BLUE_LIGHT};
    @media (max-width:800px) {             
        width:85%;
    }
`