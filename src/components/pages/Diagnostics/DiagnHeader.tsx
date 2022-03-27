import { DiagnBlockImg, DiagnAllBlockText, DiagnTextBlack, DiagnTextBlackBold, DiagnTextProf } from 'styles/pages/Diagnostics/DiagnHeader';

interface Props {
    title: string,
    regulations: string,
    condition: string,
}



export const DiagnHeader = ({ title, regulations, condition }: Props) => {
    return (
        <DiagnBlockImg>
            <DiagnAllBlockText>
                <DiagnTextProf>{title}</DiagnTextProf>
                <DiagnTextBlack>{regulations}</DiagnTextBlack>
                <DiagnTextBlackBold>{condition}</DiagnTextBlackBold>
            </DiagnAllBlockText>
        </DiagnBlockImg>
    )
}

export default DiagnHeader