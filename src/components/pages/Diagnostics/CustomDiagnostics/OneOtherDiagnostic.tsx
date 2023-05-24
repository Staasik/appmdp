import { AnswersIntoResultDiagn1 } from 'codebase/DiagnResults';
import Quest from 'components/defaultComponents/Quest';
import Diagn1Results, { IDiagnResult } from 'components/pages/Results/Diagn1Results';
import { Context } from 'index';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import { useContext, useState, useEffect } from 'react';
import { Button, DiagBody, DiagnBlock } from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from '../DiagnHeader';
import data from 'mockdata/DiagnMockData';
import { useParams } from 'react-router-dom';
import { IDiagnData } from 'codebase/store/adminStore';

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
    const { id } = useParams()

    const [data, setData] = useState<IDiagnData | undefined>()
    const [result, setResult] = useState<string | null>(null)
    const [answers, setAnswers] = useState<number[]>([])
    const [completeDisabled, setCompleteDisabled] = useState<boolean>(true)

    const onChange = (index: number, answer: IAnswer) => {
        let tempAnswers = answers
        tempAnswers[index] = answer.value
        setAnswers(tempAnswers)
        if (data && tempAnswers.length == data.questions.length && !_.some(tempAnswers, (el) => el == undefined)) {
            setCompleteDisabled(false)
        }
    }

    const onComplete = () => {
        if (!completeDisabled) {
            if (isAuth && id) {
                store.getDiagnosticResult(+id, answers).then((value) =>{
                    value && setResult(value.description)
                })
            }
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

    useEffect(() => {
        id ? store.getDiagnosticData(+id).then((value)=> {
            value && setData(value)
        }).catch(()=>{
            window.location.href = '../custom'
        })
        : window.location.href = '../custom'
    }, [])
    

    if (result) return (
        <div>{result}</div>
    )
    else if(data) return (
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
    return <></>
}

export default observer(OneOtherDiagnostic)
