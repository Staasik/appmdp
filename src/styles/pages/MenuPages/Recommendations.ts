import styled from "styled-components";
import colors from "utils/colors";

export const TextBlock = styled.div`
    display: flex;
    width:75%; 
    justify-content:flex-start;
    align-items:flex-start;
    margin:20px;
    @media (max-width:1400px) {
        width:90%; 
    }
`
export const TextItemMovie = styled.div`
    display: flex;
    width:100%; 
    height:50px;
    justify-content:flex-start;
    align-items:center;
`
export const TextItemBook = styled.div`
    display: flex;
    flex-direction: column;
    gap:50px;
    width:70%; 
    height:80%;
    justify-content:center;
    align-items:flex-start;
    @media (max-width:550px) {
        width:100%; 
    }
`
export const MovieBlock = styled.div`
    display: flex;
    width:75%; 
    gap:30px;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    margin:20px;
    @media (max-width:1400px) {
        width:90%; 
    }
    @media (max-width:1200px) {
        flex-direction: column;
    }
    @media (max-width:550px) {
        margin:0px;
        gap:10px;
    }
`
export const MusicBlock = styled.div`
    display: flex;
    width:75%; 
    height:800px;
    gap:30px;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    margin:20px;
    @media (max-width:1400px) {
        width:90%; 
    }
    @media (max-width:1200px) {
        flex-wrap:nowrap;
        height:auto;
        margin:0px;
    }    

`
export const BookBlock = styled.div`
    display: flex;
    width:75%; 
    height:550px;
    gap:30px;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    margin:20px;
    @media (max-width:1620px) {
        width:90%; 
    }
    @media (max-width:1350px) {
        flex-wrap:nowrap;
        height:auto;
        margin:0px;
    }
    
`
export const Book = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items:center;
    width: 48.8%;
    gap:30px;
    @media (max-width:1350px) {
        width:100%;
    }
    @media (max-width:550px) {
        flex-direction: column;
    }
`

export const ItemBook = styled.img`
    width:200px; 
    height:250px; 
`
export const Music = styled.div`
    display: flex;
    width:48.8%;
    height:370px;
    @media (max-width:1200px) {
        width:100%;
        height:500px;
    }

`
export const MovieItemBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:flex-start;
    flex:1;
    @media (max-width:1200px) {
        width:100%;
    }
`
export const ItemMovie = styled.div`
    display: flex;
    width:100%; 
    height:250px;
    border-radius: 12px;
    @media (max-width:1200px) {
        height:500px;
    }
    @media (max-width:750px) {
        height:300px;
    }
    @media (max-width:550px) {
        height:200px;
    }
`
export const DiagnTextBlackBold = styled.a`
    color:${colors.BLACK};
    font-weight : 600;
    height:40px;    
    font-size:30px;
    @media (max-width:1000px) {  
        height:30px; 
        font-size:18px;   
    }
`
export const DiagnTextBlackBoldBook = styled(DiagnTextBlackBold)`
    font-size:24px;  
    @media (max-width:1350px) {  
        font-size:20px;   
    } 
    @media (max-width:800px) {  
        font-size:18px;   
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
export const DiagnTextBlack = styled.a`
    color:${colors.BLACK};
    font-size:18px; 
    font-weight:300;
    @media (max-width:800px) {     
        font-size:14px; 
    }
`