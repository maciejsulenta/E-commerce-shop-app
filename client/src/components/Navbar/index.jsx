import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  MenuItem,
} from "./Navbar.js";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>PL</Language>
          <SearchContainer>
            <Input placeholder="szukaj"/>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>.SKLEPIK</Logo>
        </Center>
        <Right>
          <MenuItem>REJESTRACJA</MenuItem>
          <MenuItem>ZALOGUJ SIĘ</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
