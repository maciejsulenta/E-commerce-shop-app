import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { userRequest } from "../../requestMethods.js";
import { format } from "timeago.js";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import {
  Button,
  UserContainer,
  UserShow,
  UserHeader,
  InfoContainer,
  ImgShow,
  UsernameShow,
  ShowTitle,
  InfoWrap,
  InfoTitle,
  UpdateWrap,
  Form,
  UpdateTitle,
  Left,
  Right,
  Item,
  Label,
  Input,
  Upload,
  UpdateImg,
} from "./User.js";
import { Container } from "../../components/Container";
export default function User() {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const user = useSelector((state) =>
    state.user.users.find((user) => user._id === userId)
  );

  return (
    <Container padd>
      <UserContainer>
        <UserShow>
          <UserHeader>
            <ImgShow
              src={user.img || "https://pomagamy.se/image/NoUser.webp"}
              alt="user avatar"
            />
            <UsernameShow>{user.username}</UsernameShow>
          </UserHeader>
          <InfoContainer bgc>
            <ShowTitle>Dane szczegółowe</ShowTitle>
            <InfoWrap>
              <PermIdentity />
              <InfoTitle>{user.name}</InfoTitle>
            </InfoWrap>
            <InfoWrap>
              <CalendarToday />
              <InfoTitle>{format(user.createdAt)}</InfoTitle>
            </InfoWrap>
          </InfoContainer>
          <InfoContainer>
            <ShowTitle>Dane kontaktowe</ShowTitle>
            <InfoWrap>
              <PhoneAndroid />
              <InfoTitle>{user.phone}</InfoTitle>
            </InfoWrap>
            <InfoWrap>
              <MailOutline />
              <InfoTitle>{user.email}</InfoTitle>
            </InfoWrap>
            <InfoWrap>
              <LocationSearching />
              <InfoTitle>{user.address}</InfoTitle>
            </InfoWrap>
          </InfoContainer>
        </UserShow>
        <UpdateWrap>
          <Form>
            <Left>
              <UpdateTitle>Edytuj profil użytkownika</UpdateTitle>
              <Item>
                <Label>Login</Label>
                <Input type="text" placeholder={user.username} />
              </Item>
              <Item>
                <Label>Imię i nazwisko</Label>
                <Input type="text" placeholder={user.name} />
              </Item>
              <Item>
                <Label>Email</Label>
                <Input type="text" placeholder={user.email} />
              </Item>
              <Item>
                <Label>Numer telefonu</Label>
                <Input type="text" placeholder={user.phone} />
              </Item>
              <Item>
                <Label>Adres zamieszkania</Label>
                <Input type="text" placeholder={user.address} />
              </Item>
            </Left>
            <Right>
              <Upload>
                <UpdateImg
                  src={user.img || "https://pomagamy.se/image/NoUser.webp"}
                  alt="user avatar"
                />
                Wgraj nowy avatar
                <Label htmlFor="file">
                  <Publish
                    style={{
                      cursor: "pointer",
                      fontSize: "3em",
                      color: "#333",
                    }}
                  />
                </Label>
                <Input file type="file" id="file" />
              </Upload>
              <Button>Aktualizuj</Button>
            </Right>
          </Form>
        </UpdateWrap>
      </UserContainer>
    </Container>
  );
}
