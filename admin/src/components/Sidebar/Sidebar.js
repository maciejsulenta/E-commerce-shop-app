import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  min-width: 230px;
  max-width: 280px;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;
export const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;
export const Menu = styled.div`
  margin-bottom: 10px;
`;
export const Title = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
export const List = styled.ul`
  list-style: none;
  padding: 5px;
`;
export const LinkS = styled(Link)`
  text-decoration: none;
  color: #333;
`;
export const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &:hover {
    background-color: rgb(240, 240, 255);
  }
  &:active {
    color: #6c6;
  }
`;
