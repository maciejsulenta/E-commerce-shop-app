import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 1em;
`;
export const Title = styled.h2`
  font-size: 1.8em;
  font-weight: 300;
  text-align: center;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  @media screen and (max-width: 550px) {
    font-size: 1.1em;
  }
`;
export const TopButton = styled.button`
  font-size: 0.7em;
  font-family: ${theme.fonts};
  padding: 0.8em 2em;
  margin-bottom: 0.5em;
  border-radius: 1em;
  border: none;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.platinum};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${theme.colors.darkBlue};
  }
`;
export const TopTexts = styled.div`
  display: flex;
  gap: 1em;
`;
export const TopText = styled.span`
  align-self: center;
  font-size: 0.7em;
  font-family: ${theme.fonts};
  padding: 0.8em 2em;
  margin-bottom: 0.5em;
  border-radius: 1em;
  border: none;
  background-color: ${theme.colors.platinum};
  color: ${theme.colors.black};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.black};
    color: ${theme.colors.platinum};
  }
`;

//////////////////////////////////////////////////////////////

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 3em;
  padding: 3em;
  border-radius: 1em;
  background-color: ${theme.colors.blue};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Info = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;
export const Product = styled.div`
  width: 100%;
  height: 10em;
  display: flex;
  justify-content: space-between;
  border-radius: 1em;
  background-color: ${theme.colors.platinum};
  /* -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6); */
`;
export const ProductDetail = styled.div`
  flex: 4;
  display: flex;
`;
export const Image = styled.div`
  flex: 3;
  min-width: 100px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 1em 0 0 1em;

  @media screen and (max-width: 550px) {
    min-width: 70px;
  }
`;
export const Details = styled.div`
  flex: 8;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProductName = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 0.7em;
  width: 80%;
`;
export const ProductId = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 0.7em;
`;
export const ProductColor = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${(props) => props.bgc};
`;
export const ProductSize = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 0.7em;
`;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.platinum};
  border-radius: 0 1em 1em 0;
`;
export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
export const ProductAmount = styled.span`
  font-size: 1.2em;
`;
export const ProductPrice = styled.span`
  font-size: 1.3em;
  font-weight: 200;
`;
export const AmountButton = styled.div`
  padding: 0.3em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.platinum};
  }
`;

export const Summary = styled.div`
  flex: 3;
  border-radius: 1em;
  padding: 1em;
  height: 100%;
  background-color: ${theme.colors.platinum};
`;
export const SummaryTitle = styled.h1`
  font-weight: 200;
`;
export const SummaryItem = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.type ? "600" : "400")};
  font-size: ${(props) => (props.type ? "1.4em" : "0.9em")};
`;
export const SummaryItemText = styled.span``;
export const SummaryItemPrice = styled.span``;
export const Button = styled.button`
  width: 100%;
  font-size: 1em;
  font-family: ${theme.fonts};
  padding: 1.2em 2em;
  margin-bottom: 0.5em;
  border-radius: 1em;
  border: none;
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.platinum};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${theme.colors.blue};
  }
`;
