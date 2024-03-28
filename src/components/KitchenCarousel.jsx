import React from "react";
import "../styles/furniturecarousel.scss";
import Carousel from "react-bootstrap/Carousel";
import Kitchen1 from "../assets/images/kitchen/kitchen1.jpg";
import Kitchen2 from "../assets/images/kitchen/kitchen2.jpg";
import Kitchen3 from "../assets/images/kitchen/kitchen3.jpg";
import Kitchen4 from "../assets/images/kitchen/kitchen4.jpg";
import Kitchen5 from "../assets/images/kitchen/kitchen5.jpg";
import Kitchen6 from "../assets/images/kitchen/kitchen6.jpg";
import Kitchen7 from "../assets/images/kitchen/kitchen7.jpg";
import Kitchen8 from "../assets/images/kitchen/kitchen8.jpg";
import Kitchen9 from "../assets/images/kitchen/kitchen9.jpg";
import Kitchen10 from "../assets/images/kitchen/kitchen10.jpg";
import { Link } from "react-router-dom";

const KitchenCarousel = () => {
  return (
    <div className="second-carousel">
      <div>
        <Carousel className="furniture-carousel">
          <Carousel.Item interval={900000}>
            <span className="carousel-title">
              Up to 50% off | Elevate your kitchen aesthetics with best kitchen
              appliances
            </span>{" "}
            <span className="all-deal-text-2">See all deals</span>
            <div className="slider-products">
              <Link
                to="kitchen"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Kitchen6} className="caro-img" />
                <img src={Kitchen7} className="caro-img" />

                <img src={Kitchen8} className="caro-img" />

                <img src={Kitchen9} className="caro-img" />

                <img src={Kitchen10} className="caro-img" />
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={900000}>
            <span className="carousel-title">
              Up to 50% off | Elevate your kitchen aesthetics with best kitchen
              appliances.
            </span>{" "}
            <span className="all-deal-text-2">See all deals.</span>
            <div className="slider-products">
              <Link
                to="kitchen"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Kitchen1} className="caro-img" />
                <img src={Kitchen2} className="caro-img" />

                <img src={Kitchen3} className="caro-img" />

                <img src={Kitchen4} className="caro-img" />

                <img src={Kitchen5} className="caro-img" />
              </Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default KitchenCarousel;
