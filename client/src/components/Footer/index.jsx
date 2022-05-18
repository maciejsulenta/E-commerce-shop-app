import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";
import React from "react";
import {
  Container,
  Left,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  Right,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./Footer";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>.SKLEPIK</Logo>
        <Desc>
          W Zalando zależy nam na tym, aby zapewniać Ci wyjątkowe i fascynujące
          przeżycia związane z modą. Aby to osiągnąć, koncentrujemy się na
          rozwoju i udostępnianiu spersonalizowanych funkcji oraz usług, dzięki
          którym możemy proponować Ci coraz lepsze, praktyczniejsze i
          bezpieczniejsze usługi.
        </Desc>
        <SocialContainer>
          <SocialIcon bgc="#3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bgc="#e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon bgc="#55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon bgc="#e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>To może Ci się przydać</Title>
        <List>
          <ListItem>Strona główna</ListItem>
          <ListItem>Koszyk</ListItem>
          <ListItem>Moda damska</ListItem>
          <ListItem>Moda męska</ListItem>
          <ListItem>Akcesoria</ListItem>
          <ListItem>Moje konto</ListItem>
          <ListItem>Śledzenie przesyłki</ListItem>
          <ListItem>Regulamin</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Kontakt</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Piłsudskiego 56/4, 23-100
          Kraków
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +48 507 599 122
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          sklepik@kontakt.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
