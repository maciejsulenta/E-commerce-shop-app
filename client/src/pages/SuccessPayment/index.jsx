import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "../../components/Container";
import { Link } from "react-router-dom";
import { SuccessContainer, Image, Title, Desc, Button } from "./SuccessPayment";

const SuccessPayment = () => {
  const location = useLocation();

  return (
    <Container>
      <SuccessContainer>
        <Image />
        <div>
          <Title>Sukces!</Title>
          <Desc>Transakcja przebiegła pomyślnie</Desc>
        </div>
        <Link to="/">
          <Button>Wróć do strony glównej</Button>
        </Link>
      </SuccessContainer>
    </Container>
  );
};

export default SuccessPayment;
