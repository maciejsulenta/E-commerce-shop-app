import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  Container,
  TitleWrap,
  Title,
  Button,
  UserContainer,
  UserShow,
  Top,
  Bottom,
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

export default function User() {
  return (
    <Container>
      <TitleWrap>
        <Title>Panel edycji użytkownika</Title>
        <Link to="/newUser">
          <Button>Stwórz użytkownika</Button>
        </Link>
      </TitleWrap>
      <UserContainer>
        <UserShow>
          <Top>
            <ImgShow
              src="https://i2.wp.com/lukeatkins.com/wp-content/uploads/2019/10/20150205-img_3269_test_a4_cmyk300_tko-final_revised-1_1140x760_acf_cropped.png?fit=1140%2C760"
              alt="user avatar"
            />
            <UsernameShow>Maciej Sulenta</UsernameShow>
          </Top>
          <Bottom>
            <ShowTitle>Dane szczegółowe</ShowTitle>
            <InfoWrap>
              <PermIdentity />
              <InfoTitle>msulenta</InfoTitle>
            </InfoWrap>
            <InfoWrap>
              <CalendarToday />
              <InfoTitle>12.12.1998</InfoTitle>
            </InfoWrap>
            <ShowTitle>Dane kontaktowe</ShowTitle>
            <InfoWrap>
              <PhoneAndroid />
              <InfoTitle>+48 123 456 67</InfoTitle>
            </InfoWrap>
            <InfoWrap>
              <MailOutline />
              <InfoTitle>maciej.sulenta@gmail.com</InfoTitle>
            </InfoWrap>
            <InfoWrap>
              <LocationSearching />
              <InfoTitle>Warszawa Polska</InfoTitle>
            </InfoWrap>
          </Bottom>
        </UserShow>
        <UpdateWrap>
          <UpdateTitle>Edytuj</UpdateTitle>
          <Form>
            <Left>
              <Item>
                <Label>Login</Label>
                <Input type="text" placeholder="msulenta" />
              </Item>
              <Item>
                <Label>Imię i nazwisko</Label>
                <Input type="text" placeholder="maciej sulenta" />
              </Item>
              <Item>
                <Label>Email</Label>
                <Input type="text" placeholder="maciej.sulenta@gmail.com" />
              </Item>
              <Item>
                <Label>Numer telefonu</Label>
                <Input type="text" placeholder="+48 123 456 67" />
              </Item>
              <Item>
                <Label>Adres zamieszkania</Label>
                <Input type="text" placeholder="Warszawa Polska" />
              </Item>
            </Left>
            <Right>
              <Upload>
                <UpdateImg
                  src="https://i2.wp.com/lukeatkins.com/wp-content/uploads/2019/10/20150205-img_3269_test_a4_cmyk300_tko-final_revised-1_1140x760_acf_cropped.png?fit=1140%2C760"
                  alt="user avatar"
                />
                <Label htmlFor="file">
                  <Publish style={{ cursor: "pointer" }} />
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
