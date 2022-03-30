import { IUserData } from 'App';
import DiagnResultsHeader from 'components/pages/Results/DiagnResultsHeader';
import image from "images/Results/diag3result_600.png";
import { ReactComponent as Line } from 'images/Results/Line.svg';
import { useMediaQuery } from "react-responsive";
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { Button, DiagnTextBlack, DiagnTextBlackBold, HomeTextBlock, ResultItem, ResultLine, ResultsBlock } from 'styles/pages/Results/Diagn3Results';

interface Props {
    userData: IUserData | null
}

const Diagn3Results = ({ userData }: Props) => {

    const HeaderProps = {
        userData: userData,
        title: 'Результат оценки признаков эмоционального выгорания',
        images: [image, image]
    }

    const isDesktop = useMediaQuery({
        query: "(min-width: 800px)"
    });
    return (
        <DiagHtml>
            <DiagnResultsHeader {...HeaderProps} />
            <ResultsBlock>
                <ResultLine>
                    <ResultItem>
                        <DiagnTextBlack>1 блок: Поведение</DiagnTextBlack>
                        <DiagnTextBlackBold>6 балл(ов) - низкий уровень изменений</DiagnTextBlackBold>
                        {!isDesktop && <Line style={{ height: "15px", width: "100%", marginBottom: "15px" }} />}
                    </ResultItem>
                    <ResultItem>
                        <DiagnTextBlack>2 блок: Мышление</DiagnTextBlack>
                        <DiagnTextBlackBold>1 балл(ов) - низкий уровень изменений</DiagnTextBlackBold>
                        {!isDesktop && <Line style={{ height: "15px", width: "100%", marginBottom: "15px" }} />}
                    </ResultItem>
                </ResultLine>
                <ResultLine>
                    <ResultItem>
                        <DiagnTextBlack>3 блок: Чувства</DiagnTextBlack>
                        <DiagnTextBlackBold>11 балл(ов) - средний  уровень изменений</DiagnTextBlackBold>
                        {!isDesktop && <Line style={{ height: "15px", width: "100%", marginBottom: "15px" }} />}
                    </ResultItem>
                    <ResultItem>
                        <DiagnTextBlack>4 блок: Здоровье</DiagnTextBlack>
                        <DiagnTextBlackBold>28 балл(ов) - высокий уровень изменений</DiagnTextBlackBold>
                    </ResultItem>
                </ResultLine>
            </ResultsBlock>
            <HomeTextBlock>
                <Button style={{ marginTop: "50px", alignSelf: "center" }}>Перейти в профиль</Button>
            </HomeTextBlock>
        </DiagHtml>
    );
}

export default Diagn3Results;
