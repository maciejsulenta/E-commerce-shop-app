import Chart from "../../components/Chart";
import FeaturedInfo from "../../components/FeaturedInfo";
import WidgetSm from "../../components/WidgetSm";
import WidgetLg from "../../components/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { Widgets } from "./Home.js";
import { Container } from "../../components/Container";

export default function Home() {
  const [userStats, setUserStats] = useState([]);

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
        const res = await userRequest.get("/users/stats");
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) => {
          setUserStats((prev) => [
            ...prev,
            { name: months[item._id - 1], "założone konta": item.total },
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
        title="Statystyka rejestracji użytkowników"
        grid
        dataKey="założone konta"
      />
      <Widgets>
        <WidgetSm />
        <WidgetLg />
      </Widgets>
    </Container>
  );
}
