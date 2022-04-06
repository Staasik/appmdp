import { DiagFooter, DiagFooterItems, DiagnText, DiagnLink,DiagnTextBlack, FooterItems, FooterItemsKGU, DiagnLinkId } from 'styles/pages/Diagnostics';
import { IUserData } from 'App'
import { useLocation } from 'react-router-dom'

interface Props{
    userData: IUserData | null
}

export const Footer = ({ userData }: Props) => {

    let location = useLocation();

    return (
        <DiagFooter $margin={!location.pathname.includes('home')}>
            <DiagFooterItems>
                <FooterItems>
                    <DiagnLink to="/main/home"><DiagnTextBlack>Главная</DiagnTextBlack></DiagnLink>
                    <DiagnLink to="/main/diagnostics"><DiagnTextBlack>Диагностика</DiagnTextBlack></DiagnLink>
                    <DiagnLink to="/main/recommend"><DiagnTextBlack>Рекомендации</DiagnTextBlack></DiagnLink>
                </FooterItems>
                <FooterItems>
                {userData && <DiagnLinkId href="/main/profile#checklists"><DiagnTextBlack>Чек-листы</DiagnTextBlack></DiagnLinkId>}
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
export default Footer