import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(255, 255, 255, 0.75);
  padding: 20px;
  margin-right: 20px;
  background-color: #efeeef;
`;
export const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;
export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const User = styled.span`
  font-weight: 600;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #333;
  gap: 8px;
  color: #eee;
  cursor: pointer;
`;
