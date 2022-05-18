import React from "react";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Summary,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Line,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./Cart";
import { Add, Remove } from "@material-ui/icons";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Twój koszyk</Title>
        <Top>
          <TopButton>Kontynuuj zakupy</TopButton>
          <TopTexts>
            <TopText>Koszyk (2)</TopText>
            <TopText>Ulubione (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Realizuj zamówienie</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/10854224/pexels-photo-10854224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <Details>
                  <ProductName>
                    <b>Oglądasz:</b>Spodnie dresowe basic
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>12561261978
                  </ProductId>
                  <ProductColor bgc="black" />
                  <ProductSize>
                    <b>Rozmiar:</b> 42
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>3</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>99zl</ProductPrice>
              </PriceDetail>
            </Product>
            <Line />
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/10854224/pexels-photo-10854224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <Details>
                  <ProductName>
                    <b>Oglądasz:</b>Spodnie dresowe basic
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>12561261978
                  </ProductId>
                  <ProductColor bgc="black" />
                  <ProductSize>
                    <b>Rozmiar:</b> 42
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>3</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>99zl</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Podsumowanie zamówienia:</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Wartość zamówienia:</SummaryItemText>
              <SummaryItemPrice>150 zl</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Przesyłka</SummaryItemText>
              <SummaryItemPrice>12 zl</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Kod promocyjny</SummaryItemText>
              <SummaryItemPrice>-10 zl</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="price">
              <SummaryItemText>Do zapłaty:</SummaryItemText>
              <SummaryItemPrice>152 zl</SummaryItemPrice>
            </SummaryItem>
            <Button>Realizuj zamówienie</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
