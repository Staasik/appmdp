import styled from "styled-components";
import image from "images/footer.png"; 

export const DiagHtml = styled.div`
    width: 100%;
`
export const DiagHeader = styled.div`
    display:flex;
    padding-top:30px;
    padding-bottom:30px;
    align-items:center;
`

export const DiagBody = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
`
export const DiagFooter = styled.div`
    display:flex;
    flex-direction:row;
    background-image:url(${image});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: center; 
    height:250px;
    margin-top:50px;
    padding-left:5%;
`
export const FooterItems = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    margin-top:60px;
    margin-left:10%;
    align-items:flex-start;
    gap:20px;
`
export const FooterItemsKGU = styled.div` 
    margin-top:150px;
    width: 25%;
    text-align: right;
    margin-left:30%;
`

export const DiagnMenu = styled.div`
    display:flex;
    flex-direction:row;
    width: 35%;
    justify-content:flex-start;
    align-items:center;
    gap:40px;
`
export const DiagnText = styled.text`
    color: #C4C4C4;
    font-size:14px;
`
export const DiagnTextBlack = styled(DiagnText)`
    color:black;
`

export const DiagnCP = styled.div`
    display:flex;
    flex-direction:row;
    width: 25%;
    justify-content:flex-start;
    align-items:center;
    gap:40px;
`
export const DiagnIcon = styled.div`
    display:flex;
    flex-direction:row;
    width: 40%;
    justify-content:center;
    align-items:center;
`
export const DiagnTextDiagn = styled.div`
    display:flex;       
    color: black;  
    padding-top:20px;
    padding-bottom:40px;
    font-size:26px;
    margin-left:15%;
    align-items:center;
`
export const DiagnTextProf = styled.text`
    display:flex;       
    color: black;
    font-size:20px;
`
export const DiagnImg = styled.div`
    display:flex;
    flex-direction:column;
    width: 70%;
    justify-content:center;
    align-self:center;
    align-items:center;
    gap:50px;
`
export const DiagnBlock = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    justify-content:flex-start;
    align-self:center;
    align-items:center;
`
export const DiagnBlockText = styled.div`
    display:flex;
    flex-direction:column;
    width: 60%;
    row-gap:20px;
`
export const DiagnBlockImg = styled.div`
    display:flex;
    flex-direction:column;
    width: 40%;
    height:100%;
    row-gap:5px;
`

export default DiagHtml;