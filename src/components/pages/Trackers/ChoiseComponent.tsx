

import Choise from 'components/pages/Trackers/Choise';
import { data } from 'mockdata/MoskTacker';
import { useContext, useState } from 'react';
import { Context } from 'index';
import _ from 'lodash';
import { TrackButtonNext, TrackButtonsDivNext, TrackerButtonsDiv, TrackerMiniText } from 'styles/pages/Trackers/Trackers';
interface IAnswer {
    value: number,
    label: number
}


const ChoiseComponent = () => {
    const { store } = useContext(Context)

    const [answers, setAnswers] = useState<number[]>([])
    const [completeDisabled, setCompleteDisabled] = useState<boolean>(true)
    
    const onChange = (index: number, answer: IAnswer) => {
        let tempAnswers = answers
        tempAnswers[index] = answer.value
        setAnswers(tempAnswers)
        if (tempAnswers.length == data.length && !_.some(tempAnswers, (el) => el == undefined)) {
            setCompleteDisabled(false)
        }
    }

    return (            
    
    <div style={{width: "100%", paddingBottom: "40px"}}>
        <TrackerMiniText>Выберете одну или несколько эмоций, которые вы испытывали в данной ситуации и оцените их интенсивность по шкале от 0 до 10</TrackerMiniText>
        <TrackerButtonsDiv style={{paddingBottom: "0px", flexWrap:"wrap"}}>
            {data.map((value, index) => {
                return (
                    <Choise text={value.text} options={value.options} index={index} onChange={(answer) => { onChange(index, answer); } } />
                )
            })}

            <TrackButtonsDivNext style={{paddingBottom: "0px", width:"20%"}}>
                <TrackButtonNext>Далее</TrackButtonNext>
            </TrackButtonsDivNext>

        </TrackerButtonsDiv>
    </div>
  );
};

export default ChoiseComponent
