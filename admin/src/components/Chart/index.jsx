import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Container, Title } from "./Chart.js";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#333" />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#13ab19"
            strokeWidth={4}
          />
          <Tooltip />
          {grid && <CartesianGrid stroke="#333" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
