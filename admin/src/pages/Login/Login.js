import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/911254/pexels-photo-911254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  background-color: rgba(35, 37, 38, 0.4);
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5;
  height: fit-content;
  min-width: 24em;
  width: 30%;
  padding: 2em 0;
`;
export const Title = styled.h1`
  color: #333;
`;
export const Form = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;
export const Input = styled.input`
  font-size: 1em;
  border: none;
  width: 70%;
  padding: 1em 0 1em 1em;
  border-radius: 1em;
  outline: none;
  display: ${(props) => props.file && "none"};
  &:focus {
    -webkit-box-shadow: 0px 0px 15px 0px #e0eafc;
    box-shadow: 0px 0px 15px 0px #e0eafc;
  }
`;

export const Button = styled.button`
  width: fit-content;
  border: none;
  padding: 1em 2em;
  margin-top: 2em;
  background: linear-gradient(to top, #232526, #414345);
  border-radius: 0.5em;
  cursor: pointer;
  color: #fff;
  font-size: 1em;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.05);
  }
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
export const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
export const Error = styled.span`
  color: red;
`;
