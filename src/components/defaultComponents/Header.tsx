import { Menu } from "components/pages/Menu";
import { ReactComponent as Chat } from "images/Chat_Conversation_Circle.svg";
import Icon from "images/icon.png";
import { ReactComponent as Prof } from "images/UserCircle.svg";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import {
  DiagHeader,
  DiagnCP,
  DiagnIcon,
  DiagnLink,
  DiagnMenu,
  HeaderText,
  ProfileName,
} from "styles/pages/Diagnostics/DiagnHeader";

interface Props {
  onOpenChat(): any;
}

export const Header = ({ onOpenChat }: Props) => {
  const isDesktop = useMediaQuery({
    query: "(max-width: 600px)",
  });
  let location = useLocation();

  const { store } = useContext(Context);
  const { user : userData } = store

  const toProfile = () => {
    store.isAuth
      ? (document.location.href = "/main/profile")
      : (document.location.href = "/");
  };

  return (
    <>
      {isDesktop ? (
        <DiagHeader>
          <DiagnIcon>
            <a href="/main/home">
              <img src={Icon} style={{ height: "30px", width: "110px" }} />
            </a>
          </DiagnIcon>
          <DiagnCP>
            <Menu onOpenChat={() => onOpenChat()} />
          </DiagnCP>
        </DiagHeader>
      ) : (
        <DiagHeader>
          <DiagnIcon>
            <a href="/main/home">
              <img src={Icon} style={{ height: "30px", width: "110px" }} />
            </a>
          </DiagnIcon>
          <DiagnMenu>
            <DiagnLink href="/main/home">
              <HeaderText $active={location.pathname.includes("home")}>
                Главная
              </HeaderText>
            </DiagnLink>
            <DiagnLink href="/main/diagnostics">
              <HeaderText $active={location.pathname.includes("/main/diagnostics")}>
                Диагностика
              </HeaderText>
            </DiagnLink>
            <DiagnLink href="/main/recommend">
              <HeaderText $active={location.pathname.includes("recommend")}>
                Рекомендации
              </HeaderText>
            </DiagnLink>
            { userData.role === 'admin' &&
              <DiagnLink href="/main/editor/diagnostics">
                <HeaderText $active={location.pathname.includes("/main/editor/diagnostics")}>
                  Редактор
                </HeaderText>
              </DiagnLink>
            }
          </DiagnMenu>
          <DiagnCP>
            <Chat
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
              onClick={() => onOpenChat()}
            />
            <Prof
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
              onClick={() => {
                toProfile();
              }}
            />
            {userData && <ProfileName>{userData.name}</ProfileName>}
          </DiagnCP>
        </DiagHeader>
      )}
    </>
  );
};

export default observer(Header);
