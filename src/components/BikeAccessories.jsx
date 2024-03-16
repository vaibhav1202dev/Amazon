import React from "react";
import "../styles/furniturecarousel.scss";
import Carousel from "react-bootstrap/Carousel";
import Accessories1 from "../assets/images/accessories/accessories1.jpg";
import Accessories2 from "../assets/images/accessories/accessories2.jpg";
import Accessories3 from "../assets/images/accessories/accessories3.jpg";
import Accessories4 from "../assets/images/accessories/accessories4.jpg";
import Accessories5 from "../assets/images/accessories/accessories5.jpg";
import Accessories6 from "../assets/images/accessories/accessories6.jpg";
import Accessories7 from "../assets/images/accessories/accessories7.jpg";
import Accessories8 from "../assets/images/accessories/accessories8.jpg";
import Accessories9 from "../assets/images/accessories/accessories9.jpg";
import Accessories10 from "../assets/images/accessories/accessories10.jpg";
import { Link } from "react-router-dom";

const BikeAccessories = () => {
  return (
    <div className="second-carousel">
      <div>
        <Carousel className="furniture-carousel">
          <Carousel.Item interval={900000}>
            <span className="carousel-title">
              Up to 60% off | Car, bike parts & accessories
            </span>{" "}
            <span className="all-deal-text-3">See all deals</span>
            <div className="slider-products">
              <Link
                to="automotive"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Accessories1} className="caro-img" />
                <img src={Accessories2} className="caro-img" />

                <img src={Accessories3} className="caro-img" />

                <img src={Accessories4} className="caro-img" />

                <img src={Accessories5} className="caro-img" />
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={900000}>
            <span className="carousel-title">
              Up to 60% off | Car, bike parts & accessories
            </span>{" "}
            <span className="all-deal-text-3">See all deals</span>
            <div className="slider-products">
              <Link
                to="automotive"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Accessories6} className="caro-img" />
                <img src={Accessories7} className="caro-img" />

                <img src={Accessories8} className="caro-img" />

                <img src={Accessories9} className="caro-img" />

                <img src={Accessories10} className="caro-img" />
              </Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default BikeAccessories;
