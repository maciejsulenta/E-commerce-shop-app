import React, { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
  Error,
} from "./Login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

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
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Hasło"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Zaloguj się
          </Button>
          {error && <Error>Coś poszło nie tak..</Error>}
          <Link>Nie pamiętasz hasła? Kliknij tutaj</Link>
          <Link>Nie masz jeszcze konta? Zarejestruj się</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
