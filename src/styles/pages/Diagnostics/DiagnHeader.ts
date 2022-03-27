import styled from "styled-components";
import image from "images/footer.png"; 
import imagefoot from "images/diagn1.png"; 
import image600 from "images/diagn1_600.png"; 
import { Link } from 'react-router-dom'

export const DiagHtml = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const DiagHeader = styled.div`
    display:flex;
    flex-direction:row;
    width: 75%;
    padding-top:30px;
    padding-bottom:30px;
    align-items:center;
    @media (max-width:800px) {
        width: 90%;
  }
`
export const DiagFooter = styled.div`
    display:flex;    
    width: 100%;
    flex-direction:row;
    background-image:url(${image});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: center; 
    height:250px;
    margin-top:50px;
    @media (max-width:600px) {
        flex-direction:column;
  }
    
`
export const FooterItems = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    margin-top:60px;
    margin-left:10%;
    align-items:flex-start;
    gap:20px;
    @media (max-width:600px) {  
        margin-top:30px;
  }
`
export const DiagnImage = styled.img`
    width: 100%;
    height: 100%;
`
export const DiagnImg = styled.div`
    display:flex;
    flex-direction:column;
    width: 75%;
    justify-content:center;
    align-self:center;
    align-items:center;
    gap:50px;
    @media (max-width:700px) {
        width: 90%;
        gap:20px;
    }
`
export const DiagnTextDiagn = styled.div`
    display:flex;       
    color: black;  
    padding-top:20px;
    padding-bottom:40px;
    font-size:26px;
    align-self:flex-start;
    @media (max-width:700px) {
        padding-bottom:0px;
    }
`
export const FooterItemsKGU = styled.div` 
    display:flex;
    margin-top:10%;
    margin-right:10%;
    text-align: right;
    @media (max-width:600px) {
        margin-top:0px;
        margin-right:0px;
        width:90%;
        height:100px;
        justify-self:flex-end;
        align-items:center;
        align-self:center;
  }
`
export const DiagFooterItems = styled.div`
    display:flex;    
    width: 100%;
    flex-direction:row;
    height:100%;
    
`
export const DiagnMenu = styled.div`
    display:flex;
    flex-direction:row;
    width: 50%;
    justify-content:center;
    align-items:center;
    gap:20px;
`
export const DiagnText = styled.text`
    color: #C4C4C4;
    font-size:14px;
`
export const DiagnTextBlack = styled(DiagnText)`
    color:black;
`
export const DiagnTextWhite = styled(DiagnText)`
    color:white;
`
export const DiagnTextBlackBold = styled(DiagnText)`
    color:black;
    font-weight : bold;
    height:70px;
`
export const DiagnCP = styled.div`
    display:flex;
    flex-direction:row;
    width: 25%;
    justify-content:flex-end;
    align-items:center;
    gap:20px;
    @media (max-width:600px) {
        width: 50%;
    }
`
export const DiagnIcon = styled.div`
    display:flex;
    flex-direction:row;
    width: 25%;
    justify-content:flex-start;
    align-items:center;
    @media (max-width:600px) {
        width: 50%;
    }
`

export const DiagnTextProf = styled.text`
    display:flex;       
    color: black;
    font-size:26px;
    @media (max-width:700px) {
    font-size:20px;
    }
`
export const DiagnTextProfWhite = styled(DiagnTextProf)`
    color:white;
`
export const DiagnBlockText = styled.div`
    display:flex;
    flex-direction:column;
    width: 60%;
    row-gap:20px;
    @media (max-width:700px) {
        width: 100%;
        row-gap:10px;
    }
`
export const DiagnAllBlockText = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:15%;
    width: 50%;
    row-gap:20px;
    @media (max-width:700px) {
        width: 90%;
        margin-left:5%;
    }
`
export const DiagnBlockImg = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width: 100%;    
    height:250px;
    background-image:url(${imagefoot});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: center; 
    @media (max-width:800px) {
        background-color:#EEF5FF;
        background-image:url();
    }
    @media (max-width:430px) {
        background-color:#EEF5FF;
        background-image:url(${image600});
        justify-content:flex-start;
        padding-top:5%;
        height:500px;
    }
`
export const DiagnLink = styled(Link)`
    text-decoration: none;
`
export const DiagnBlock = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    justify-content:flex-start;
    align-self:center;
    align-items:center;
    @media (max-width:430px) {
        width: 90%;  
    }
`
export const DiagnAllBlock = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    justify-content:flex-start;
    align-self:center;
    align-items:center;
    @media (max-width:700px) {
        flex-direction:column;
    }
`
export default DiagHtml;