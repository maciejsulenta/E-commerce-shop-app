import React, { useState, useEffect } from "react";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  Left,
  Center,
  Logo,
  Right,
  MenuItem,
  LinkS,
} from "./Navbar.js";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Container visible={scrollNav}>
      <Wrapper>
        <Left>
          <LinkS to="/">
            <Logo visible={scrollNav}>.sklepik</Logo>
          </LinkS>
        </Left>
        <Center>
          <LinkS to="/">
            <MenuItem>Strona główna</MenuItem>
          </LinkS>
          <LinkS to="/productlist/męskie">
            <MenuItem>Mężczyzna</MenuItem>
          </LinkS>
          <LinkS to="/productlist/damskie">
            <MenuItem>Kobieta</MenuItem>
          </LinkS>
        </Center>
        <Right>
          <LinkS to="/register">
            <MenuItem>Rejestracja</MenuItem>
          </LinkS>
          <LinkS to="/login">
            <MenuItem>Zaloguj się</MenuItem>
          </LinkS>
          <LinkS to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </LinkS>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
