import Quest from 'components/defaultComponents/Quest';
import { Button, DiagBody, Diagn3Block, BlockFive, TextFive } from 'styles/pages/Diagnostics/Diagnostic';
import { useEffect, useState } from 'react';
import DiagnHeader from './DiagnHeader';
import { data, blockdata } from 'mockdata/mocktest3'
import QuestFive from 'components/defaultComponents/QuestFive'
import { IUserData, MAIN_IP } from 'App'
import imagefoot from "images/diagn3.png";
import image600 from "images/diagn3_600.png";
import Diagn3Results from 'components/pages/Results/Diagn3Results'
import { IDiagnResult } from 'components/pages/Results/Diagn1Results'
import { AnswersIntoResultDiagn3 } from 'codebase/DiagnResults'

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

interface Props {
    userData: IUserData | null
}

const Diagnostic3 = ({ userData }: Props) => {
    const [result, setResult] = useState<IDiagnResult[] | null>(null)
    const [answers, setAnswers] = useState<number[]>([])

    const onChange = (index: number, answer: IAnswer) => {
        let tempAnswers = answers
        tempAnswers[index] = answer.value
        setAnswers(tempAnswers)
    }

    const onComplete = () => {
        if (answers.length == data.length && !answers.some((el) => el == undefined)) {
            if (userData) {
                fetch(process.env.NODE_ENV == 'development' ? "/setResults" : `http://${MAIN_IP}:5000/setResults`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ login: userData.login, password: userData.password, diagnnumber: 3, answers: answers })
                })
            }
            setResult(AnswersIntoResultDiagn3(answers))
        }
    }

    if (result) return (
        <Diagn3Results userData={userData} result={result} />
    )
    else return (
        <DiagBody>
            <DiagnHeader {...mockdata} />
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
            <Button onClick={() => onComplete()}>Завершить</Button>
        </DiagBody>
    );
}

export default Diagnostic3;
