import React, { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import { Container } from "../../components/Container";
import {
  LoginContainer,
  Left,
  Right,
  FormContainer,
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
      <Announcement />
      <Navbar />
      <LoginContainer>
        <Left></Left>
        <Right>
          <FormContainer>
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
              <Link>
                Nie pamiętasz hasła?
                <span style={{ fontWeight: "bold", cursor: "pointer" }}>
                  Kliknij tutaj
                </span>
              </Link>
              <Link>
                Nie masz jeszcze konta?
                <span style={{ fontWeight: "bold", cursor: "pointer" }}>
                  Zarejestruj się
                </span>
              </Link>
            </Form>
          </FormContainer>
        </Right>
      </LoginContainer>
    </Container>
  );
};

export default Login;
