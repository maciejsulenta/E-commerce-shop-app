import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Container = styled.div`
  height: fit-content;
  background-color: brown;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: ${theme.colors.black};
  font-size: 3em;
  text-align: center;
  padding: 0 2em;

  @media screen and (max-width: 550px) {
    font-size: 4em;
  }
`;
