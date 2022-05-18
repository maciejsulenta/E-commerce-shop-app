import styled from "styled-components";
import { mobile } from "../../utils/responsive";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })};
`;
