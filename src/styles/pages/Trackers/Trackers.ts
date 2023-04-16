//import datePicker from "sassy-datepicker";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import colors from "utils/colors";

export const DatePickerCalendar = styled(Calendar)`
    width: 100%;
    box-shadow: 0px 4px 55px -3px rgba(43, 43, 43, 0.05);
    border: none;
    border-radius: 25px;
    .react-calendar__month-view__days{
        height: 250px;
    }
    .react-calendar__month-view__days__day--weekend {
        color: ${colors.BLACK};
    }
    .react-calendar__tile--now {
        background: ${colors.ORANGE_LIGHT};
        color: ${colors.WHITE};
        border-radius: 12px;
    }
    .react-calendar__tile--active {
        background: ${colors.BLUE_LIGHT};
        border-radius: 12px;
        color: ${colors.WHITE};
    }
    .react-calendar__tile--now:enabled:hover {
        background: ${colors.ORANGE_LIGHT};
    }
    .react-calendar__tile--active:enabled:hover{
        background: ${colors.BLUE_LIGHT};
    }
    .react-calendar__tile--active:enabled{
        background: ${colors.BLUE_LIGHT};
    }
`
export const EventContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    padding-bottom:40px;
    @media (max-width:1000px) {
        flex-wrap: wrap;
    }
`
export const ComponentContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`

export const StepContainer = styled(EventContainer)`
    flex-wrap:wrap;
    align-items: center;
    justify-content: left;
    padding-bottom:0px;
    @media (max-width:1000px) {
        gap: 10px;
        padding-bottom:20px;
    }
`
export const DateContainer = styled(StepContainer)`
    width: 65%;
    justify-content: center;
    align-items: flex-start;
    @media (max-width:1000px) {
        width: 100%;
        height:auto;
    }
`
export const CalendarContainer = styled(EventContainer)`
    width: 35%;
    justify-content: right;
    height: 400px;
    @media (max-width:1000px) {
        width: 100%;
        padding-bottom: 20px;
    }
`
export const TrackDate = styled.div`
    background-color: ${colors.BLUE_LIGHT};
    text-decoration: none;
    width:100%;
    padding: 15px 30px;
    text-align: left;
    justify-content: center;
    border-radius: 11px;
    font-weight: 400;
    font-size: 16px;
    color: ${colors.WHITE};
`
export const TextCalendar = styled.div`
    display:flex;       
    color: ${colors.BLACK};  
    padding-top:0px;
    color: ${colors.FORD_GRAY};
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
    @media (max-width:1000px) {
        padding-top: 40px;
        width: 80%;  
    }
`
export const WelcomeText = styled.div`
    padding-bottom:20px;
    display:flex;       
    color: ${colors.BLACK};  
    padding-top:20px;
    padding-bottom:40px;
    font-size:40px;  
    font-weight: 600;
    align-self:flex-start;
    @media (max-width:1000px) {
        font-size:24px;  
    }
`
export const DiaryText = styled(WelcomeText)`
    font-size:28px;  
    @media (max-width:1000px) {
        padding-top:20px;
        font-size:20px;  
    }
`

export const TextDescription = styled(WelcomeText)`
    font-size:16px;  
    color: ${colors.DURON_GRIZZLE_GRAY};
    padding-top:0px;
`

interface StepTextProps {
    $color: number
}

export const StepText = styled(TextDescription) <StepTextProps>`
    color: ${({ $color }: StepTextProps) => $color==1 ? colors.BLACK: $color==2 ? colors.BLUE_LIGHT : colors.GRAY};
    @media (max-width:1000px) {
        width: 30%;
        padding-bottom:20px;
    }
`

