import styled from "styled-components";
import datePicker from "sassy-datepicker";


export const DatePicker = styled(datePicker)`
    height: calc(100% - 1.5rem);
    width: 100%;
    .sdp--square-btn{
        height: 40px;
        width: 40px;
    }
`

export const TrackerButtonsDiv = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    padding-bottom:40px;
`

export const TrackButtonsDiv = styled(TrackerButtonsDiv)`
    flex-wrap:wrap;
    width: 75%;
    align-items: center;
    justify-content: left;
`
export const TrackButtonsDivNext = styled(TrackerButtonsDiv)`
    width: 25%;
    align-items: end;
    justify-content: right;
`
interface ButtonProps{
    $disabled: boolean
}

export const TrackButton = styled.button<ButtonProps>`
    cursor: pointer;
    background:${({$disabled}: ButtonProps) => !$disabled ? '#FF9254' : '#FFF' };
    color:${({$disabled}: ButtonProps) => !$disabled ? '#FFF' : '#2E2E2E' };
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
export const TrackButtonN = styled.button<ButtonProps>`
    cursor:${({$disabled}: ButtonProps) => !$disabled ? 'pointer' : 'default' };
    background:${({$disabled}: ButtonProps) => !$disabled ? '#FF9254' : '#E0E0E0' };
    color:${({$disabled}: ButtonProps) => !$disabled ? '#FFF' : '#2E2E2E' };
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
export const TrackButtonNext = styled.button`
    background:'#E0E0E0';
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
export const TrackDate = styled.div`
    background-color: #5496FF;
    text-decoration: none;
    width:100%;
    padding: 15px 30px;
    text-align: left;
    justify-content: center;
    border-radius: 11px;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
`
export const TextCalendare = styled.div`
    display:flex;       
    color: black;  
    padding-top:0px;
    color: #969696;
    font-size:16px;  
    text-align: center;
    justify-content: center;
    width: 100%;
    font-weight: 600;
    align-self:center;
`
export const TextCalendareDiv = styled.div`
    flex-wrap:wrap;
    display:flex;       
    text-align: center;
    justify-content: center;
    width: 50%;
`
export const TrackerText = styled.div`
    display:flex;       
    color: black;  
    padding-top:20px;
    padding-bottom:40px;
    font-size:40px;  
    font-weight: 600;
    align-self:flex-start;
`
export const TrackerMiniText = styled(TrackerText)`
    font-size:16px;  
    color: #626262;
    padding-top:0px;
`
export const TextComponents = styled.textarea`
    width: 100%;
    height: 100px;
    border: 1.5px solid #CBCBCB;
    border-radius: 42px;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    resize: none;
    display:flex;
    align-items: center;
    justify-content: center;
    overflow: none;
`
export const SelectBlocks = styled.div`
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    padding-bottom: 40px;
    align-items: center;
    justify-content: center;
`