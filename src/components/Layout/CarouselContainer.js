import React from "react";
import { Carousel } from "react-bootstrap";

import image1 from "./Images/bg1.png";
import image2 from "./Images/2.png";
import image3 from "./Images/3.jpg";
import image4 from "./Images/4.jpg";
import image5 from "./Images/5.jpg";
import image6 from "./Images/6.jpg";
import image7 from "./Images/7.jpg";
import image8 from "./Images/8.png";
import image9 from "./Images/9.jpg";

const CarouselContainer = () => {
  return (
    <Carousel pause={false}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-80"
          src={image1}
          alt="First slide"
          style={{ height: "70vh" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-80"
          src={image2}
          alt="Third slide"
          style={{ height: "70vh" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-80"
          src={image4}
          alt="Third slide"
          style={{ height: "70vh" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-80"
          src={image5}
          alt="Third slide"
          style={{ height: "70vh" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-80"
          src={image6}
          alt="Third slide"
          style={{ height: "70vh" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-80"
          src={image7}
          alt="Third slide"
          style={{ height: "70vh" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-80"
          src={image8}
          alt="Third slide"
          style={{ height: "70vh" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-80"
          src={image9}
          alt="Third slide"
          style={{ height: "70vh" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
