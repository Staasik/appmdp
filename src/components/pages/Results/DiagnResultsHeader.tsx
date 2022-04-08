import { IUserData } from 'App';
import { Button, ButtonBlock, DiagnTextProfCenter, ErrorBlock, HomeTextBlock, ImgBlock, TextBlock } from 'styles/pages/Results/Diagn1Results';
import { ReactComponent as ErrorReg } from 'images/Results/ErrorReg.svg';

interface Props {
    userData: IUserData | null,
    title: string,
    images: string[]
}

export const DiagnResultsHeader = ({ userData, title, images }: Props) => {
    return (
        <HomeTextBlock>
            <TextBlock>
                <DiagnTextProfCenter>{title}</DiagnTextProfCenter>
                <ButtonBlock>
                    {!userData && <>
                        <ErrorBlock><ErrorReg /></ErrorBlock>
                        <Button href="/reg">Зарегистрироваться</Button>
                    </>}
                </ButtonBlock>
            </TextBlock>
            <ImgBlock images={images}/>
        </HomeTextBlock>
    )
}
export default DiagnResultsHeader