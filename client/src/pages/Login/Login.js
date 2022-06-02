import styled from "styled-components";
import { theme } from "../../utils/theme";

export const LoginContainer = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Left = styled.div`
  flex: 1;
  height: 100%;
  background-image: url("https://i.ibb.co/3pF8w2Q/login.png");
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Right = styled.div`
  flex: 1;
  /* background-color: cadetblue; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.div`
  width: 80%;
  max-width: 700px;
  height: 80%;
  max-height: 600px;
  padding: 2em 0;
  border-radius: 2em;
  background-color: ${theme.colors.platinum};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
  
  @media screen and (max-width: 550px) {
    height: 60%;
  }
`;
export const Title = styled.h1`
  flex: 1;
  font-size: 3em;
  font-weight: 300;
  display: flex;
  align-items: center;
`;
export const Form = styled.div`
  flex: 4;
  width: 100%;
  padding: 0 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;
export const Input = styled.input`
  font-size: 0.7em;
  padding: 1.5em 8em 1.5em 1em;
  border-radius: 1em;
  margin-bottom: 2em;
  border: 2px solid ${theme.colors.black};
  outline: none;
  font-family: ${theme.fonts};
  transition: all 0.3s ease;
  &:focus {
    -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.8);
    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.8);
  }
`;

export const Button = styled.button`
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
export const Link = styled.a`
  margin: 0.5em 0;
  font-size: 0.8em;
  display: flex;
  gap: 0.3em;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Error = styled.span`
  color: red;
`;
