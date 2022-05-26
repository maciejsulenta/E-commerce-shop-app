import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  IconContainer,
  IconBadge,
  Image,
} from "./Topbar";

export default function Topbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo></Logo>
        </Left>
        <Right>
          <IconContainer>
            <NotificationsNone />
            <IconBadge>3</IconBadge>
          </IconContainer>
          <IconContainer>
            <Language />
            <IconBadge>5</IconBadge>
          </IconContainer>
          <IconContainer>
            <Settings />
          </IconContainer>
          <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/001/261/040/small/female-call-center-agent.jpg"
            alt="profile pic"
          />
        </Right>
      </Wrapper>
    </Container>
  );
}
