import styled from "styled-components";

export const StyledHamburger = styled.button<{ open: boolean }>`
  left: 5vw;
  top: 7vw;
  width: 2rem;
  height: 2rem;
  background: transparent;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items:center;
  border: none;
  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${({ open }) =>
      open ? 'white' : 'black'};
  }
`;
 
type Props = {
  open: boolean,
  setOpen: (v: boolean) => void
}
 
 const Hamburger = (props: Props) => (
  <StyledHamburger
    open={props.open}
    onClick={() => props.setOpen(!props.open)}>
      <div></div>
      <div></div>
      <div></div>
  </StyledHamburger>
);

export default Hamburger