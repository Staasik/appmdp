import QuestImg from 'components/pages/QuestImg';
import { data } from 'mockdata/mocktest2';
import { Button, DiagBody, DiagnBlock, DiagnBlockImg, DiagnBlockText, DiagnTextBlack, DiagnTextBlackBold, DiagnTextProf } from 'styles/pages/Diagnostic2';

const Diagnostic2 = () => {
    return (
        <DiagBody>
            <DiagnBlockImg>
                <DiagnBlockText>
                    <DiagnTextProf>Копинг–поведение в стрессовых ситуациях</DiagnTextProf>
                    <DiagnTextBlack>Перед вами будут появляться изображения с возможными реакциями человека на различные трудные, огорчающие или стрессовые ситуации. </DiagnTextBlack>
                    <DiagnTextBlackBold>Выберите одну реакцию из двух, которая в большей степени отображает Ваше поведение в трудной стрессовой ситуации нажатием на изображение.</DiagnTextBlackBold>
                </DiagnBlockText>
            </DiagnBlockImg>
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
