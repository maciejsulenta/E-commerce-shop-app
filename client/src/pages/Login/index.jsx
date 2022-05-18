import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link
} from "./Login";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Zaloguj się</Title>
        <Form>
          <Input placeholder="Login" />
          <Input placeholder="Hasło" />
          <Button>Zaloguj się</Button>
          <Link>Nie pamiętasz hasła? Kliknij tutaj</Link>
          <Link>Nie masz jeszcze konta? Zarejestruj się</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
