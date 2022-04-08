export interface IdiagnItemMock {
    image: string,
    title: string,
    name: string,
}

export const diagnItemMock: IdiagnItemMock[] = [
    {
        image: require('images/UserProfile/book.png'),
        title: 'Диагностика 1.',
        name: 'Профессиональное выгорание'
    },
    {
        image: require('images/UserProfile/lamp.png'),
        title: 'Диагностика 2.',
        name: 'Копинг–поведение в стрессовых ситуациях'
    },
    {
        image: require('images/UserProfile/lightning.png'),
        title: 'Диагностика 3.',
        name: 'Оценка признаков эмоционального выгорания'
    }

]
export default diagnItemMock