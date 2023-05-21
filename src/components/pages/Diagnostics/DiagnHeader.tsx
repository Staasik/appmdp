import { DiagnAllBlockText, DiagnBlockImg, DiagnTextBlack, DiagnTextBlackBold, DiagnTextBlackTitle, DiagnTextProf } from 'styles/pages/Diagnostics/DiagnHeader';

interface Props {
    title: string,
    regulations: string,
    condition: string,
    images: string[],
    index: number
}

export const DiagnHeader = ({ title, regulations, condition, images, index }: Props) => {
    return (
        <DiagnBlockImg images={images} index={index}>
            <DiagnAllBlockText>
                <DiagnTextProf>{title}</DiagnTextProf>
                <DiagnTextBlack>{regulations}</DiagnTextBlack>
                <DiagnTextBlackBold>{condition}</DiagnTextBlackBold>
            </DiagnAllBlockText>
        </DiagnBlockImg>
    )
}

export default DiagnHeader