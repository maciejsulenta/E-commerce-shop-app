import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import {
  Container,
  Item,
  Title,
  MoneyContainer,
  Money,
  MoneyRate,
  Sub,
  ArrowGreen,
  ArrowRed,
} from "./FeaturedInfo";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <Container>
      <Item bgc="linear-gradient(to right, #904e95, #e96443);">
        <Title>Przychód</Title>
        <MoneyContainer>
          <Money>{income[1]?.total} zł</Money>
          <MoneyRate>
            {Math.floor(perc)} % {perc < 0 ? <ArrowRed /> : <ArrowGreen />}
          </MoneyRate>
        </MoneyContainer>
        <Sub>w porównaniu do poprzedniego miesiąca</Sub>
      </Item>

      <Item bgc="linear-gradient(to left, #6DD5FA, #2980B9);">
        <Title>Obroty</Title>
        <MoneyContainer>
          <Money>2000 zł</Money>
          <MoneyRate>{perc < 0 ? <ArrowRed /> : <ArrowGreen />}</MoneyRate>
        </MoneyContainer>
        <Sub>w porównaniu do poprzedniego miesiąca</Sub>
      </Item>

      <Item bgc="linear-gradient(to right, #56ab2f, #a8e063);">
        <Title>Koszta</Title>
        <MoneyContainer>
          <Money>990 zł</Money>
          <MoneyRate>{-perc < 0 ? <ArrowRed /> : <ArrowGreen />}</MoneyRate>
        </MoneyContainer>
        <Sub>w porównaniu do poprzedniego miesiąca</Sub>
      </Item>
    </Container>
  );
}
