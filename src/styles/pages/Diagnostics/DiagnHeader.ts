import styled from "styled-components";
import image from "images/footer.png"; 
import colors from "utils/colors";

export const DiagHtml = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:center;
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
    @media (max-width:1200px) {
        width: 90%;
        gap:20px;
    }
`
export const DiagnTextDiagn = styled.div`
    display:flex;       
    color: ${colors.BLACK};  
    padding-top:20px;
    padding-bottom:40px;
    font-size:40px;  
    font-weight: 600;
    align-self:flex-start;
    @media (max-width:700px) {
        padding-bottom:0px;
        font-size:30px;  
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
export const ProfileName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: ${colors.FORD_GRAY};
    height: 100%;
`
export const DiagnText = styled.a`
    color: ${colors.GRAY};
    font-size:18px;
    @media (max-width:600px) {
        font-size:14px;
  }
`
interface HeaderTextProps{
    $active: boolean
}
export const HeaderText = styled.a<HeaderTextProps>`
    color: ${({$active} : HeaderTextProps) => $active ? colors.BLACK : colors.GRAY};
    font-size:14px;
    :hover{
        color: ${colors.GRAY};
    }
`

export const DiagnTextBlack = styled(DiagnText)`
    color:${colors.BLACK};
`
export const DiagnTextBlackI = styled(DiagnTextBlack)`
    font-size:16px;
`
export const DiagnTextBlackItem = styled(DiagnTextBlack)`
    font-size:16px;
    height:60px;
    @media (max-width:800px) {      
    height:40px;
    }
`
export const DiagnTextBlackTitle = styled(DiagnTextBlack)`
    font-weight: 600;
    font-size: 24px;
    margin: 30px 0 10px 0;
`
export const DiagnTextWhite = styled(DiagnText)`
    color:${colors.WHITE};
`
export const DiagnTextBlackBold = styled(DiagnText)`
    color:${colors.BLACK};
    font-weight : 600;
    height:90px;
    @media (max-width:1200px) {      
    height:auto;
    }
`
export const DiagnTextBlackBoldI = styled(DiagnText)`
    color:${colors.BLACK};
    font-weight : 600;
    height:70px;
    @media (max-width:1000px) {      
    height:auto;
    margin-top:10px;
    margin-bottom:10px;
    }
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

export const DiagnTextProf = styled.a`
    display:flex;       
    color: ${colors.BLACK};
    font-weight:600;
    font-size:38px;
    @media (max-width:800px) {
    font-size:24px;
    }
`
export const DiagnTextProfD = styled.a`
    display:flex;       
    color: ${colors.BLACK};
    font-weight:600;
    font-size:30px;
    @media (max-width:800px) {
    font-size:24px;
    }
`
export const DiagnTextProfS = styled(DiagnTextProf)`
    width:200px;
    @media (max-width:800px) {
    width:100%;
    }
`
export const DiagnTextProfWhite = styled(DiagnTextProf)`
    color:${colors.WHITE};
    font-size:54px;
    font-weight:800;
    @media (max-width:850px) {
        font-size:20px;
    }
`
export const DiagnBlockText = styled.div`
    display:flex;
    flex-direction:column;
    width: 60%;
    row-gap:20px;
    @media (max-width:1000px) {
        width: 100%;
        row-gap:10px;
    }
`
export const DiagnRecBlockWrapper = styled.div`
    width: 100%;
    display: flex;
`
export const DiagnRecBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px;
    gap: 30px;
    background: ${colors.SEASHELL};
    border-radius: 16px;
    @media (max-width:1000px) {     
        gap: 20px;
        padding: 20px;
    }
`
export const DiagnRecTitle = styled.div`
    font-weight: 600;
    font-size: 24px;
    @media (max-width:1000px) {     
        font-size: 18px;
    }
`
export const DiagnRecContent = styled.div`
    font-weight: 400;
    font-size: 18px;
    @media (max-width:1000px) {     
        font-size: 16px;
    }
`
export const DiagnRecPS = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    color: ${colors.FORD_GRAY};
    @media (max-width:1000px) {     
        font-size: 16px;
    }
`
export const DiagnRecButtons = styled.div`
    display: flex;
    width: 100%;
    gap: 50px;
    @media (max-width:1000px) {     
        gap: 16px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const DiagnRecButton = styled.a`
    background-color: ${colors.WHITE};
    text-decoration: none;
    width:30%;
    border: 1.5px solid ${colors.BLUE_LIGHT};
    padding: 15px 30px;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 11px;
    font-weight: 400;
    font-size: 16px;
    @media (max-width:1000px) {     
        font-size: 14px;
        width:90%;
    }
    @media (max-width:600px) {     
        width:80%;
    }
`
export const DiagnAllBlockText = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:15%;
    width: 50%;
    row-gap:20px;
    @media (max-width:1200px) {
        width: 90%;
        margin-left:5%;
    }
`

interface DiagnBlockImgProps{
    images: string[],
    index: number
}
export const DiagnBlockImg = styled.div<DiagnBlockImgProps>`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width: 100%;    
    height:${({index}: DiagnBlockImgProps) => index===2 ?  '500px' : '350px'};
    background-image:url(${({images}: DiagnBlockImgProps) => images[0]});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: center; 
    @media (max-width:1200px) {
        background-color:${colors.ALICE_BLUE2};
        background-image:url();
    }
    @media (max-width:600px) {
        background-color:${colors.ALICE_BLUE2};
        background-image:url(${({images}: DiagnBlockImgProps) => images[1]});
        justify-content:flex-start;
        padding-top:5%;
        height:${({index}: DiagnBlockImgProps) => index===2 ?  '700px' : '500px'};
    }
`
export const DiagnLink = styled.a`
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
    @media (max-width:1000px) {
        flex-direction:column;
    }
`
export default DiagHtml;