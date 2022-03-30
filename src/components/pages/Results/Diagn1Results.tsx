import { IUserData } from 'App';
import DiagnResultsHeader from 'components/pages/Results/DiagnResultsHeader';
import image from "images/Results/diag1result.png";
import imagedesk from "images/Results/diag1result_600.png";
import { ReactComponent as Ellipse } from 'images/Results/Ellipse.svg';
import { ReactComponent as Line } from 'images/Results/Line.svg';
import { useMediaQuery } from "react-responsive";
import { DiagHtml, DiagnTextProf } from 'styles/pages/Diagnostics/DiagnHeader';
import { DiagnTextBlack, DiagnTextBlackBold, Result, ResultItem, ResultLine, ResultsBlock, ResultStaticItem } from 'styles/pages/Results/Diagn1Results';

export interface IDiagnResult{
    title: string,
    level: string
}
interface Props {
    userData: IUserData | null,
    result: IDiagnResult[]
}

const Diagn1Results = ({ userData, result }: Props) => {

    const HeaderProps = {
        userData: userData,
        title: 'Результат диагностики профессиональное выгорание',
        images: [image, imagedesk]
    }

    const isDesktop = useMediaQuery({
        query: "(min-width: 800px)"
    });
    return (
        <DiagHtml>
            <DiagnResultsHeader {...HeaderProps} />
            <ResultsBlock>
                <Result>
                    <DiagnTextBlackBold style={{ height: "50px" }}>Интегральный показатель выгорания:</DiagnTextBlackBold>
                    <DiagnTextProf style={{ color: "#5496FF" }}>6 балл(ов) - средняя степень</DiagnTextProf>
                    {isDesktop && <Line style={{ height: "50px", width: "80%" }} />}
                </Result>
                <ResultLine>
                    {!isDesktop && <Line style={{ height: "15px", width: "100%" }} />}
                    <ResultItem>
                        <DiagnTextBlack>Эмоциональное истощение</DiagnTextBlack>
                        <DiagnTextBlackBold>Высокий уровень</DiagnTextBlackBold>
                        {!isDesktop && <Line style={{ height: "15px", width: "100%" }} />}
                    </ResultItem>
                    <ResultItem>
                        <DiagnTextBlack>Редукция личных достижений</DiagnTextBlack>
                        <DiagnTextBlackBold>Низкий уровень</DiagnTextBlackBold>
                        {!isDesktop && <Line style={{ height: "15px", width: "100%" }} />}
                    </ResultItem>
                    <ResultItem>
                        <DiagnTextBlack>Деперсонализация</DiagnTextBlack>
                        <DiagnTextBlackBold>Средний уровень</DiagnTextBlackBold>
                        {!isDesktop && <Line style={{ height: "15px", width: "100%" }} />}
                    </ResultItem>
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
        </DiagHtml>
    );
}

export default Diagn1Results;
