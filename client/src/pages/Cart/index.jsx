import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../utils/requestMethods";
import { Container } from "../../components/Container";
import { Add, Remove } from "@material-ui/icons";
import {
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
  AmountButton,
} from "./Cart";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  let history = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history("../success", { data: res.data });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Announcement />
      <Navbar />
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
                      <b>Oglądasz:</b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>
                      {product._id}
                    </ProductId>
                    <ProductColor bgc={product.color} />
                    <ProductSize>
                      <b>Rozmiar:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AmountButton>
                      <Add />
                    </AmountButton>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <AmountButton>
                      <Remove />
                    </AmountButton>
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity} zł
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <Title>Podsumowanie zamówienia</Title>
            <SummaryItem>
              <SummaryItemText>Wartość zamówienia:</SummaryItemText>
              <SummaryItemPrice>{cart.total} zł</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Przesyłka</SummaryItemText>
              <SummaryItemPrice>12 zł</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Kod promocyjny</SummaryItemText>
              <SummaryItemPrice>-12 zł</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="price">
              <SummaryItemText>Do zapłaty:</SummaryItemText>
              <SummaryItemPrice>{cart.total} zł</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="sklepik"
              image="https://avatars.githubusercontent.com/u/84193424?s=400&u=fc39e91864cc37cd078e9f412bd251159e7e4a8c&v=4"
              billingAddress
              shippingAddress
              description={`Koszt zamowienia wynosi: ${cart.total} zl`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>Realizuj zamówienie</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
