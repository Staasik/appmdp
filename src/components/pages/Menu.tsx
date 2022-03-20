import React, { useState } from "react";
import styled from "styled-components";
import {ReactComponent as Chat} from 'images/Chat_Conversation_CircleW.svg';
import {ReactComponent as Prof} from 'images/UserCircleW.svg';

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
const StyledLink = styled.a`
  padding: 10px 30px;
  font-size: 16px;
  color: white;
  text-decoration: none;
`;

export const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  return (
    <div>
      <StyledMenu open={open}>
        <StyledLink onClick={() => close()}>Главная</StyledLink>
        <StyledLink onClick={() => close()}>Диагностика</StyledLink>
        <StyledLink onClick={() => close()}>Рекомендации</StyledLink>
        <StyledLink onClick={() => close()}><Chat style={{"height" : "30px", "width" : "30px"}}/>
        <StyledLink onClick={() => close()}><Prof style={{"height" : "30px", "width" : "30px"}}/>
        </StyledLink>
        </StyledLink>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
     </div>
   );
};
