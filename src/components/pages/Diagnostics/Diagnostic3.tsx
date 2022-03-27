import Quest from 'components/defaultComponents/Quest';
import { Button, DiagBody, Diagn3Block, BlockFive, TextFive} from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from './DiagnHeader';
import { data, blockdata } from 'mockdata/mocktest3'
import QuestFive from 'components/defaultComponents/QuestFive'

const mockdata = {
    title: 'Оценка признаков эмоционального выгорания',
    regulations: 'Вам предлагается по 5 утверждений из каждого блока: поведение, мышление, чувства и здоровье. Пожалуйста, прочитайте следующие утверждения и выберите тот вариант ответа, который наилучшим образом отражает Ваше мнение.',
    condition: 'Варианты ответов: от 0 – никогда до 6 – ежедневно'
}

const Diagnostic3 = () => {
    return (
        <DiagBody>
            <DiagnHeader title={mockdata.title} regulations={mockdata.regulations} condition={mockdata.condition} />
            <Diagn3Block>
                {
                    blockdata.map((value, idx) => {
                        return (
                            <BlockFive>
                                <TextFive>{value.text}</TextFive>
                                {data.slice(idx * 5, idx * 5 + 5).map((value, index) => {
                                    return (
                                        <QuestFive text={value.text} options={value.options} index={index} />
                                    )
                                })}
                            </BlockFive>
                        )
                    })
                }
            </Diagn3Block>
            <Button>Завершить</Button>
        </DiagBody>
    );
}

export default Diagnostic3;
