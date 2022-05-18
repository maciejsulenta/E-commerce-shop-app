import React from "react";
import { categories } from "../../utils/data/data";
import { Container } from "./Categories.js";
import CategoryItem from "../CategoryItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
