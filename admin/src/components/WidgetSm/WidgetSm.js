import styled from "styled-components";

export const Container = styled.div`
  font-size: 20px;
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  padding: 2em 1em;
  margin-right: 20px;
  background-color: #fff;
  border-radius: 1em;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
`;
export const Title = styled.span`
  font-size: 1.1em;
  font-weight: 600;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 90%;
  font-size: 0.8em;
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
  margin-right: 1em;
`;
export const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const User = styled.span`
  font-weight: 600;
`;
export const Button = styled.button`
  font-size: 0.8em;
  width: 7em;
  height: 2.5em;
  border: none;
  border-radius: 0.5em;
  background: linear-gradient(to right, #232526, #414345);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
