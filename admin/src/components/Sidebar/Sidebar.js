import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  max-width: 280px;
  height: calc(100vh - 60px);
  background: transparent;
  position: sticky;
  top: 60px;
  font-size: 20px;
`;
export const Wrapper = styled.div`
  padding: 2em 1em;
`;
export const Menu = styled.div`
  margin-bottom: 0.5em;
`;
export const Title = styled.h3`
  font-size: 0.7em;
  color: #bbb;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0.5em;
`;
export const LinkS = styled(Link)`
  text-decoration: none;
  color: #ddd;
`;
export const ListItem = styled.li`
  padding: 0.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 0.8em;
  transition: all 0.2s ease;
  gap: 0.2em;
  &:hover {
    background: #414345;
    color: #fff;
    padding-left: 0.7em;
  }
  &:active {
    color: #6c6;
  }
`;
