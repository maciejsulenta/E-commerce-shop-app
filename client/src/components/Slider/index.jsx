import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import {
  Container,
  Arrow,
  Slide,
  InfoContainer,
  Title,
  Desc,
  Button,
} from "./Slider";

import { sliderItems } from "../../utils/data/data";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const direction = "left";

  const handleClick = useCallback(() => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }, [slideIndex, direction]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleClick();
    }, 8000);

    return () => clearInterval(interval);
  }, [handleClick]);

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
