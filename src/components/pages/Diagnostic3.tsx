import Quest from 'components/pages/Quest';
import { data } from 'mockdata/mocktest3';
import { Button, DiagBody, DiagnBlock, DiagnBlockImg, DiagnBlockText, DiagnTextBlack, DiagnTextBlackBold, DiagnTextProf } from 'styles/pages/Diagnostic3';

const Diagnostic3 = () => {
    return (
        <DiagBody>
            <DiagnBlockImg>
                <DiagnBlockText>
                    <DiagnTextProf>Оценка признаков эмоционального выгорания</DiagnTextProf>
                    <DiagnTextBlack>Вам предлагается по 5 утверждений из каждого блока: поведение, мышление, чувства и здоровье. Пожалуйста, прочитайте следующие утверждения и выберите тот вариант ответа, который наилучшим образом отражает Ваше мнение.</DiagnTextBlack>
                    <DiagnTextBlackBold>Варианты ответов: от 0 – никогда до 6 – ежедневно</DiagnTextBlackBold>
                </DiagnBlockText>
            </DiagnBlockImg>
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
