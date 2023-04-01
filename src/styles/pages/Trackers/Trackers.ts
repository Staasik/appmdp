import datePicker from "sassy-datepicker";
import styled from "styled-components";

export const DatePicker = styled(datePicker)`
    height: calc(100% - 1.5rem);
    width: 100%;
    .sdp--square-btn{
        height: 40px;
        width: 40px;
    }
`
export const EventContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    padding-bottom:40px;
`
export const StepContainer = styled(EventContainer)`
    flex-wrap:wrap;
    align-items: center;
    justify-content: left;
    padding-bottom:0px;
`
export const DateContainer = styled(StepContainer)`
    width: 65%;
    justify-content: center;
    align-items: flex-start;
`
export const CalendarContainer = styled(EventContainer)`
    width: 35%;
    align-items: end;
    justify-content: right;
    height: 400px;
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
export const TextCalendar = styled.div`
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
export const TextCalendarContainer = styled.div`
    flex-wrap:wrap;
    display:flex;       
    text-align: center;
    justify-content: center;
    width: 50%;
`
export const WelcomeText = styled.div`
    padding-bottom:20px;
    display:flex;       
    color: black;  
    padding-top:20px;
    padding-bottom:40px;
    font-size:40px;  
    font-weight: 600;
    align-self:flex-start;
`
export const DiaryText = styled(WelcomeText)`
    padding-top:60px;
    font-size:28px;  
`

export const TextDescription = styled(WelcomeText)`
    font-size:16px;  
    color: #626262;
    padding-top:0px;
`

interface StepTextProps {
    $color: boolean
}

export const StepText = styled(TextDescription) <StepTextProps>`
    color: ${({ $color }: StepTextProps) => $color ? 'black' : '#CBCBCB'};
`

