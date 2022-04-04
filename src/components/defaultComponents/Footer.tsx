import { DiagFooter, DiagFooterItems, DiagnText, DiagnLink,DiagnTextBlack, FooterItems, FooterItemsKGU } from 'styles/pages/Diagnostics';


export const Footer = () => {
    return (
        <DiagFooter>
            <DiagFooterItems>
                <FooterItems>
                    <DiagnLink to="/main/home"><DiagnTextBlack>Главная</DiagnTextBlack></DiagnLink>
                    <DiagnLink to="/main/diagnostics"><DiagnTextBlack>Диагностика</DiagnTextBlack></DiagnLink>
                    <DiagnTextBlack>Новости</DiagnTextBlack>
                    <DiagnLink to="/main/recommend"><DiagnTextBlack>Рекомендации</DiagnTextBlack></DiagnLink>
                </FooterItems>
                <FooterItems>
                    <DiagnTextBlack>Чек-листы</DiagnTextBlack>
                    <DiagnTextBlack>Фильмы</DiagnTextBlack>
                    <DiagnTextBlack>Книги</DiagnTextBlack>
                </FooterItems>
            </DiagFooterItems>
            <FooterItemsKGU>
                <DiagnText>© 2022 Команда Костромского Государственного Университета. Все права защищены.</DiagnText>
            </FooterItemsKGU>
        </DiagFooter>
    )
}
export default Footer