import styled from "styled-components";
import image from "images/footer.png"; 
import imagefoot from "images/diagn.png"; 

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
    justify-content:center;
    align-items:center;
`
export const DiagFooter = styled.div`
    display:flex;
    flex-direction:row;
    background-image:url(${image});
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
export const DiagnTextBlackBold = styled(DiagnText)`
    color:black;
    font-weight : bold;
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
    font-size:26px;
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
    flex-wrap:wrap;
    width: 75%;
    row-gap:50px;
    padding-top: 50px;
    justify-content:center;
`
export const DiagnBlockText = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:15%;
    width: 40%;
    row-gap:20px;
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
`
export const QuestItem = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width: 100%;    
    height:150px;
    margin-top:50px;
    background: #FFFFFF;
    box-shadow: 0px 20px 40px -15px rgba(0, 0, 0, 0.05);
    border-radius: 19px;
`
interface QuestNumProps {
    index:number,
}

export const QuestNum = styled.div<QuestNumProps>`
    display:flex;
    flex-direction:column;
    width: 400px;
    gap:30px;    
    justify-content:flex-start;
    align-items:flex-start;
    padding:30px;
    box-shadow: ${({index}:QuestNumProps)=>index%2==0?'0px 20px 40px -15px rgba(0, 0, 0, 0.05)':'0px 20px 40px -15px rgba(0, 0, 0, 0.05)'};
    border-radius: ${({index}:QuestNumProps)=>index%2!=0?'0 19px 19px 0':'19px 0 0 19px'};
`
export const Button = styled.button`
    display:flex;
    width: 200px;    
    height: 50px;
    background: #FF9254;
    border-radius: 8px; 
    border:0;
    margin-top: 50px;
    color:white;
    justify-content:center;
    align-items:center;
`
export default DiagHtml;