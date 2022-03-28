import { ReactComponent as Chat } from 'images/Chat_Conversation_Circle.svg';
import { ReactComponent as Prof } from 'images/UserCircle.svg';
import { useMediaQuery } from "react-responsive";
import { DiagHeader, DiagnCP, DiagnIcon, DiagnMenu, HeaderText, DiagnLink } from 'styles/pages/Diagnostics/DiagnHeader';
import { Menu } from "components/pages/Menu";
import Icon from 'images/icon.png';
import { useLocation } from 'react-router-dom'
export const Header = () => {
    const isDesktop = useMediaQuery({
        query: "(max-width: 600px)"
    });
    let location = useLocation();

    return (
        <>
            {isDesktop ?
                <DiagHeader>
                    < DiagnIcon >
                        <img src={Icon} style={{ "height": "30px", "width": "110px" }} />
                    </DiagnIcon >
                    <DiagnCP>
                        <Menu />
                    </DiagnCP>
                </DiagHeader >
                :
                <DiagHeader>
                    <DiagnIcon>
                        <img src={Icon} style={{ "height": "30px", "width": "110px" }} />
                    </DiagnIcon>
                    <DiagnMenu>
                        <DiagnLink to="/main/home"><HeaderText $active={location.pathname.includes('home')}>Главная</HeaderText></DiagnLink>
                        <DiagnLink to="/main/diagnostics"><HeaderText $active={location.pathname.includes('diagnostics')}>Диагностика</HeaderText></DiagnLink>
                        <DiagnLink to="/main/recommend"><HeaderText $active={location.pathname.includes('recommend')}>Рекомендации</HeaderText></DiagnLink>
                    </DiagnMenu>
                    <DiagnCP>
                        <Chat style={{ "height": "30px", "width": "30px" }} />
                        <Prof style={{ "height": "30px", "width": "30px" }} />
                    </DiagnCP>
                </DiagHeader>
            }
        </>
    )
}

export default Header