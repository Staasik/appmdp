export interface IOptions {
    value: number,
    label: string,
} 

export const targets : IOptions[] = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 6, label: '7' },
    { value: 6, label: '8' },
    { value: 6, label: '9' },
    { value: 6, label: '10' },
  ];
  export const targetsText : IOptions[] = [
    { value: 0, label: 'Заинтересованность' },
    { value: 1, label: 'Веселость' },
    { value: 2, label: 'Удовольствие' },
    { value: 3, label: 'Сожаление' },
    { value: 4, label: 'Гордость' },
    { value: 5, label: 'Удовлетворённость' },
    { value: 6, label: 'Стыд' },
    { value: 7, label: 'Радость' },
    { value: 8, label: 'Восхищение' },
    { value: 9, label: 'Разочарование' },
    { value: 10, label: 'Любовь' },
    { value: 11, label: 'Страх' },
    { value: 12, label: 'Облегчение' },
    { value: 13, label: 'Отвращение' },
    { value: 14, label: 'Сострадание' },
    { value: 15, label: 'Презрение' },
    { value: 16, label: 'Грусть' },
    { value: 17, label: 'Ненависть' },
    { value: 18, label: 'Вина' },
    { value: 19, label: 'Гнев' }
  ];
  
interface ITest {
    text:IOptions[],
    options:IOptions[],
}

export const data : ITest[] = [
    {
        text:targetsText,
        options: targets,
    },{
        text:targetsText,
        options: targets,
    },    {
        text:targetsText,
        options: targets,
    }
]
export default data;