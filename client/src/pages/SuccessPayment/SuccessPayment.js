import styled from "styled-components";
import { theme } from "../../utils/theme";

export const SuccessContainer = styled.div`
  background-color: ${theme.colors.white};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;
export const Image = styled.div`
  height: 20em;
  width: 30em;
  background-image: url("https://zapodaj.net/images/bbb64575f0f87.png");
  background-size: cover;
`;
export const Title = styled.h2`
  font-size: 3em;
  color: ${theme.colors.black};
  text-align: center;
`;
export const Desc = styled.p`
  font-size: 1.2em;
  color: ${theme.colors.black};
  text-align: center;
`;
export const Button = styled.button`
  font-size: 1em;
  font-family: ${theme.fonts};
  padding: 1em 2em;
  border-radius: 1em;
  border: none;
  color: ${theme.colors.platinum};
  background-color: ${theme.colors.blue};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${theme.colors.darkBlue};
  }
`;
