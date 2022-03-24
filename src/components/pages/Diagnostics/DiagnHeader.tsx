import { DiagnBlockImg, DiagnBlockText, DiagnTextBlack, DiagnTextBlackBold, DiagnTextProf } from 'styles/pages/Diagnostics/DiagnHeader';

interface Props {
    title: string,
    regulations: string,
    condition: string,
}

export const DiagnHeader = ({ title, regulations, condition }: Props) => {
    return (
        <DiagnBlockImg>
            <DiagnBlockText>
                <DiagnTextProf>{title}</DiagnTextProf>
                <DiagnTextBlack>{regulations}</DiagnTextBlack>
                <DiagnTextBlackBold>{condition}</DiagnTextBlackBold>
            </DiagnBlockText>
        </DiagnBlockImg>
    )
}

export default DiagnHeader