import { Send } from "@material-ui/icons";
import React from "react";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./Newsletter";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Zapisz się do newslettera i zyskaj 10% zniżki na następne zakupy!</Desc>
      <InputContainer>
        <Input placeholder="Twój email"/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
