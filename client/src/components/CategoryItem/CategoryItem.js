import styled from "styled-components";
import { theme } from "../../utils/theme";
export const Container = styled.div`
  flex: 1;
  margin: 2em;
  min-height: 300px;
  height: 60vh;
  position: relative;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: top;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  font-family: ${theme.fonts};
  transition: all 0.3s ease;
  &:hover {
    transform: skew(0.5deg, -0.5deg) scale(1.01);
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    aspect-ratio: 1/1.2;
  }
  @media screen and (max-width: 550px) {
    width: 70%;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  color: ${theme.colors.platinum};
  font-family: inherit;
  transition: all 0.3s ease;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.5em;
  }
`;

export const Button = styled.button`
  font-size: 0.9em;
  font-family: inherit;
  padding: 1em 2em;
  margin: 2em 0;
  border-radius: 1em;
  border: none;
  color: ${theme.colors.black};
  background-color: ${theme.colors.platinum};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${theme.colors.blue} !important;
    color: ${theme.colors.platinum};
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:hover ${Title} {
    color: ${theme.colors.white};
  }
  &:hover ${Button} {
    background-color: ${theme.colors.white};
  }
`;
