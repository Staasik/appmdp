import { IDiagnData } from "codebase/store/adminStore";

export const data: IDiagnData = {
    id: 2,
    title: 'Шкала удовлетворённости жизнью ',
    image: require('images/diag1.png'),
    description: 'На каждое утверждение просим Вас дать свою оценку в баллах по предложенной схеме',
    answersDescription: '1 — полностью не согласен, 2 — не согласен, 3 — немного не согласен, 4 — ни то, ни другое (ни согласен, ни не согласен), 5 — немного согласен, 6 — согласен, 7 — полностью согласен',
    published: true,
    options: [],
    questions: [{
        id: 1,
        tempid: 12,
        text: '1.	Почти во всем моя жизнь соответствует моему идеалу',
        diagnosticID: 2,
        answers: [{
            text: '',
            value: 7,
            questionID: 1
        }],
        type: 'numbersList'
    },
    {
        id: 2,
        tempid: 12,
        text: '2.	Условия моей жизни превосходные',
        diagnosticID: 2,
        answers: [{
            text: '',
            value: 7,
            questionID: 1
        }],
        type: 'numbersList'
    },
    {
        id: 3,
        tempid: 12,
        text: '3.	Я удовлетворен своей жизнью',
        diagnosticID: 2,
        answers: [{
            text: '',
            value: 7,
            questionID: 1
        }],
        type: 'numbersList'
    },
    {
        id: 4,
        tempid: 12,
        text: '4.	Пока я достигал в главном всего, чего хотел в жизни',
        diagnosticID: 2,
        answers: [{
            text: '',
            value: 7,
            questionID: 1
        }],
        type: 'numbersList'
    },
    {
        id: 5,
        tempid: 12,
        text: '5.	Если бы я мог прожить свою жизнь еще раз, я бы почти ничего в ней не изменил',
        diagnosticID: 2,
        answers: [{
            text: '',
            value: 7,
            questionID: 1
        }],
        type: 'numbersList'
    }]
}
interface IData {
    d : IDiagnData
}
export const data1 : IData[] = [{d:data},{d:data},{d:data}]
export default data