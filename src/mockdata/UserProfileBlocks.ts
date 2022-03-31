import { ICheck } from 'mockdata/UserProfileCheck';
import {data1,data2,data4,data3} from 'mockdata/UserProfileCheck';

export interface IblockItemMock {
    image: string,
    title: string,
    description: string,
    checklist:ICheck[],
}

export const blockItemMock: IblockItemMock[] = [
    
    {
        image: require('images/UserProfile/Dislike.png'),
        title: 'Блок чувства',
        description: 'Задания по развитию эмоционального интеллекта',
        checklist:data1,},
        
    {
        image: require('images/UserProfile/ChatBubbles.png'),
        title: 'Блок поведение',
        description: 'Задания по восстановлению ресурсов',
        checklist:data2,
    },
    {
        image: require('images/UserProfile/Heart.png'),
        title: 'Блок здоровье' ,
        description: 'Задания на использование дыхательных техник, медитации',
        checklist:data3,
    },
    {
        image: require('images/UserProfile/Lightbulb.png'),
        title: 'Блок мышление',
        description: 'Задания и приемы для повышения продуктивности памяти, мышления, внимание',
        checklist:data4,
        }
]
export default blockItemMock