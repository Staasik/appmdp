import styled from "styled-components";
export const OneChoiseContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap:nowrap;
    padding-bottom:0px;
    width: 100%;
    align-items: center;
    justify-content: left;
`
export const Emotion = styled.div`
    width: 100%;
`
export const Number = styled.div`
    width: 100px;
`
export const Img = styled.div`
    width: 50px;
    display:flex;
    justify-content: center;
`
export const SelectBlockEmotion = styled.div`
    width: 80%;
    display:flex;
    flex-wrap: wrap;
    padding-bottom: 0px;
    align-items: center;
    justify-content: center;
`
export const SelectBlockNumber = styled(SelectBlockEmotion)`
    width: 10%;
`
export const SelectImg = styled(SelectBlockEmotion)`
    width: 5%;
`
export const ChoisesWrapper = styled.div`
    width: 100%;
    padding-bottom: 40px;
    display: flex;
`
export const ChoisesContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 100%;
    gap: 20px;
    padding-bottom:0px;
`
export const UserChoises = styled.div`
    width: 75%;
`
export const BtnNextContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 25%;
    align-items: end;
    justify-content: right;
`