import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Info, Title, Button } from "./CategoryItem.js";

const CategoryItem = ({ item }) => {
  return (
    <Container src={item.img}>
      <Info>
        <Title>{item.title}</Title>
        <Link to={`/productlist/${item.cat}`}>
          <Button>Kup Teraz</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
