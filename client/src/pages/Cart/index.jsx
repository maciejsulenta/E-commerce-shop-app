import React from "react";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
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
  const cart = useSelector((state) => state.cart);

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
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Oglądasz:</b>{product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>{product._id}
                    </ProductId>
                    <ProductColor bgc={product.color} />
                    <ProductSize>
                      <b>Rozmiar:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>{product.price*product.quantity}zl</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Line />
          </Info>
          <Summary>
            <SummaryTitle>Podsumowanie zamówienia:</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Wartość zamówienia:</SummaryItemText>
              <SummaryItemPrice>{cart.total} zl</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Przesyłka</SummaryItemText>
              <SummaryItemPrice>12 zl</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Kod promocyjny</SummaryItemText>
              <SummaryItemPrice>-12 zl</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="price">
              <SummaryItemText>Do zapłaty:</SummaryItemText>
              <SummaryItemPrice>{cart.total} zl</SummaryItemPrice>
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
