import QuestImg from 'components/defaultComponents/QuestImg';
import { data } from 'mockdata/mocktest2';
import { Button, DiagBody, DiagnBlock } from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from './DiagnHeader';

const mockdata = {
    title: 'Копинг–поведение в стрессовых ситуациях',
    regulations: 'Перед вами будут появляться изображения с возможными реакциями человека на различные трудные, огорчающие или стрессовые ситуации.',
    condition: 'Выберите одну реакцию из двух, которая в большей степени отображает Ваше поведение в трудной стрессовой ситуации нажатием на изображение.'
}

const Diagnostic2 = () => {
    return (
        <DiagBody>
            <DiagnHeader title={mockdata.title} regulations={mockdata.regulations} condition={mockdata.condition}/>
            <DiagnBlock>
                {data.map((value, index) => {
                    return (
                        <QuestImg text={value.text} options={value.options} index={index} />
                    )
                })}
            </DiagnBlock>
            <Button>Завершить</Button>
        </DiagBody>
    );
}

export default Diagnostic2;
