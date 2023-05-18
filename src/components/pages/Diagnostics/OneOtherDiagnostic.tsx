import { MAIN_IP } from 'App';
import { AnswersIntoResultDiagn1 } from 'codebase/DiagnResults';
import Quest from 'components/defaultComponents/Quest';
import Diagn1Results, { IDiagnResult } from 'components/pages/Results/Diagn1Results';
import { Context } from 'index';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import { Button, DiagBody, DiagnBlock } from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from './DiagnHeader';
import data from 'mockdata/DiagnMockData';

interface IAnswer {
    value: number,
    label: number
}
export interface IOptions {
    value: number, 
    label: string,
} 
const OneOtherDiagnostic = () => {

    const { store } = useContext(Context)
    const { user : userData, isAuth } = store

    const [result, setResult] = useState<IDiagnResult[] | null>(null)
    const [answers, setAnswers] = useState<number[]>([])
    const [completeDisabled, setCompleteDisabled] = useState<boolean>(true)

    const onChange = (index: number, answer: IAnswer) => {
        let tempAnswers = answers
        tempAnswers[index] = answer.value
        setAnswers(tempAnswers)
        if (tempAnswers.length == data.questions.length && !_.some(tempAnswers, (el) => el == undefined)) {
            setCompleteDisabled(false)
        }
    }

    const onComplete = () => {
        if (!completeDisabled) {
            if (isAuth) {
                store.setBaseDiagnosticsData(1,answers)
            }
            setResult(AnswersIntoResultDiagn1(answers))
        }
    }

    function generateOptionsArray(num: number): IOptions[] {
        const options: IOptions[] = [];    
        for (let i = 1; i <= num; i++) {
            const option: IOptions = {
                value: i,
                label: `${i}`
            };    
            options.push(option);
        }    
        return options;
    }

    if (result) return (
        <Diagn1Results result={result} />
    )
    else return (
        <DiagBody>
            <DiagnHeader title={data.title} regulations={data.description} condition={data.answersDescription} images={[]} index={1}/>
            <DiagnBlock>
                {data.questions.map((value, index) => {
                    return (
                        <Quest text={value.text} options={generateOptionsArray(value.answers[0].value)} index={index} onChange={(answer) => { onChange(index, answer) }} />
                    )
                })}
            </DiagnBlock>
            <Button onClick={() => onComplete()} $completeDisabled={completeDisabled}>Завершить</Button>
        </DiagBody>
    );
}

export default observer(OneOtherDiagnostic)
