import styled from "styled-components";
import image from "images/footer.png";
import { Link } from 'react-router-dom'
import colors from "utils/colors";

export const HtmlContainer = styled.div`
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

export const DiagBody = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
`
interface DiagFooterProps{
    $margin: boolean
}
export const DiagFooter = styled.div<DiagFooterProps>`
    display:flex;    
    width: 100%;
    flex-direction:row;
    background-image:url(${image});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: center; 
    height:250px;
    margin-top:${({$margin}: DiagFooterProps) => $margin ? '50px' : '0px'};
    @media (max-width:600px) {
        flex-direction:column;
  }
    
`
export const DiagFooterItems = styled.div`
    display:flex;    
    width: 100%;
    flex-direction:row;
    height:100%;
    
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

export const DiagnMenu = styled.div`
    display:flex;
    flex-direction:row;
    width: 50%;
    justify-content:center;
    align-items:center;
    gap:20px;
`
export const DiagnText = styled.a`
    color: ${colors.GRAY};
    font-size:14px;
`
export const DiagnTextBlack = styled(DiagnText)`
    color: ${colors.GRAY};
    font-size:14px;
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
export const DiagnTextDiagn = styled.div`
    display:flex;       
    color: ${colors.BLACK};  
    padding-top:20px;
    padding-bottom:40px;
    font-size:26px;
    align-self:flex-start;
    @media (max-width:600px) {
        padding-bottom:0px;
    }
`
export const DiagnTextProf = styled.a`
    display:flex;       
    color: ${colors.BLACK};
    font-size:20px;
`
export const DiagnImg = styled.div`
    display:flex;
    flex-direction:column;
    width: 75%;
    justify-content:center;
    align-self:center;
    align-items:center;
    gap:50px;
    @media (max-width:600px) {
        width: 90%;
        gap:20px;
    }
`
export const DiagnLink = styled(Link)`
    text-decoration: none;
`
export const DiagnLinkId = styled.a`
    text-decoration: none;
`
export const DiagnImage = styled.img`
    width: 100%;
    height: 100%;
`
export const DiagnBlock = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    justify-content:flex-start;
    align-self:center;
    align-items:center;
    @media (max-width:600px) {
        flex-direction:column;
    }
`
export const DiagnBlockText = styled.div`
    display:flex;
    flex-direction:column;
    width: 60%;
    row-gap:20px;
    @media (max-width:600px) {
        width: 100%;
        row-gap:10px;
    }
`

export default DiagnBlockText;