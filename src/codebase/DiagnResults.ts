export interface IDiagnResult{
    title: string,
    level: string
}

const mockdataResult1 ={
    titles : ['Эмоциональное истощение','Деперсонализация','Редукция личных достижений'],
    levels: ['Низкий уровень','Средний уровень','Высокий уровень','Очень высокий уровень'],
    degrees: ['Низкая степень','Средняя степень','Высокая  степень', 'Крайне высокая степень']
}
export const AnswersIntoResultDiagn1 = (answers: number[]) => {
    let result = [0,0,0,0];
    let values:IDiagnResult[]  = [{title: '', level: ''},{title: '', level: ''},{title: '', level: ''},{title: '', level: ''}];
    [1,2,3,6,8,13,14,16,20].forEach(element => {
        result[1] += answers[element-1]
    });
    [5,10,11,15,22].forEach(element => {
        result[2] += answers[element-1]
    });
    [4,7,9,12,17,18,19,21].forEach(element => {
        result[3] += answers[element-1]
    });
    result[1] < 16 ? result[0] += 1 : result[1] < 25 ? result[0] += 2 : result[1] < 35 ? result[0] += 3 : result[0] += 5
    result[2] < 5 ? result[0] += 1 : result[2] < 13 ? result[0] += 2 : result[2] < 16 ? result[0] += 3 : result[0] += 5
    result[3] < 22 ? result[0] += 5 : result[3] < 28 ? result[0] += 3 : result[3] < 36 ? result[0] += 2 : result[0] += 1
    values[0].level = `${result[0]} балл(ов) - `
    result[0] < 5 ? values[0].level += mockdataResult1.degrees[0] : result[0] < 7 ? values[0].level += mockdataResult1.degrees[1] : result[0] < 10 ? values[0].level += mockdataResult1.degrees[2] : values[0].level += mockdataResult1.degrees[3]
    values[0].title = 'Интегральный показатель выгорания:'
    values[1].title = mockdataResult1.titles[0]
    values[2].title = mockdataResult1.titles[1]
    values[3].title = mockdataResult1.titles[2]
    values[1].level = result[1] < 16 ? mockdataResult1.levels[0] : result[1] < 25 ? mockdataResult1.levels[1] : result[1] < 35 ? mockdataResult1.levels[2] : mockdataResult1.levels[3]
    values[2].level = result[2] < 5 ? mockdataResult1.levels[0] : result[2] < 13 ? mockdataResult1.levels[1] : result[2] < 16 ? mockdataResult1.levels[2] : mockdataResult1.levels[3]
    values[3].level = result[3] < 22 ? mockdataResult1.levels[3] : result[3] < 28 ?mockdataResult1.levels[2] : result[3] < 36 ? mockdataResult1.levels[1] : mockdataResult1.levels[0]
    return values
}

export const AnswersIntoResultDiagn2 = (answers: number[]) => {
    
}

export const AnswersIntoResultDiagn3 = (answers: number[]) => {
    
}