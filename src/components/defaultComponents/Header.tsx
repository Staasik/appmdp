import { ReactComponent as Chat } from 'images/Chat_Conversation_Circle.svg';
import { ReactComponent as Prof } from 'images/UserCircle.svg';
import { useMediaQuery } from "react-responsive";
import { DiagHeader, DiagnCP, DiagnIcon, DiagnMenu, DiagnText, DiagnTextBlack, DiagnLink } from 'styles/pages/Diagnostics/DiagnHeader';
import { Menu } from "components/pages/Menu";
import Icon from 'images/icon.png';

export const Header = () => {
    const isDesktop = useMediaQuery({
        query: "(max-width: 600px)"
    });

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
                        <DiagnLink to="/main"><DiagnText>Главная</DiagnText></DiagnLink>
                        <DiagnLink to="/main/diagnostics"><DiagnTextBlack>Диагностика</DiagnTextBlack></DiagnLink>
                        <DiagnLink to="/main/rec"><DiagnText>Рекомендации</DiagnText></DiagnLink>
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