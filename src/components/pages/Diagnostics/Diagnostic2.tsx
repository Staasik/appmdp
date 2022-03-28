import QuestImg from 'components/defaultComponents/QuestImg';
import { data } from 'mockdata/mocktest2';
import { Button, DiagBody, DiagnBlock, BlockTwo } from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from './DiagnHeader';
import { IUserData } from 'App'
import imagefoot from "images/diagn2.png"; 
import image600 from "images/diagn2_600.png"; 

const mockdata = {
    title: 'Копинг–поведение в стрессовых ситуациях',
    regulations: 'Перед вами будут появляться изображения с возможными реакциями человека на различные трудные, огорчающие или стрессовые ситуации.',
    condition: 'Выберите одну реакцию из двух, которая в большей степени отображает Ваше поведение в трудной стрессовой ситуации нажатием на изображение.',
    images: [imagefoot,image600]
}

interface Props{
    userData: IUserData | null
}

const Diagnostic2 = ({ userData }: Props) => {
    return (
        <DiagBody>
            <DiagnHeader {...mockdata}/>
            <DiagnBlock>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => {
                    return (
                        <BlockTwo>
                            {data.slice(idx * 2, idx * 2 + 2).map((value, index) => {
                                return (
                                    <QuestImg text={value.text} options={value.options} index={index} />
                                )
                            })}
                        </BlockTwo>
                    )
                })}
            </DiagnBlock>
            <Button>Завершить</Button>
        </DiagBody>
    );
}

export default Diagnostic2;
