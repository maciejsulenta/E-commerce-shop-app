import styled from "styled-components";

export const Title = styled.h1`
  color: #333;
`;
export const Form = styled.form`
  background-color: rgba(35, 37, 38, 0.4);
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5;
  height: fit-content;
  min-width: 24em;
  width: 40%;
  padding: 2em 0;
`;
export const Item = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  margin: 0.5em 0 0.3em 0;
  font-size: 1em;
`;
export const Input = styled.input`
  font-size: 1em;
  border: none;
  width: 100%;
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
`;
