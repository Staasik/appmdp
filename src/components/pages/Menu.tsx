import React, { useState } from "react";
import styled from "styled-components";
import {ReactComponent as Chat} from 'images/Chat_Conversation_CircleW.svg';
import {ReactComponent as Prof} from 'images/UserCircleW.svg';
import { Link } from 'react-router-dom';

import Hamburger from "components/pages/Hamburger";

const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  width: 100vw;
  position: fixed;
  background-color: #5496FF;
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
  display:flex;
  flex-direction:row;
`;
export const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  return (
    <div>
      <StyledMenu open={open}>
        <StyledLink to="/main/home">Главная</StyledLink>
        <StyledLink to="/main/diagnostics">Диагностика</StyledLink>
        <StyledLink to="/main/recommend">Рекомендации</StyledLink>
        <Icons>
          <StyledLink to=""><Chat style={{"height" : "30px", "width" : "30px"}}/></StyledLink>
          <StyledLink to="/profile"><Prof style={{"height" : "30px", "width" : "30px"}}/></StyledLink>
        </Icons>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
     </div>
   );
};
