import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";

import { Container, Circle, Info, Icon, LinkS} from "./ProductItem";

const ProductItem = ({ item }) => {
  return (
    <Container src={item.img}>
      <Circle />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <LinkS to={`/products/${item._id}`}>
            <SearchOutlined />
          </LinkS>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
