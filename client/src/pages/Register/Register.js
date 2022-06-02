import styled from "styled-components";
import { theme } from "../../utils/theme";

export const RegisterContainer = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 80%;
  max-width: 900px;
  height: 85%;
  max-height: 900px;
  padding: 2em;
  border-radius: 2em;
  background-color: ${theme.colors.platinum};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
`;
export const Title = styled.h1`
  font-size: 3em;
  font-weight: 300;
`;
export const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  column-gap: 1em;
  row-gap: 1em;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`;
export const Input = styled.input`
  font-size: 0.7em;
  padding: 1.5em 8em 1.5em 1em;
  border-radius: 1em;
  border: 2px solid ${theme.colors.black};
  outline: none;
  font-family: ${theme.fonts};
  transition: all 0.3s ease;
  &:focus {
    -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.8);
    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.8);
  }
`;
export const Agreement = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1em;
  font-size: 0.6em;
`;
export const Button = styled.button`
  justify-self: center;
  align-self: center;
  font-size: 1em;
  font-family: ${theme.fonts};
  padding: 0.8em 2em;
  margin-bottom: 0.5em;
  border-radius: 1em;
  border: none;
  color: ${theme.colors.platinum};
  background-color: ${theme.colors.blue};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${theme.colors.darkBlue};
  }
  &:disabled {
    background-color: brown;
    color: ${theme.colors.white};
    cursor: not-allowed;
  }
`;
