import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from "./ProductList";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtruj produkty:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Kolor</Option>
            <Option>biały</Option>
            <Option>czerwony</Option>
            <Option>czarny</Option>
            <Option>zielony</Option>
            <Option>niebieski</Option>
            
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Rozmiar</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sortuj produkty:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="najnowsze">Najnowsze</Option>
            <Option value="rosnaco">Cena rosnąco</Option>
            <Option value="malejaco">Cena malejąco</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
