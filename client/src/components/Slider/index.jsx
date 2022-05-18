import React, { useState } from "react";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import {
  Container,
  Arrow,
  Wrapper,
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

  return (
    <Container>
      <Arrow pos="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bgc={item.bgc} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SPRAWDŹ TERAZ</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow pos="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
