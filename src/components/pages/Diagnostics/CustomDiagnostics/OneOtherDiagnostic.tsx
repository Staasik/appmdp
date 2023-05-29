import { IDiagnData } from 'codebase/store/adminStore';
import Quest from 'components/defaultComponents/Quest';
import { Context } from 'index';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, DiagBody, DiagnBlock, ResultBlock, ResultText } from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from '../DiagnHeader';

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
    const { user: userData, isAuth } = store
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
                store.getDiagnosticResult(+id, answers).then((value) => {
                    value && setResult(value.description)
                })
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
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
        id ? store.getDiagnosticData(+id).then((value) => {
            value && setData(value)
        }).catch(() => {
            window.location.href = '../custom'
        })
            : window.location.href = '../custom'
    }, [])


    if (data) return (
        <DiagBody>
            <DiagnHeader title={data.title} regulations={data.description} condition={data.answersDescription} images={[require("images/Admin/newDiagnDesk.png"),require("images/Admin/newDiagnMob.png")]} index={1} />
            {result && <ResultBlock>
                <ResultText>Ваш результат:</ResultText>
                <ResultText>{result}</ResultText>
            </ResultBlock>}
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
