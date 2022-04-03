import { IUserData } from 'App';
import { AnswersIntoResultDiagn1, AnswersIntoResultDiagn2, AnswersIntoResultDiagn3 } from 'codebase/DiagnResults';
import Diagn1Results from 'components/pages/Results/Diagn1Results';
import Diagn2Results from 'components/pages/Results/Diagn2Results';
import Diagn3Results from 'components/pages/Results/Diagn3Results';
import { useEffect, useState } from 'react';

interface Props {
    userData: IUserData | null
    diagnnumber: number
}
export const UserResults = ({ userData, diagnnumber }: Props) => {

    const [answers, setAnswers] = useState<number[] | null>(null)

    useEffect(() => {
        if (userData) {
            fetch("/getResults", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ login: userData.login, password: userData.password, diagnnumber: diagnnumber })
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    setAnswers(data.data[0].answers as number[])
                });
        }
    }, [userData])

    if (answers) {
        switch (diagnnumber) {
            case 1:
                return <Diagn1Results userData={userData} result={AnswersIntoResultDiagn1(answers)} />
            case 2:
                return <Diagn2Results userData={userData} result={AnswersIntoResultDiagn2(answers)} />
            case 3:
                return <Diagn3Results userData={userData} result={AnswersIntoResultDiagn3(answers)} />
            default:
                return null
        }
    }
    else { return null }
}
export default UserResults