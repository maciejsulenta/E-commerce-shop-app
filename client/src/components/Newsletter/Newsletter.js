import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Container = styled.div`
  height: 60vh;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.platinum};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 3em;
  font-family: ${theme.fonts};
  @media screen and (max-width: 550px) {
    font-size: 4em;
  }
`;
export const Desc = styled.p`
  font-size: 1.1em;
  font-weight: 300;
  margin-bottom: 2em;
  text-align: center;
  padding: 0 4em;
  @media screen and (max-width: 768px) {
    font-size: 1.6em;
  }
`;
export const InputContainer = styled.div`
  min-width: 240px;
  width: 50%;
  max-width: 500px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 3px solid ${theme.colors.platinum};
  border-radius: 2em;
  overflow: hidden;
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 1.5em;
  outline: none;
  font-family: ${theme.fonts};
  color: ${theme.colors.black};

  @media screen and (max-width: 550px) {
    flex: 7;
  }
`;
export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.platinum};
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.platinum};
    color: ${theme.colors.black};
  }
  @media screen and (max-width: 550px) {
    flex: 2;
  }
`;
