import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import {
  Container,
  Arrow,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Button,
} from "./Slider";

// import Landing from "../../utils/images/landing.svg";
// import Landing1 from "../../utils/images/landing1.svg";
// import Landing2 from "../../utils/images/landing2.svg";
import { sliderItems } from "../../utils/data/data";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleClick();
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <Container>
      <Arrow pos="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Slide bgc="#d6dbde" src={sliderItems[slideIndex].img}>
        <InfoContainer>
          <Title>{sliderItems[slideIndex].title}</Title>
          <Desc>{sliderItems[slideIndex].desc}</Desc>
          <Link to={sliderItems[slideIndex].link}>
            <Button>Sprawdź teraz</Button>
          </Link>
        </InfoContainer>
      </Slide>
      <Arrow pos="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
