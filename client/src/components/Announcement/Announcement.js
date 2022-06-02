import styled from "styled-components";
import { theme } from "../../utils/theme";
export const Container = styled.div`
  height: 30px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.platinum};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.7em;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
