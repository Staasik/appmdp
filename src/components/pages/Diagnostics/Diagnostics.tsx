import { ReactComponent as PSIcon } from 'images/PSIcon.svg';
import { ReactComponent as Start } from 'images/start.svg';
import { Context } from 'index';
import diagnMock, { IdiagnMock } from 'mockdata/diagnBlocksMock';
import { useContext, useState } from 'react';
import { DiagnAllBlock, DiagnBlockText, DiagnImage, DiagnImg, DiagnLink, DiagnRecBlock, DiagnRecBlockWrapper, DiagnRecButton, DiagnRecButtons, DiagnRecContent, DiagnRecPS, DiagnRecTitle, DiagnText, DiagnTextBlack, DiagnTextDiagn, DiagnTextProfD } from 'styles/pages/Diagnostics/DiagnHeader';
import { DiagBody, DiagnBlockImg, ButtonTest } from 'styles/pages/Diagnostics/Diagnostic';

const RecButtonsMock = [
    {
        value: 'Степень профессионального выгорания',
        link: "diagnostics/diagnostic1"
    },
    {
        value: 'Стратегии поведения в стрессовых ситуациях',
        link: "diagnostics/diagnostic2"
    },
    {
        value: 'Актуальное психическое состояние',
        link: "diagnostics/diagnostic3"
    },
]



const Diagnostics = () => {

    const { store } = useContext(Context)
    const { isAuth } = store
    const [blocks, setBlocks] = useState<IdiagnMock[]>(diagnMock)

    return (
        <DiagBody>
            <DiagnImg>
                <DiagnTextDiagn>Диагностика</DiagnTextDiagn>
                <DiagnRecBlockWrapper>
                    <DiagnRecBlock>
                        <DiagnRecTitle>Мы понимаем важность вашего времени, поэтому можем перенаправить вас сразу в подходящую диагностику.</DiagnRecTitle>
                        <DiagnRecContent>Просто выберите из предложенных вариантов то, что интересует вас больше всего:</DiagnRecContent>
                        <DiagnRecButtons>
                            {
                                RecButtonsMock.map((data, index) => <DiagnRecButton href={data.link} key={index}>{data.value}</DiagnRecButton>)
                            }
                        </DiagnRecButtons>
                        <DiagnRecPS><PSIcon/>К остальным диагностикам вы сможете вернуться в любое время</DiagnRecPS>
                    </DiagnRecBlock>
                </DiagnRecBlockWrapper>
                {
                    blocks.map((value, index) =>
                        <DiagnAllBlock key={index}>
                            <DiagnBlockImg>
                                <DiagnText>{value.averageTime}</DiagnText>
                                <DiagnImage src={value.image} />
                            </DiagnBlockImg>
                            <DiagnBlockText>
                                <DiagnTextProfD>{value.name}</DiagnTextProfD>
                                <DiagnTextBlack>{value.description}</DiagnTextBlack>
                                <DiagnLink href={"diagnostics/diagnostic" + (index + 1)}><Start /></DiagnLink>
                            </DiagnBlockText>
                        </DiagnAllBlock>
                    )
                }
                {isAuth && <ButtonTest href="adminactivediagnostics">Пройти еще тесты</ButtonTest>}
            </DiagnImg>
        </DiagBody>
    );
}

export default Diagnostics
