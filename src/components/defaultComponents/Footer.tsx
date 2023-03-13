import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DiagFooter, DiagFooterItems, DiagnLinkId, DiagnText, DiagnTextBlack, FooterItems, FooterItemsKGU } from 'styles/pages/Diagnostics';

export const Footer = () => {

    const { store } = useContext(Context)
    const { isAuth } = store

    let location = useLocation();

    return (
        <DiagFooter $margin={!location.pathname.includes('home')}>
            <DiagFooterItems>
                <FooterItems>
                    <DiagnLinkId href="/main/home"><DiagnTextBlack>Главная</DiagnTextBlack></DiagnLinkId>
                    <DiagnLinkId href="/main/diagnostics"><DiagnTextBlack>Диагностика</DiagnTextBlack></DiagnLinkId>
                    <DiagnLinkId href="/main/recommend"><DiagnTextBlack>Рекомендации</DiagnTextBlack></DiagnLinkId>
                </FooterItems>
                <FooterItems>
                {isAuth && <DiagnLinkId href="/main/profile#checklists"><DiagnTextBlack>Чек-листы</DiagnTextBlack></DiagnLinkId>}
                <DiagnLinkId href="/main/recommend#films"><DiagnTextBlack>Фильмы</DiagnTextBlack></DiagnLinkId>
                <DiagnLinkId href="/main/recommend#books"><DiagnTextBlack>Книги</DiagnTextBlack></DiagnLinkId>
                </FooterItems>
            </DiagFooterItems>
            <FooterItemsKGU>
                <DiagnText>© 2022 Команда Костромского Государственного Университета. Все права защищены.</DiagnText>
            </FooterItemsKGU>
        </DiagFooter>
    )
}
export default observer(Footer)