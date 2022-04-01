import { IUserData } from 'App';
import DiagnResultsHeader from 'components/pages/Results/DiagnResultsHeader';
import image from "images/Results/diag3result_600.png";
import { ReactComponent as Line } from 'images/Results/Line.svg';
import { useMediaQuery } from "react-responsive";
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { Button, DiagnTextBlack, DiagnTextBlackBold, HomeTextBlock, ResultItem, ResultLine, ResultsBlock } from 'styles/pages/Results/Diagn3Results';
import { IDiagnResult } from 'components/pages/Results/Diagn1Results'
import ResultBlock3 from 'components/pages/Results/ResultBlock3'

interface Props {
    userData: IUserData | null,
    result: IDiagnResult[]
}

const Diagn3Results = ({ userData, result}: Props) => {

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
                    {result.slice(0,2).map((value, index) => <ResultBlock3 {...value} key={index}/>)}
                </ResultLine>
                <ResultLine>
                    {result.slice(2).map((value, index) => <ResultBlock3 {...value} key={index}/>)}
                </ResultLine>
            </ResultsBlock>
            <HomeTextBlock>
                <Button style={{ marginTop: "50px", alignSelf: "center" }}>Перейти в профиль</Button>
            </HomeTextBlock>
        </DiagHtml>
    );
}

export default Diagn3Results;
