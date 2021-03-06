import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/Chart";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import {
  TitleWrap,
  Title,
  Button,
  Top,
  TopLeft,
  TopRight,
  InfoWrap,
  ProductInfo,
  ImageInfo,
  ProductName,
  Bottom,
  Item,
  Key,
  Value,
  Form,
  FormLeft,
  FormRight,
  Upload,
  ImageUpload,
  Label,
  Input,
  Select,
  Option,
} from "./Product";
import { Container } from "../../components/Container";
export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const months = useMemo(
    () => [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: months[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, months]);

  return (
    <Container padd>
      <TitleWrap>
        <Title>Edytuj produkt</Title>
      </TitleWrap>
      <Top>
        <TopLeft>
          <Chart
            data={pStats}
            dataKey="Sales"
            title="Sprzedaże"
            style={{ backgroundColor: "blue" }}
          />
        </TopLeft>
        <TopRight>
          <ProductInfo>
            <ImageInfo src={product.img} alt="product img" />
            <ProductName>{product.title}</ProductName>
          </ProductInfo>
          <InfoWrap>
            <Item>
              <Key>id:</Key>
              <Value>{product._id}</Value>
            </Item>
            <Item>
              <Key>Sprzedane:</Key>
              <Value>0</Value>
            </Item>
            <Item>
              <Key>Na stanie:</Key>
              <Value>
                {product.inStock.toString() === "true" ? "tak" : "nie"}
              </Value>
            </Item>
          </InfoWrap>
        </TopRight>
      </Top>
      <Bottom>
        <Form>
          <FormLeft>
            <Label padd>Nazwa produktu</Label>
            <Input type="text" placeholder={product.title} />
            <Label>Opis produktu</Label>
            <Input type="text" placeholder={product.desc} />
            <Label>Cena produktu</Label>
            <Input type="text" placeholder={product.price} />
            <Label>Na stanie</Label>
            <Select name="inStock" id="idStock">
              <Option value="true">Tak</Option>
              <Option value="false">Nie</Option>
            </Select>
          </FormLeft>
          <FormRight>
            <ImageUpload src={product.img} alt="product image" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: " center",
              }}
            >
              <Upload>
                <Label htmlFor="file">
                  <Publish
                    style={{
                      cursor: "pointer",
                      fontSize: "3em",
                      color: "#333",
                    }}
                  />
                </Label>
                <Input type="file" id="file" style={{ display: "none" }} />
              </Upload>
              <Button>Aktualizuj</Button>
            </div>
          </FormRight>
        </Form>
      </Bottom>
    </Container>
  );
}
