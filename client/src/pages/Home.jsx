import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { Title } from "../components/Categories/Categories";
import { Container } from "../components/Container";
const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Title>Najnowsze produkty w naszym sklepie</Title>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
