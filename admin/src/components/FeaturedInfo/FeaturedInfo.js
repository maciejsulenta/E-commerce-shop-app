import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;
export const Item = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 1em;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  background: ${(props) => props.bgc};
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    transform: skew(1.5deg, -1.5deg);
  }
`;
export const Title = styled.h2`
  font-size: 1.2em;
`;
export const MoneyContainer = styled.div`
  margin: 0.5em 0;
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
export const Sub = styled.span`
  font-size: 15px;
  color: #fff;
`;
export const ArrowGreen = styled(ArrowUpward)`
  color: green;
`;
export const ArrowRed = styled(ArrowDownward)`
  color: #b20a2c;
`;
