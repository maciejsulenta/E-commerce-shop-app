import styled from "styled-components";
import { mobile } from "../../utils/responsive";
import { theme } from "../../utils/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  top: -60px;
  left: 0;
  overflow: hidden;
`;
export const Arrow = styled.div`
  width: 2.5em;
  height: 2.5em;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.pos === "left" && "10px"};
  right: ${(props) => props.pos === "right" && "10px"};
  cursor: pointer;
  opacity: 1;
  z-index: 2;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  }
`;
export const Slide = styled.div`
  width: 100vw;
  height: calc(100vh + 60px);
  display: flex;
  align-items: center;
  background-image: url(${(props) => props.src});
  background-color: ${(props) => props.bgc};
  background-size: cover;
  transition: all 0.5s linear;
`;

export const InfoContainer = styled.div`
  text-transform: uppercase;
  width: 40em;
  margin-left: 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Title = styled.h1`
  font-size: 4em;
  letter-spacing: 0.02em;
  line-height: 1em;
  font-family: "Playfair-Display";
`;
export const Desc = styled.p`
  margin: 1em 0 3em 0;
  font-size: 1em;
  font-weight: 500;
  width: 70%;
`;
export const Button = styled.button`
  padding: 1em 2em;
  font-size: 1em;
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
