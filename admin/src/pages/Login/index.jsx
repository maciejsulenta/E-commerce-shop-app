import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { login } from "../../redux/apiCalls";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
} from "./Login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Zaloguj się</Title>
        <Form>
          <Input
            placeholder="Login"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Hasło"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}>Zaloguj się</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
