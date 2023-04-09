interface IEmotions {
    name: string;
    score: number;
}

export interface IDiaryMock {
    title: string;
    description: string;
    eventsEmotions: IEmotions[];
    diaryEmotions: IEmotions[];
    done: string;
    willDo: string;
}

const eventsEmotionsMock : IEmotions[] = [{name: "Весёлость", score:2},{name: "Радость", score:3},{name: "Любовь", score:7}]
const diaryEmotionsMock : IEmotions[] = [{name: "Весёлость", score:2},{name: "Гордость", score:5}]

const DiaryViewMock: IDiaryMock = {
    title: "Общение с учеником",
    description: "Сегодня произошла ситуация, когда...",
    eventsEmotions: eventsEmotionsMock,
    diaryEmotions: diaryEmotionsMock,
    done: "Я сделал несколько полезых вещей:",
    willDo: "Завтра я выполню то, что сделает мою семью более счастливой"
}

export default DiaryViewMock;