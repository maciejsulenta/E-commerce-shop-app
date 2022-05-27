import Chart from "../../components/Chart";
import FeaturedInfo from "../../components/FeaturedInfo";
import WidgetSm from "../../components/WidgetSm";
import WidgetLg from "../../components/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { Container, Widgets } from "./Home.js";

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) => {
          setUserStats((prev) => [
            ...prev,
            { name: months[item._id - 1], "Active User": item.total },
          ]);
        });
      } catch {}
    };
    getStats();
  }, [months]);

  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <Widgets>
        <WidgetSm />
        <WidgetLg />
      </Widgets>
    </Container>
  );
}
