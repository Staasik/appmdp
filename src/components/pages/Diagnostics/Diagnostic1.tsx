import Quest from 'components/defaultComponents/Quest';
import { data } from 'mockdata/mocktest1';
import { Button, DiagBody, DiagnBlock } from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from './DiagnHeader';
import { IUserData } from 'App'
import imagefoot from "images/diagn1.png";
import image600 from "images/diagn1_600.png";
import { useEffect, useState } from 'react';
import Diagn1Results, { IDiagnResult } from 'components/pages/Results/Diagn1Results'

const mockdata = {
    title: 'Профессиональное выгорание',
    regulations: 'Вам предлагается 22 утверждения о чувствах и переживаниях, связанных с работой. Пожалуйста, прочитайте внимательно каждое утверждение и решите, чувствуете ли вы себя таким образом на вашей работе.',
    condition: 'Варианты ответов: от 0 – никогда до 6 – ежедневно',
    images: [imagefoot, image600]
}

interface Props {
    userData: IUserData | null
}

interface IAnswer {
    value: number,
    label: number
}

const Diagnostic1 = ({ userData }: Props) => {

    const [result, setResult] = useState<IDiagnResult[] | null>(null)
    const [answers, setAnswers] = useState<number[]>([])

    const onChange = (index: number, answer: IAnswer) => {
        let tempAnswers = answers
        tempAnswers[index] = answer.value
        setAnswers(tempAnswers)
    }

    const onComplete = () => {
        if (answers.length == data.length && !answers.some((el) => el == undefined)) {
            setResult([])
        }
    }
    useEffect(() => {
        if (userData) {
            fetch("/getResults", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ login: userData.login, password: userData.password })
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (!data.error) {
                        setResult(data.result)
                    }
                });
        }

    }, [])

    if (result) return (
        <Diagn1Results userData={userData} result={result} />
    )
    else return (
        <DiagBody>
            <DiagnHeader {...mockdata} />
            <DiagnBlock>
                {data.map((value, index) => {
                    return (
                        <Quest text={value.text} options={value.options} index={index} onChange={(answer) => { onChange(index, answer) }} />
                    )
                })}
            </DiagnBlock>
            <Button onClick={() => onComplete()}>Завершить</Button>
        </DiagBody>
    );
}

export default Diagnostic1;
