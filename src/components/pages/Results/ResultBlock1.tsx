
import { ReactComponent as Line } from 'images/Results/Line.svg';
import { observer } from 'mobx-react-lite';
import { useMediaQuery } from "react-responsive";
import { DiagnTextBlack, DiagnTextBlackBold, ResultItem } from 'styles/pages/Results/Diagn1Results';

interface Props {
    title: string,
    level: string
}

export const ResultBlock1 = ({ title, level }: Props) => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 800px)"
    });

    return (
        <ResultItem>
            <DiagnTextBlack>{title}</DiagnTextBlack>
            <DiagnTextBlackBold>{level}</DiagnTextBlackBold>
            {!isDesktop && <Line style={{ height: "15px", width: "100%" }} />}
        </ResultItem>
    )
}
export default observer(ResultBlock1)