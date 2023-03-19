import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    padding-bottom:0px;
`
export const Buttons = styled.div`
    width: 100%;
`
export const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap:wrap;
    align-items: center;
    justify-content: left;
    width: 75%;
    padding-bottom:40px;
`
export const BtnNextContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 25%;
    align-items: end;
    justify-content: right;
    padding-bottom:40px;
`
interface ButtonProps {
    $disabled: boolean
}

export const TrackButton = styled.button<ButtonProps>`
    cursor: pointer;
    background:${({ $disabled }: ButtonProps) => !$disabled ? '#FF9254' : '#FFF'};
    color:${({ $disabled }: ButtonProps) => !$disabled ? '#FFF' : '#2E2E2E'};
    text-decoration: none;
    width:auto;
    border: 1.5px solid #CFCFCF;
    padding: 15px 30px;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 11px;
    font-weight: 400;
    font-size: 16px;
`
export const ButtonNext = styled.button<ButtonProps>`
    cursor:${({ $disabled }: ButtonProps) => !$disabled ? 'pointer' : 'default'};
    background:${({ $disabled }: ButtonProps) => !$disabled ? '#FF9254' : '#E0E0E0'};
    color:${({ $disabled }: ButtonProps) => !$disabled ? '#FFF' : '#2E2E2E'};
    text-decoration: none;
    width:auto;
    border: 1.5px solid #CFCFCF;
    padding: 15px 30px;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 11px;
    font-weight: 400;
    font-size: 16px;
`