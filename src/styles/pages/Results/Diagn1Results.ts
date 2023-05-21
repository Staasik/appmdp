import styled from "styled-components";
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
interface ImgBlockProps {
    images: string[]
}
export const ImgBlock = styled.div<ImgBlockProps>`
    display: flex;
    width:40%; 
    height:350px;
    justify-content:center;
    align-items:center;
    background-image:url(${({ images }: ImgBlockProps) => images[0]});
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
        background-image:url(${({ images }: ImgBlockProps) => images[1]});
    }
`
export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    height:auto;
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
    font-size: 16px;
    font-weight: 400;
    border:0;
    color:${colors.WHITE};
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
    background: ${colors.WHITE};
    @media (max-width:600px) {
        width: 100%;  
        margin-top:20px; 
    }
`
export const DiagnTextBlackBold = styled.a`
    color:${colors.BLACK};
    font-weight : 600;
    height:40px;    
    font-size:18px;
    @media (max-width:800px) {  
        height:30px;   
        font-size:14px; 
    }
`
export const DiagnTextBlack = styled.a`
    color:${colors.BLACK};
    font-size:18px; 
    @media (max-width:800px) {     
        font-size:14px; 
    }
`
export const DiagnTextProfCenter = styled.a`
    display:flex;       
    color: ${colors.BLACK};
    font-weight: 600;
    font-size: 40px;
    @media (max-width:1680px) {
    font-size:36px;
    }
    @media (max-width:1350px) {
    font-size:28px;
    }
    @media (max-width:800px) {
    font-size:20px;
    text-align:center;
    }
`
export const Discription = styled.div`
    display: flex;
    flex-direction:column;
    gap: 16px;
    width: 100%;
    margin: 25px 50px;
    align-items: center;
`
export const DiscTitle = styled.div`
    font-weight: 600;
    font-size: 24px;
    width: 70%;
    @media (max-width:1000px) {             
        width:90%;
    }
`
export const DiscContent = styled.div`
    font-weight: 400;
    font-size: 18px;
    width: 70%;
    @media (max-width:1000px) {             
        width:90%;
    }
`