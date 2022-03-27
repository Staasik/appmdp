import Quest from 'components/defaultComponents/Quest';
import { data } from 'mockdata/mocktest3';
import { Button, DiagBody, DiagnBlock } from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from './DiagnHeader';

const mockdata = {
    title: 'Оценка признаков эмоционального выгорания',
    regulations: 'Вам предлагается по 5 утверждений из каждого блока: поведение, мышление, чувства и здоровье. Пожалуйста, прочитайте следующие утверждения и выберите тот вариант ответа, который наилучшим образом отражает Ваше мнение.',
    condition: 'Варианты ответов: от 0 – никогда до 6 – ежедневно'
}

const Diagnostic3 = () => {
    return (
        <DiagBody>
            <DiagnHeader title={mockdata.title} regulations={mockdata.regulations} condition={mockdata.condition}/>
            <DiagnBlock>
                {data.map((value, index) => {
                    return (
                        <Quest text={value.text} options={value.options} index={index} />
                    )
                })}
            </DiagnBlock>
            <Button>Завершить</Button>
        </DiagBody>
    );
}

export default Diagnostic3;
