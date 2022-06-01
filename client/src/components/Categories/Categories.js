import styled from "styled-components";
import { mobile } from "../../utils/responsive";
import { theme } from "../../utils/theme";

export const Container = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })};
`;

export const Title = styled.h2`
  color: ${theme.colors.black};
  font-size: 3em;
  text-align: center;
`;
