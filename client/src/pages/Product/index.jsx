import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./Product";
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  // const [product, setProduct] = useState({});

  // useEffect(()=> {
  //   const getProduct = async () => {
  //     try{
  //       const res = axios.
  //     }catch{}
  //   }
  // },[id])
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Bluza w stylu basic</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quisquam consectetur id exercitationem quis, repudiandae labore,
            culpa qui, aspernatur debitis rerum! Aliquam ad expedita doloribus?
            Atque ex quis nihil assumenda!
          </Desc>
          <Price>120 zl</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Kolor</FilterTitle>
              <FilterColor color="czarny" />
              <FilterColor color="biały" />
              <FilterColor color="czerwony" />
            </Filter>
            <Filter>
              <FilterTitle>Rozmiar</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Dodaj do koszyka</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
