export interface IdiagnItemMock {
    image: string,
    title: string,
}

export const diagnItemMock: IdiagnItemMock[] = [
    {
        image: require('images/UserProfile/book.png'),
        title: 'Диагностика 1. Профессиональное выгорание'
    },
    {
        image: require('images/UserProfile/lamp.png'),
        title: 'Диагностика 2. Копинг–поведение в стрессовых ситуациях' },
    {
        image: require('images/UserProfile/lightning.png'),
        title: 'Диагностика 3. Оценка признаков эмоционального выгорания'}
]
export default diagnItemMock