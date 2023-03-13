import DiagnRecommends from 'components/defaultComponents/DiagnRecommends';
import { IDiagnResult } from 'components/pages/Results/Diagn1Results';
import DiagnResultsHeader from 'components/pages/Results/DiagnResultsHeader';
import ResultBlock3 from 'components/pages/Results/ResultBlock3';
import image from "images/Results/diag3result_600.png";
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { Button, DiscContent, Discription, DiscriptionContainer, DiscriptionContainerTitle, DiscTitle, HomeTextBlock, RecommendWrapper, ResultLine, ResultsBlock } from 'styles/pages/Results/Diagn3Results';

interface Props {
    result: IDiagnResult[]
}

const Diagn3Results = ({ result }: Props) => {

    const HeaderProps = {
        title: 'Результат оценки признаков эмоционального выгорания',
        images: [image, image]
    }

    return (
        <DiagHtml>
            <DiagnResultsHeader {...HeaderProps} />
            <ResultsBlock>
                <ResultLine>
                    {result.slice(0, 2).map((value, index) => <ResultBlock3 {...value} key={index} />)}
                </ResultLine>
                <ResultLine>
                    {result.slice(2).map((value, index) => <ResultBlock3 {...value} key={index} />)}
                </ResultLine>
            </ResultsBlock>
            <Discription>
                <DiscTitle>Описание результата:</DiscTitle>
                <DiscriptionContainer>
                    <DiscriptionContainerTitle>При высоком уровне изменений</DiscriptionContainerTitle>
                    <DiscContent>Высокий уровень изменения в любой из сфер говорит о наличии признаков эмоционального выгорания по данному блоку и об общем снижении эффективности деятельности и падении общего энергетического тонуса. Игнорирование данных изменений может привести к полному падению интереса к профессиональной деятельности.</DiscContent>
                </DiscriptionContainer>
                <DiscriptionContainer>
                    <DiscriptionContainerTitle>При среднем уровне изменений</DiscriptionContainerTitle>
                    <DiscContent>При среднем уровне изменений человек пытается снизить давление внешних обстоятельств. Он может справляться с возникающими стрессами и переживаниями, но при этом происходящие изменения в любом из блоков могут стать «запускающим» механизмом в формировании эмоционального выгорания.</DiscContent>
                </DiscriptionContainer>
                <DiscriptionContainer>
                    <DiscriptionContainerTitle>При низком уровне изменений </DiscriptionContainerTitle>
                    <DiscContent>Низкий уровень изменений позволяет говорить об адаптивном состоянии человека. Работник может проявлять повышенную активность при ощущении важности и значимости своего труда.</DiscContent>
                </DiscriptionContainer>
            </Discription>
            <RecommendWrapper>
                <DiagnRecommends></DiagnRecommends>
            </RecommendWrapper>
            <HomeTextBlock>
                <Button href="/main/profile" style={{ marginTop: "50px", alignSelf: "center" }}>Перейти в профиль</Button>
            </HomeTextBlock>
        </DiagHtml>
    );
}

export default Diagn3Results
