import DiagnRecommends from 'components/defaultComponents/DiagnRecommends';
import DiagnResultsHeader from 'components/pages/Results/DiagnResultsHeader';
import ResultBlock1 from 'components/pages/Results/ResultBlock1';
import image from "images/Results/diag1result.png";
import imagedesk from "images/Results/diag1result_600.png";
import { ReactComponent as Ellipse } from 'images/Results/Ellipse.svg';
import { ReactComponent as Line } from 'images/Results/Line.svg';
import { useMediaQuery } from "react-responsive";
import { DiagHtml, DiagnTextProf } from 'styles/pages/Diagnostics/DiagnHeader';
import { Button, DiagnTextBlack, DiagnTextBlackBold, DiscContent, Discription, DiscTitle, HomeTextBlock, RecommendWrapper, Result, ResultLine, ResultsBlock, ResultStaticItem } from 'styles/pages/Results/Diagn1Results';
import colors from 'utils/colors';
export interface IDiagnResult{
    title: string,
    level: string
}
interface Props {
    result: IDiagnResult[]
}

const Diagn1Results = ({ result }: Props) => {


    const HeaderProps = {
        title: 'Результат диагностики профессиональное выгорание',
        images: [image, imagedesk]
    }

    const isDesktop = useMediaQuery({
        query: "(min-width: 800px)"
    });
    return (
        <DiagHtml>
            <DiagnResultsHeader {...HeaderProps} />
            <Discription>
                <DiscTitle>Что под этим понимается?</DiscTitle>
                <DiscContent>— состояние эмоционального истощения, связанного с высокой эмоциональной нагрузкой, которую человек не в состоянии выдержать. Долгое профессиональное выгорание приводит к полному эмоциональному выгоранию.</DiscContent>
            </Discription>
            <Discription>
                <DiscTitle>Что включает в себя данный синдром?</DiscTitle>
                <DiscContent>— три составляющих: эмоциональную истощенность, деперсонализацию (цинизм) и редукцию профессиональных достижений.</DiscContent>
            </Discription>
            <ResultsBlock>
                <Result>
                    <DiagnTextBlackBold style={{ height: "50px" }}>{result[0].title}</DiagnTextBlackBold>
                    <DiagnTextProf style={{ color: colors.BLUE_LIGHT }}>{result[0].level}</DiagnTextProf>
                    {isDesktop && <Line style={{ height: "50px", width: "80%" }} />}
                </Result>
                <ResultLine>
                    {!isDesktop && <Line style={{ height: "15px", width: "100%" }} />}
                    {
                        result.slice(1).map((value) =>{
                            return <ResultBlock1 {...value}/>
                        })
                    }
                </ResultLine>
            </ResultsBlock>
            <ResultsBlock>
                <ResultLine>
                    <ResultStaticItem>
                        <Ellipse style={{ width: "20px", marginTop: "8px", marginRight: "10px" }} />
                        <DiagnTextBlack>Эмоциональное истощение проявляется в ощущениях эмоционального перенапряжения, усталости, исчерпанности эмоциональных ресурсов.</DiagnTextBlack>
                    </ResultStaticItem>
                    <ResultStaticItem>
                        <Ellipse style={{ width: "20px", marginTop: "8px", marginRight: "10px" }} />
                        <DiagnTextBlack>Деперсонализация представляет собой негативное, циничное, бездушное отношение к субъектам образовательного процесса.</DiagnTextBlack>
                    </ResultStaticItem>
                    <ResultStaticItem>
                        <Ellipse style={{ width: "20px", marginTop: "8px", marginRight: "10px" }} />
                        <DiagnTextBlack>Редукция персональных достижений проявляется в снижении чувства компетентности в своей работе, негативном самовосприятии в профессиональном плане.</DiagnTextBlack>
                    </ResultStaticItem>
                </ResultLine>
            </ResultsBlock>
            <RecommendWrapper>
                <DiagnRecommends></DiagnRecommends>
            </RecommendWrapper>
            <HomeTextBlock>
                <Button href="/main/profile" style={{ marginTop: "50px", alignSelf: "center" }}>Перейти в профиль</Button>
            </HomeTextBlock>
        </DiagHtml>
    );
}

export default Diagn1Results
