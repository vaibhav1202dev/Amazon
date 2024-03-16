import React from "react";
import "../styles/furniturecarousel.scss";
import Carousel from "react-bootstrap/Carousel";
import Furniture1 from "../assets/images/furniture/furniture1.jpg";
import Furniture2 from "../assets/images/furniture/furniture2.jpg";
import Furniture3 from "../assets/images/furniture/furniture3.jpg";
import Furniture4 from "../assets/images/furniture/furniture4.jpg";
import Furniture5 from "../assets/images/furniture/furniture5.jpg";
import Furniture6 from "../assets/images/furniture/furniture6.jpg";
import Furniture7 from "../assets/images/furniture/furniture7.jpg";
import Furniture8 from "../assets/images/furniture/furniture8.jpg";
import Furniture9 from "../assets/images/furniture/furniture9.jpg";
import Furniture10 from "../assets/images/furniture/furniture10.jpg";
import { Link } from "react-router-dom";

const FurnitureCarousel = () => {
  return (
    <div className="second-carousel">
      <div>
        <Carousel className="furniture-carousel">
          <Carousel.Item interval={900000}>
            <span className="carousel-title">
              Up to 50% off | Curated furniture to enhance your home from stores
              near you
            </span>{" "}
            <span className="all-deal-text-2">See all deals</span>
            <div className="slider-products">
              <Link
                to="home"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Furniture1} className="caro-img" />
                <img src={Furniture2} className="caro-img" />

                <img src={Furniture3} className="caro-img" />

                <img src={Furniture4} className="caro-img" />

                <img src={Furniture5} className="caro-img" />
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={900000}>
            <span className="carousel-title">
              Up to 50% off | Curated furniture to enhance your home from stores
              near you
            </span>{" "}
            <span className="all-deal-text-2">See all deals</span>
            <div className="slider-products">
              <Link
                to="home"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Furniture6} className="caro-img" />
                <img src={Furniture7} className="caro-img" />

                <img src={Furniture8} className="caro-img" />

                <img src={Furniture9} className="caro-img" />

                <img src={Furniture10} className="caro-img" />
              </Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default FurnitureCarousel;
