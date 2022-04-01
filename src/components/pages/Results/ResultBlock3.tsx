import DiagnResultsHeader from 'components/pages/Results/DiagnResultsHeader';
import image from "images/Results/diag3result_600.png";
import { ReactComponent as Line } from 'images/Results/Line.svg';
import { useMediaQuery } from "react-responsive";
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { Button, DiagnTextBlack, DiagnTextBlackBold, HomeTextBlock, ResultItem, ResultLine, ResultsBlock } from 'styles/pages/Results/Diagn3Results';
import { IDiagnResult } from 'components/pages/Results/Diagn1Results'

interface Props {
    title: string,
    level: string
}

export const ResultBlock3 = ({ title, level } : Props) => {

    const isDesktop = useMediaQuery({
        query: "(min-width: 800px)"
    });

    return (
        <ResultItem>
            <DiagnTextBlack>{title}</DiagnTextBlack>
            <DiagnTextBlackBold>{level}</DiagnTextBlackBold>
            {!isDesktop && <Line style={{ height: "15px", width: "100%", marginBottom: "15px" }} />}
        </ResultItem>
    )
}
export default ResultBlock3