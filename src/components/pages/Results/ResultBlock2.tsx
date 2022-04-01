import { DiagnTextBlack, DiagnTextBlackBold, DiagnTextProf, ResultItem } from 'styles/pages/Results/Diagn2Results';

interface Props {
    title: string,
    level: string,
    discription: string
}
export const ResultBlock2 = ({ title, level, discription }: Props) => {
    return (
        <ResultItem>
            <DiagnTextBlackBold>{title}</DiagnTextBlackBold>
            <DiagnTextProf style={{ color: "#FF9254" }}>{level}</DiagnTextProf>
            <DiagnTextBlack>{discription}</DiagnTextBlack>
        </ResultItem>
    )
}
export default ResultBlock2