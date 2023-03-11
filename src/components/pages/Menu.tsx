import { ReactComponent as Chat } from "images/Chat_Conversation_CircleW.svg";
import { ReactComponent as Prof } from "images/UserCircleW.svg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Hamburger from "components/pages/Hamburger";
import { Context } from "index";
import { observer } from "mobx-react-lite";

const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  width: 100vw;
  position: fixed;
  background-color: #5496ff;
  padding-top: 70px;
  flex-direction: column;
  display: ${({ open }) => (open ? "flex" : "none")};
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px 30px;
  font-size: 16px;
  color: white;
  text-decoration: none;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
`;

interface Props {
  onOpenChat(): any;
}

export const Menu = ({ onOpenChat }: Props) => {
  const { store } = useContext(Context);
  const { isAuth } = store;

  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  const toProfile = () => {
    isAuth
      ? (document.location.href = "/main/profile")
      : (document.location.href = "/");
  };
  return (
    <div>
      <StyledMenu open={open}>
        <StyledLink to="/main/home" onClick={() => close()}>
          Главная
        </StyledLink>
        <StyledLink to="/main/diagnostics" onClick={() => close()}>
          Диагностика
        </StyledLink>
        <StyledLink to="/main/recommend" onClick={() => close()}>
          Рекомендации
        </StyledLink>
        <Icons>
          <Chat
            style={{
              height: "30px",
              width: "30px",
              margin: "20px 20px 20px 30px",
            }}
            onClick={() => {
              close();
              onOpenChat();
            }}
          />
          <Prof
            style={{
              height: "30px",
              width: "30px",
              margin: "20px 20px 20px 10px",
            }}
            onClick={() => {
              close();
              toProfile();
            }}
          />
        </Icons>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default observer(Menu)