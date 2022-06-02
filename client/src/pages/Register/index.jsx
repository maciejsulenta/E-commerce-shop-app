import React from "react";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import { Container } from "../../components/Container";
import {
  RegisterContainer,
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
      <Announcement />
      <Navbar />
      <RegisterContainer>
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
              Zakładając konto zgadzasz się na przestrzeganie naszej
              <b style={{ cursor: "pointer" }}>polityki prywatności</b>
            </Agreement>
            <Button>Załóż konto</Button>
          </Form>
        </Wrapper>
      </RegisterContainer>
    </Container>
  );
};

export default Register;
