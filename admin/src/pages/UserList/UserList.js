import styled from "styled-components";

export const User = styled.div`
  display: flex;
  align-items: center;
`;
export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const Button = styled.button`
  width: fit-content;
  border: none;
  padding: 0.5em 1.5em;
  margin-right: 1em;
  background: linear-gradient(to top, #232526, #414345);
  border-radius: 0.5em;
  cursor: pointer;
  color: #fff;
  font-size: 1em;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
