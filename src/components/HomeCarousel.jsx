import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/homecarousel.scss";
import BG1 from "../assets/images/homecarousel/bg1.jpg";
import BG2 from "../assets/images/homecarousel/bg2.jpg";
import BG3 from "../assets/images/homecarousel/bg3.jpg";
import BG4 from "../assets/images/homecarousel/bg4.jpg";
import BG5 from "../assets/images/homecarousel/bg5.jpg";
import BG6 from "../assets/images/homecarousel/bg6.jpg";
import BG7 from "../assets/images/homecarousel/bg7.jpg";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carousel-imgs">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={BG1} alt="Carousel Slide" className="carousel-bg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BG2} alt="Carousel Slide" className="carousel-bg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BG3} alt="Carousel Slide" className="carousel-bg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BG4} alt="Carousel Slide" className="carousel-bg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BG5} alt="Carousel Slide" className="carousel-bg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BG6} alt="Carousel Slide" className="carousel-bg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BG7} alt="Carousel Slide" className="carousel-bg" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
