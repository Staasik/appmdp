import { ReactComponent as Checkbox } from 'images/Results/CheckboxCheck.svg'
import { ReactComponent as Toogle } from 'images/Results/Toogle.svg'
import { ReactComponent as Up } from 'images/Results/TrendingUp.svg'
import { Context } from 'index'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { BlockContent, DiagnRecommendsBlock, DiagnRecommendsLinkBlock, DiagnRecommendsWrapper, ImageContainer, LinkBlockContent, LinkBlockHref, LinkBlockTitle } from 'styles/defaultComponents/DiagnRecommends'

export const DiagnRecommends = () => {

    const { store } = useContext(Context);
    const { isAuth } = store;

    return (
        <DiagnRecommendsWrapper>
            <DiagnRecommendsBlock>
                <BlockContent>
                    <ImageContainer><Up /></ImageContainer>
                    <div>Практически с любыми эмоциональным состоянием человек может справиться <b>самостоятельно</b></div>
                </BlockContent>
                <BlockContent>
                    <ImageContainer><Toogle /></ImageContainer>
                    <div>Держать состояние в тонусе можно с помощью регулярных <b>действий</b>, которые позволят повысить уровень саморегуляциию.</div>
                </BlockContent>
                <BlockContent>
                    <ImageContainer><Checkbox /></ImageContainer>
                    <div>Ознакомится с ними вы можете в разделе <a href={isAuth ? "/main/profile#checklists" : "/login"}>чек-листы</a></div>
                </BlockContent>
            </DiagnRecommendsBlock>
            <DiagnRecommendsLinkBlock>
                <LinkBlockTitle>Дать правильную оценку вашему состоянию поможет профессионал</LinkBlockTitle>
                <LinkBlockContent>При выборе подходящего психолога вам может помочь следующая информация.</LinkBlockContent>
                <LinkBlockHref href='https://www.b17.ru/' target="_blank">Узнать &ensp; &gt;</LinkBlockHref>
            </DiagnRecommendsLinkBlock>
        </DiagnRecommendsWrapper>
    )
}
export default observer(DiagnRecommends)