import { MAIN_IP } from 'App';
import { AnswersIntoResultDiagn1 } from 'codebase/DiagnResults';
import Quest from 'components/defaultComponents/Quest';
import Diagn1Results, { IDiagnResult } from 'components/pages/Results/Diagn1Results';
import imagefoot from "images/diagn1.png";
import image600 from "images/diagn1_600.png";
import { Context } from 'index';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import { data } from 'mockdata/mocktest1';
import { useContext, useState } from 'react';
import { Button, DiagBody, DiagnBlock } from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from './DiagnHeader';

const mockdata = {
    title: 'Профессиональное выгорание',
    regulations: 'Вам предлагается 22 утверждения о чувствах и переживаниях, связанных с работой. Пожалуйста, прочитайте внимательно каждое утверждение и решите, чувствуете ли вы себя таким образом на вашей работе.',
    condition: 'Варианты ответов: от 0 – никогда до 6 – ежедневно',
    images: [imagefoot, image600]
}

interface IAnswer {
    value: number,
    label: number
}

const Diagnostic1 = () => {

    const { store } = useContext(Context)
    const { user : userData, isAuth } = store

    const [result, setResult] = useState<IDiagnResult[] | null>(null)
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

    const onComplete = () => {
        if (!completeDisabled) {
            if (isAuth) {
                fetch(process.env.NODE_ENV == 'development' ? "/setResults" : `http://${MAIN_IP}:5000/setResults`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ login: userData.login, diagnnumber: 1, answers: answers })
                })
            }
            setResult(AnswersIntoResultDiagn1(answers))
        }
    }

    if (result) return (
        <Diagn1Results result={result} />
    )
    else return (
        <DiagBody>
            <DiagnHeader {...mockdata} index={1}/>
            <DiagnBlock>
                {data.map((value, index) => {
                    return (
                        <Quest text={value.text} options={value.options} index={index} onChange={(answer) => { onChange(index, answer) }} />
                    )
                })}
            </DiagnBlock>
            <Button onClick={() => onComplete()} $completeDisabled={completeDisabled}>Завершить</Button>
        </DiagBody>
    );
}

export default observer(Diagnostic1)
