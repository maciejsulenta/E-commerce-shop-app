import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from "./Register";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Zarejestruj się</Title>
        <Form>
          <Input placeholder="Imię" />
          <Input placeholder="Naziwsko" />
          <Input placeholder="Login" />
          <Input placeholder="Email" />
          <Input placeholder="Hasło" />
          <Input placeholder="Potwierdź hasło" />
          <Agreement>
            Zakładając konto zgadzasz się na przestrzeganie naszej{" "}
            <b>polityki prywatności</b>
          </Agreement>
          <Button>Załóż konto</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
