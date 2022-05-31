import styled from "styled-components";
import { mobile } from "../../utils/responsive.js";
import { NavLink } from "react-router-dom";
import { theme } from "../../utils/theme.js";
export const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
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
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })};
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
  ${mobile({ fontSize: "24px" })};
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.3em;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;
export const MenuItem = styled.div`
  font-size: 0.8em;
  cursor: pointer;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
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
