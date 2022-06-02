import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../utils/theme.js";

export const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${(props) =>
    props.visible ? theme.colors.white : "transparent"};
  box-shadow: ${(props) =>
    props.visible === true ? "0px 1px 5px -2px #333" : "none"};
  transition: all 0.2s ease-in-out;
  color: ${theme.colors.black};
`;
export const Wrapper = styled.div`
  padding: 0.8em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.3em;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Logo = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  background: linear-gradient(
    90deg,
    ${theme.colors.darkBlue},
    ${theme.colors.blue}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.3em;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MenuItem = styled.div`
  font-size: 0.8em;
  cursor: pointer;
`;
export const LinkS = styled(NavLink)`
  text-decoration: none;
  line-height: 1em;
  font-family: ${theme.fonts};
  color: inherit;
  transition: all 0.2s ease;
  &:hover {
    color: ${theme.colors.blue};
  }
`;
export const BurgerWrap = styled.div``;
export const BurgerContainer = styled.div`
  position: relative;
  display: none;
  height: 35px;
  width: 44px;
  transition: all 0.5s ease-in-out;
  /* overflow: hidden; */
  z-index: 3;
  cursor: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
  }
`;
export const Burger = styled.div`
  width: 38px;
  height: 5px;
  background-color: ${(props) =>
    props.isOpen === true ? "transparent" : theme.colors.black};
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  transform: translate(
    ${(props) => (props.isOpen === true ? "-50px, 0px" : "0px, 0px;")}
  );

  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 38px;
    height: 5px;
    background-color: ${theme.colors.black};
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }
  &:after {
    transform: translate(
        ${(props) => (props.isOpen === true ? "50px, 0px" : "0px, 10px")}
      )
      rotate(${(props) => (props.isOpen === true ? "45deg" : "0deg")});
  }
  &:before {
    transform: translate(
        ${(props) => (props.isOpen === true ? "50px, 0px" : "0px, -10px")}
      )
      rotate(${(props) => (props.isOpen === true ? "-45deg" : "0deg")});
  }
`;
