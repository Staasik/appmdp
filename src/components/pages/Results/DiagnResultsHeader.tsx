import { ReactComponent as ErrorReg } from 'images/Results/ErrorReg.svg';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Button, ButtonBlock, DiagnTextProfCenter, ErrorBlock, HomeTextBlock, ImgBlock, TextBlock } from 'styles/pages/Results/Diagn1Results';
interface Props {
    title: string,
    images: string[]
}

export const DiagnResultsHeader = ({ title, images }: Props) => {

    const { store } = useContext(Context)
    const { isAuth } = store


    return (
        <HomeTextBlock>
            <TextBlock>
                <DiagnTextProfCenter>{title}</DiagnTextProfCenter>
                <ButtonBlock>
                    {!isAuth && <>
                        <ErrorBlock><ErrorReg /></ErrorBlock>
                        <Button href="/reg">Зарегистрироваться</Button>
                    </>}
                </ButtonBlock>
            </TextBlock>
            <ImgBlock images={images}/>
        </HomeTextBlock>
    )
}
export default observer(DiagnResultsHeader)