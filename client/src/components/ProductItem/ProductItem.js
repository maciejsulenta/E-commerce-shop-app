import styled from "styled-components";
import { theme } from "../../utils/theme";
import { Link } from "react-router-dom";

export const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
`;

export const LinkS = styled(Link)`
  color: ${theme.colors.black};
`;

export const Icon = styled.div`
  opacity: 0;
  min-width: 30px;
  width: 2em;
  min-height: 30px;
  height: 2em;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5em;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.platinum};
    transform: scale(1.1);
  }
  &:hover ${LinkS} {
    color: ${theme.colors.platinum};
  }
`;

export const Container = styled.div`
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(${(props) => props.src});
  background-size: cover;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(0.98);
  }
  &:hover ${Info} {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:hover ${Icon} {
    opacity: 1;
  }
`;

export const Circle = styled.div`
  display: none;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  background-color: gray;
  position: absolute;
`;

export const Image = styled.img`
  object-fit: cover;
  z-index: 2;
`;
