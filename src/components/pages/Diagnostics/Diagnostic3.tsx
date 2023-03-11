import { MAIN_IP } from 'App';
import { AnswersIntoResultDiagn3 } from 'codebase/DiagnResults';
import QuestFive from 'components/defaultComponents/QuestFive';
import { IDiagnResult } from 'components/pages/Results/Diagn1Results';
import Diagn3Results from 'components/pages/Results/Diagn3Results';
import imagefoot from "images/diagn3.png";
import image600 from "images/diagn3_600.png";
import { Context } from 'index';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import { blockdata, data } from 'mockdata/mocktest3';
import { useContext, useState } from 'react';
import { BlockFive, Button, DiagBody, Diagn3Block, TextFive } from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from './DiagnHeader';

const mockdata = {
    title: 'Оценка признаков эмоционального выгорания',
    regulations: 'Вам предлагается по 5 утверждений из каждого блока: поведение, мышление, чувства и здоровье. Пожалуйста, прочитайте следующие утверждения и выберите тот вариант ответа, который наилучшим образом отражает Ваше мнение.',
    condition: 'Варианты ответов: от 0 – никогда до 6 – ежедневно',
    images: [imagefoot, image600]
}

interface IAnswer {
    value: number,
    label: number
}

const Diagnostic3 = () => {

    const { store } = useContext(Context)
    const { user : userData } = store

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
            if (userData) {
                fetch(process.env.NODE_ENV == 'development' ? "/setResults" : `http://${MAIN_IP}:5000/setResults`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ login: userData.login, diagnnumber: 3, answers: answers })
                })
            }
            setResult(AnswersIntoResultDiagn3(answers))
        }
    }

    if (result) return (
        <Diagn3Results result={result} />
    )
    else return (
        <DiagBody>
            <DiagnHeader {...mockdata} index={3}/>
            <Diagn3Block>
                {
                    blockdata.map((value, idx) => {
                        return (
                            <BlockFive>
                                <TextFive>{value.text}</TextFive>
                                {data.slice(idx * 5, idx * 5 + 5).map((value, index) => {
                                    return (
                                        <QuestFive text={value.text} options={value.options} index={idx * 5 + index} onChange={(answer) => { onChange(idx * 5 + index, answer) }} />
                                    )
                                })}
                            </BlockFive>
                        )
                    })
                }
            </Diagn3Block>
            <Button onClick={() => onComplete()} $completeDisabled={completeDisabled}>Завершить</Button>
        </DiagBody>
    );
}

export default observer(Diagnostic3)
