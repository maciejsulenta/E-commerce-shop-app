import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Item = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const Title = styled.h2`
  font-size: 20px;
`;
export const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;
export const Money = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
export const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
export const Icon = styled.div`
  font-size: 14px;
  margin-left: 5px;
  color: ${(props) => (props.color ? "red" : "green")};
`;
export const Sub = styled.span`
  font-size: 15px;
  color: gray;
`;
export const ArrowGreen = styled(ArrowUpward)`
color: green;
`
export const ArrowRed = styled(ArrowDownward)`
color: red;
`