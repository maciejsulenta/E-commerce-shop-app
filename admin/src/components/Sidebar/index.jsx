import {
  Container,
  Wrapper,
  Menu,
  Title,
  List,
  LinkS,
  ListItem,
} from "./Sidebar";
import {
  LineStyle,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  MailOutline,
  DynamicFeed,
  PersonAdd,
  CreateNewFolder,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <LinkS to="/admin">
              <ListItem>
                <LineStyle />
                Strona Główna
              </ListItem>
              <ListItem>
                <TrendingUp />
                Obroty
              </ListItem>
            </LinkS>
          </List>
        </Menu>

        <Menu>
          <Title>Nawigacja</Title>
          <List>
            <LinkS to="/users">
              <ListItem>
                <PermIdentity />
                Użytkownicy
              </ListItem>
            </LinkS>
            <LinkS to="/newUser">
              <ListItem>
                <PersonAdd />
                Stwórz użytkownika
              </ListItem>
            </LinkS>
            <LinkS to="/products">
              <ListItem>
                <Storefront />
                Produkty
              </ListItem>
            </LinkS>
            <LinkS to="/newProduct">
              <ListItem>
                <CreateNewFolder />
                Stwórz produkt
              </ListItem>
            </LinkS>
            <LinkS to="/admin">
              <ListItem>
                <AttachMoney />
                Transakcje
              </ListItem>
            </LinkS>
          </List>
        </Menu>

        <Menu>
          <Title>Powiadomienia</Title>
          <List>
            <LinkS to="/admin">
              <ListItem>
                <MailOutline />
                Poczta
              </ListItem>
              <ListItem>
                <DynamicFeed />
                Wiadomości
              </ListItem>
            </LinkS>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
}
