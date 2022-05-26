import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";
import {
  Container,
  Title,
  Table,
  TableRow,
  TableHeader,
  TableCellName,
  TableCellDate,
  TableCellAmount,
  TableCellStatus,
  StyledButton,
} from "./WidgetLg";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <StyledButton status={type}>{type}</StyledButton>;
  };
  return (
    <Container>
      <Title>Ostatnie transakcje</Title>
      <Table>
        <TableRow>
          <tr>
            <TableHeader>ID klienta</TableHeader>
            <TableHeader>Data</TableHeader>
            <TableHeader>Ilość</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </TableRow>

        {orders.map((order) => (
          <TableRow key={order._id}>
            <tr>
              <TableCellName>{order.userId}</TableCellName>
              <TableCellDate>{format(order.createdAt)}</TableCellDate>
              <TableCellAmount>{order.amount} zł</TableCellAmount>
              <TableCellStatus>
                <Button type={order.status} />
              </TableCellStatus>
            </tr>
          </TableRow>
        ))}
      </Table>
    </Container>
  );
}
