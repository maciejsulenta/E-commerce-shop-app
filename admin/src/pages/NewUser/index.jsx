import {
  Container,
  Title,
  Form,
  Item,
  Label,
  Input,
  Gender,
  Select,
  Option,
  Button,
} from "./NewUser";

export default function NewUser() {
  return (
    <Container>
      <Title>Nowy użytkownik</Title>
      <Form>
        <Item>
          <Label>Login</Label>
          <Input type="text" placeholder="Login" />
        </Item>
        <Item>
          <Label>Imię i nazwisko</Label>
          <Input type="text" placeholder="Imię i nazwisko" />
        </Item>
        <Item>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
        </Item>
        <Item>
          <Label>Hasło</Label>
          <Input type="password" placeholder="Hasło" />
        </Item>
        <Item>
          <Label>Numer kontaktowy</Label>
          <Input type="text" placeholder="+48 123 456 78" />
        </Item>
        <Item>
          <Label>Adres zamieszkania</Label>
          <Input type="text" placeholder="Adres zamieszkania" />
        </Item>
        <Item>
          <Label>Płeć</Label>
          <Gender>
            <Input type="radio" name="gender" id="male" value="male" />
            <Label htmlFor="male">Mężczyzna</Label>
            <Input type="radio" name="gender" id="female" value="female" />
            <Label htmlFor="female">Kobieta</Label>
            <Input type="radio" name="gender" id="other" value="other" />
            <Label htmlFor="other">Inna</Label>
          </Gender>
        </Item>
        <Item>
          <Label>Aktywna</Label>
          <Select name="active" id="active">
            <Option value="yes">Tak</Option>
            <Option value="no">Nie</Option>
          </Select>
        </Item>
        <Button>Stwórz użytkownika</Button>
      </Form>
    </Container>
  );
}
