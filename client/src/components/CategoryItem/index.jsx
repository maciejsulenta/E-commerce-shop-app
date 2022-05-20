import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Info, Title, Button } from "./CategoryItem.js";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/productlist/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Kup Teraz</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
