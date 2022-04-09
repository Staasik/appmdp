import { IUserData, MAIN_IP } from 'App';
import { AnswersIntoResultDiagn2, IDiagnResult2 } from 'codebase/DiagnResults';
import QuestImg from 'components/defaultComponents/QuestImg';
import Diagn2Results from 'components/pages/Results/Diagn2Results';
import imagefoot from "images/diagn2.png";
import image600 from "images/diagn2_600.png";
import _ from 'lodash';
import { data } from 'mockdata/mocktest2';
import { useState } from 'react';
import { BlockTwo, Button, DiagBody, DiagnBlock } from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from './DiagnHeader';

const mockdata = {
    title: 'Копинг–поведение в стрессовых ситуациях',
    regulations: 'Перед вами будут появляться изображения с возможными реакциями человека на различные трудные, огорчающие или стрессовые ситуации.',
    condition: 'Выберите одну реакцию из двух, которая в большей степени отображает Ваше поведение в трудной стрессовой ситуации нажатием на изображение.',
    images: [imagefoot, image600]
}

interface Props {
    userData: IUserData | null
}

const Diagnostic2 = ({ userData }: Props) => {
    const [result, setResult] = useState<IDiagnResult2[] | null>(null)
    const [answers, setAnswers] = useState<number[]>([])
    const [completeDisabled, setCompleteDisabled] = useState<boolean>(true)

    const onChange = (index: number, answer: number) => {
        let tempAnswers = answers
        tempAnswers[index] = answer
        setAnswers([...tempAnswers])
        if (tempAnswers.length == (data.length / 2) && !_.some(tempAnswers, (el) => el == undefined)) {
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
                    body: JSON.stringify({ login: userData.login, password: userData.password, diagnnumber: 2, answers: answers })
                })
            }
            setResult(AnswersIntoResultDiagn2(answers))
        }
    }

    if (result) return (
        <Diagn2Results userData={userData} result={result} />
    )
    else return (
        <DiagBody>
            <DiagnHeader {...mockdata} index={2}/>
            <DiagnBlock>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => {
                    return (
                        <BlockTwo>
                            {data.slice(idx * 2, idx * 2 + 2).map((value, index) => {
                                return (
                                    <QuestImg text={value.text} image={value.options} index={index} onChange={(answer) => { onChange(idx, answer) }} selected={answers[idx] == index} />
                                )
                            })}
                        </BlockTwo>
                    )
                })}
            </DiagnBlock>
            <Button onClick={() => onComplete()} $completeDisabled={completeDisabled}>Завершить</Button>
        </DiagBody>
    );
}

export default Diagnostic2;
