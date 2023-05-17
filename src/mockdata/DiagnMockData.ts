import { IDiagnData } from "codebase/store/adminStore";

export const data: IDiagnData = {
    id: 2,
    title: 'aDSA',
    image: 'ADS',
    description: 'ASGFASD',
    answersDescription: 'AHISGHDUI',
    published: true,
    options: [],
    questions: [{
        id: 1,
        tempid: 12,
        text: 'aDSLJASLKD',
        diagnosticID: 2,
        answers: [{
            text: '',
            value: 6,
            questionID: 1
        }],
        type: 'numbersList'
    }]
}