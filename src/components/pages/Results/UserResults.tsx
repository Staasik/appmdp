import { MAIN_IP } from 'App';
import { AnswersIntoResultDiagn1, AnswersIntoResultDiagn2, AnswersIntoResultDiagn3 } from 'codebase/DiagnResults';
import Diagn1Results from 'components/pages/Results/Diagn1Results';
import Diagn2Results from 'components/pages/Results/Diagn2Results';
import Diagn3Results from 'components/pages/Results/Diagn3Results';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';

interface Props {
    diagnnumber: number
}
export const UserResults = ({ diagnnumber }: Props) => {

    const [answers, setAnswers] = useState<number[] | null>(null)

    const { store } = useContext(Context)
    const { user : userData, isAuth } = store

    useEffect(() => {
        if (isAuth) {
            fetch(process.env.NODE_ENV == 'development' ? "/getResults" : `http://${MAIN_IP}:5000/getResults`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ login: userData.login, diagnnumber: diagnnumber })
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data.data.length != 0) {
                        let arr = data.data[0].answers.replace(' ', '').trim().split(',').map((str: string) => {
                            return Number(str);
                        });
                        setAnswers([...arr])
                    }
                    else window.location.href = `/main/diagnostics/diagnostic${diagnnumber}`
                });
        }
    }, [userData])

    if (answers) {
        switch (diagnnumber) {
            case 1:
                return <Diagn1Results result={AnswersIntoResultDiagn1(answers)} />
            case 2:
                return <Diagn2Results result={AnswersIntoResultDiagn2(answers)} />
            case 3:
                return <Diagn3Results result={AnswersIntoResultDiagn3(answers)} />
            default:
                return null
        }
    }
    else { return null }
}
export default observer(UserResults)