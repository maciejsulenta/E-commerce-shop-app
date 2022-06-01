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
  ContactWrap,
  ContactItem,
  Payment,
} from "./Footer";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>.SKLEPIK~</Logo>
        <Desc>
          W .Sklepik~ zależy nam na tym, aby zapewniać Ci wyjątkowe i
          fascynujące przeżycia związane z modą. Aby to osiągnąć, koncentrujemy
          się na rozwoju i udostępnianiu spersonalizowanych funkcji oraz usług,
          dzięki którym możemy proponować Ci coraz lepsze, praktyczniejsze i
          bezpieczniejsze usługi.
        </Desc>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Left>
      <Center>
        <Title>To może Ci się przydać</Title>
        <List>
          <ListItem>Strona główna</ListItem>
          <ListItem>Koszyk</ListItem>
          <ListItem>Moda damska</ListItem>
          <ListItem>Moda męska</ListItem>
          <ListItem>Akcesoria</ListItem>
          <ListItem>Śledzenie przesyłki</ListItem>
          <ListItem>Regulamin</ListItem>
          <ListItem>Zaloguj się</ListItem>
          <ListItem>Rejestracja</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Kontakt</Title>
        <ContactWrap>
          <ContactItem>
            <Room />
            <Desc>Piłsudskiego 51/4 Kraków</Desc>
          </ContactItem>
          <ContactItem>
            <Phone />
            <Desc>+48 507 599 122</Desc>
          </ContactItem>
          <ContactItem>
            <MailOutline />
            <Desc>sklepik@kontakt.com</Desc>
          </ContactItem>
        </ContactWrap>
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
      </Right>
    </Container>
  );
};

export default Footer;
