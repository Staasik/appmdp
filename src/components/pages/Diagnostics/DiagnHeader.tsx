import { DiagnBlockImg, DiagnAllBlockText, DiagnTextBlack, DiagnTextBlackTitle, DiagnTextBlackBold, DiagnTextProf } from 'styles/pages/Diagnostics/DiagnHeader';

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
                {index == 2 && <DiagnTextBlackTitle>Что такое?</DiagnTextBlackTitle>}
                {index == 2 && <DiagnTextBlack>Данный опросник включает в себя перечень заданных реакций на стрессовые ситуации и нацелен на определение доминирующих копинг- стрессовых поведенческих стратегий.</DiagnTextBlack>}
                {index == 2 ? <DiagnTextBlack style={{marginBottom: '20px'}}>{regulations}</DiagnTextBlack>: <DiagnTextBlack>{regulations}</DiagnTextBlack>}
                <DiagnTextBlackBold>{condition}</DiagnTextBlackBold>
            </DiagnAllBlockText>
        </DiagnBlockImg>
    )
}

export default DiagnHeader