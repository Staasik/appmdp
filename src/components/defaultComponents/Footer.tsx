import { DiagFooter, DiagFooterItems, DiagnText, DiagnTextBlack, FooterItems, FooterItemsKGU } from 'styles/pages/Diagnostics';

export const Footer = () => {
    return (
        <DiagFooter>
            <DiagFooterItems>
                <FooterItems>
                    <DiagnTextBlack>Главная</DiagnTextBlack>
                    <DiagnTextBlack>Диагностика</DiagnTextBlack>
                    <DiagnTextBlack>Новости</DiagnTextBlack>
                    <DiagnTextBlack>Рекомендации</DiagnTextBlack>
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