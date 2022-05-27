import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { userRequest } from "../../requestMethods";
import {
  Container,
  Title,
  List,
  ListItem,
  Image,
  UserWrap,
  User,
  Button,
} from "./WidgetSm";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <Container>
      <Title>Nowi użytkownicy</Title>
      <List>
        {users.map((user) => (
          <ListItem key={user._id}>
            <Image
              src={user.img || "https://pomagamy.se/image/NoUser.webp"}
              alt="user avatar"
            />
            <UserWrap>
              <User>{user.username}</User>
            </UserWrap>
            <Link style={{ textDecoration: "none" }} to={"/user/" + user._id}>
              <Button>Zobacz</Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
