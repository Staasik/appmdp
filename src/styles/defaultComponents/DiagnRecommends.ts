import styled from 'styled-components'
import colors from 'utils/colors'

export const DiagnRecommendsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width:800px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`
export const DiagnRecommendsBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    width: 55%;
    gap: 50px;
    background: ${colors.WHITE};
    box-shadow: 0px 20px 40px -15px rgba(0, 0, 0, 0.05);
    border-radius: 19px;
    @media (max-width:800px) {
        width: 90%;
        padding: 20px;
    }
`
export const BlockContent = styled.div`
    display: flex;
    gap: 40px;
    font-weight: 400;
    align-items: center;
    font-size: 18px;
    a{
        color:${colors.BLUE_LIGHT};
    }
    @media (max-width:800px) {
        margin:0px;
    }
`
export const DiagnRecommendsLinkBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 30%;
    gap: 15px;
    @media (max-width:800px) {
        width: 90%;
    }
`
export const LinkBlockTitle = styled.div`
    display: flex;
    color: ${colors.ORANGE_LIGHT};
    font-weight: 600;
    font-size: 18px;
`
export const LinkBlockContent = styled.div`
    display: flex;
    font-weight: 400;
    font-size: 16px;
`
export const LinkBlockHref = styled.a`
    text-decoration: none;
    display: flex;
    color: ${colors.FORD_GRAY};
    font-weight: 600;
    font-size: 18px;
    align-items: center;
`
export const ImageContainer = styled.div`
    width: 40px;
`
export default DiagnRecommendsWrapper