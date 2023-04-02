import styled from "styled-components";
import image from "images/HomePage/HomeImg.png";
import imagedesk from "images/HomePage/Desktop.png";
import colors from "utils/colors";
export const HomeTextBlock = styled.div`
    display: flex;
    width:90%; 
    gap:150px;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    margin:50px;
    @media (max-width:860px) {
        width:90%;
        flex-direction: column;
        gap:30px;
        margin:0px;
    }
`
export const HomeBlock = styled.div`
    display: flex;
    width:70%; 
    gap:100px;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    margin:50px 50px 100px 50px;
    @media (max-width:1550px) {
        width:80%;
    }
    @media (max-width:1350px) {
        width:90%;
        gap:40px;
    }
    @media (max-width:1150px) {             
        width:90%;
        flex-direction: column;
        gap:20px;
        margin:0px;
        margin-top:50px;
        margin-bottom:20px;
    }
`
export const MenuBlock = styled.div`
    display: flex;
    width:100%; 
    gap:70px;
    padding-top:50px;
    padding-bottom:50px;
    background-color:rgba(203, 203, 203, 0.1);
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin:50px;
    @media (max-width:860px) {      
        gap:30px;
        padding-top:30px;
        padding-bottom:30px;
        margin:0px;
        margin-top:50px;
    }
`
export const FootBlock = styled.div`
    display: flex;
    width:100%; 
    height:450px;
    background-color:${colors.ORANGE_LIGHT};
    justify-content:center;
    align-items:center;
    @media (max-width:800px) {
        height:300px;
    }
`
export const BlockDesk = styled.div`
    display: flex;
    width:50%; 
    gap:20px;
    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;
    @media (max-width:1150px) {             
        width:100%;
        justify-content:center;
        align-items:flex-start;
    }
`
export const BlockDeskText = styled(BlockDesk)`
    justify-content:flex-end;
    align-items:flex-start;
    height:350px; 
    width:50%; 
    @media (max-width:1200px) {             
        height:400px; 
    }
    @media (max-width:1150px) {             
        width:100%;
        justify-content:center;
        align-items:flex-start;
        height:450px; 
    }
`
export const MenuItem = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:20px;
`
export const MenuLine = styled.div`
    display: flex;
    width:70%;
    gap:100px;
    flex-direction: row;
    justify-content:flex-start;
    align-items:flex-start;
    @media (max-width:1280px) {
        width:90%;
        gap:20px;
    }
    @media (max-width:860px) {             
        width:90%;
        flex-direction: column;
    }
`
export const ButtonBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    gap:50px;    
    @media (max-width:860px) {             
        width:100%;
        gap:20px;    
        flex-direction: column;
    }
`
export const ImgBlock = styled.div`
    display: flex;
    width:250px; 
    min-width:250px; 
    height:250px;
    justify-content:center;
    align-items:center;
    background-image:url(${image});
    background-repeat: no-repeat; 
    background-size:cover;
    background-position: center; 
`
export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap:30px;
    height:300px;
    width:50%;
    justify-content:center;
    align-items:flex-start;
    @media (max-width:1280px) {
        width:90%;
    }
    @media (max-width:860px) {
        height:100px;
        align-items:center;
    }
`
export const TextBlockWhite = styled(TextBlock)`
    display: flex;
    align-items:center;
    height:400px;
    text-align:center;
    align-items:center;
    @media (max-width:1550px) {
        height: 400px;
    }
    width:70%;
    @media (max-width:600px) {
        height: 300px;
        gap:10px;
    }
`
export const Button = styled.a`
    text-decoration: none ;
    display:flex;
    width: 200px;
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
export const ButtonWhite = styled(Button)`
    background: ${colors.WHITE};
    color:${colors.ORANGE_LIGHT};
    @media (max-width:600px) {
        margin-left:0px; 
    }
`
export const TextUrl = styled.a`
    display:flex;       
    font-weight:600;
    color: ${colors.ORANGE_LIGHT};
    font-size:30px;
    @media (max-width:700px) {
    font-size:20px;
    }
`
export const ImgBlockDesktop = styled.div`
    display: flex;
    width:500px; 
    height:300px; 
    justify-content:center;
    align-items:center;
    background-image:url(${imagedesk});
    background-repeat: no-repeat; 
    background-size:cover;
    @media (max-width:1150px) {             
        width:100%;
        height:55vw;
    }
`
export const DiagnTextBlackBold = styled.a`
    color:${colors.BLACK};
    font-weight : 600;
    height:50px;    
    font-size:18px;
    @media (max-width:860px) {  
        height:60px;  
    font-size:14px;   
    }
`
export const DiagnTextProfCenter = styled.a`
    display:flex;       
    color: ${colors.BLACK};
    font-size:54px;
    font-weight: 800;
    @media (max-width:860px) {
    font-size:30px;
    text-align:center;
    }
    @media (max-width:800px) {
    font-size:24px;
    }
`