import styled from "styled-components";

export const Description = styled.div`
    width: 100%;
    text-align:18px;
`
export const BoldFont = styled.span`
    font-weight: 600;
`
export const Text = styled.div`
    font-weight: 400;
    padding-top:5px;
    padding-bottom:5px;
`
export const Emotions = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    text-align:18px;
    @media (max-width:1000px) {
        flex-direction:column;
    }
`
export const EmotionsEvent = styled.div`
    width: 50%;
    text-align:18px;
    @media (max-width:1000px) {
        width: 100%;
    }
`
export const EmotionsDiary = styled.div`
    width: 50%;
    text-align:18px;
    @media (max-width:1000px) {
        width: 100%;
    }
`
export const Done = styled.div`
    width: 100%;
    text-align:18px;
`
export const WillDo = styled.div`
    width: 100%;
    text-align:18px;
`
export const Container = styled.div`
    display:flex;  
    flex-direction:column;
    gap: 20px;   
    text-align: left;
    justify-content: start;
    width: 95%;
    height: 100%;
    align-items:start;
    @media (max-width:1000px) {
        padding-top: 20px;
    }
`

