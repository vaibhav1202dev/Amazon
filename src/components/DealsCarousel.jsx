import React from "react";
import "../styles/dealcarousel.scss";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../assets/images/slider/slider1.jpg";
import Slider2 from "../assets/images/slider/slider2.jpg";
import Slider3 from "../assets/images/slider/slider3.jpg";
import Slider4 from "../assets/images/slider/slider4.jpg";
import Slider5 from "../assets/images/slider/slider5.jpg";
import Slider6 from "../assets/images/slider/slider6.jpg";
import Slider7 from "../assets/images/slider/slider7.jpg";
import Slider8 from "../assets/images/slider/slider8.jpg";
import Slider9 from "../assets/images/slider/slider9.jpg";
import Slider10 from "../assets/images/slider/slider10.jpg";
import { Link } from "react-router-dom";

const DealsCarousel = () => {
  return (
    <div className="caro">
      <div>
        <span className="carousel-title">Today’s Deals</span>{" "}
        <span className="all-deal-text">See all deals</span>
        <Carousel>
          <Carousel.Item>
            <div className="slider-products">
              <Link
                to="mobiles"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Slider1} className="caro-img" />
                <img src={Slider2} className="caro-img" />

                <img src={Slider3} className="caro-img" />

                <img src={Slider4} className="caro-img" />

                <img src={Slider5} className="caro-img" />
              </Link>
            </div>
            <div>
              <span className="slider-1">
                <span className="of-text">up to 27% of </span>
                <span className="deal-text">Limited time deal</span>
                <br />
                <span className="info-text">OnePlus Nord CE 3 Lite 5G</span>
              </span>
              <span className="slider-2">
                <span className="of-text-2">up to 15% of </span>

                <span className="deal-text-2">Limited time deal</span>
                <br />
                <span className="info-text-2">Redmi 13c</span>
              </span>
              <span className="slider-3">
                <span className="of-text-3">up to 24% of </span>

                <span className="deal-text-3">Limited time deal</span>
                <br />
                <span className="info-text-3">Iqoo Z6 Lite 5G</span>
              </span>
              <span className="slider-4">
                <span className="of-text-4">up to 23% of </span>

                <span className="deal-text-4">Limited time deal</span>
                <br />
                <span className="info-text-4">Poco C51</span>
              </span>
              <span className="slider-5">
                <span className="of-text-5">up to 11% of </span>

                <span className="deal-text-5">Limited time deal</span>
                <br />
                <span className="info-text-5">Iqoo Neo 7 Pro 5G</span>
              </span>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slider-products">
              <Link
                to="style"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Slider6} className="caro-img" />
              </Link>
              <Link
                to="kitchen"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Slider7} className="caro-img" />
              </Link>

              <Link
                to="style"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Slider8} className="caro-img" />
              </Link>
              <Link
                to="kitchen"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Slider9} className="caro-img" />
              </Link>
              <Link
                to="style"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={Slider10} className="caro-img" />
              </Link>
            </div>
            <div>
              <span className="slider-1">
                <span className="of-text">up to 60% of </span>
                <span className="deal-text">Limited time deal</span>
                <br />
                <span className="info-text">Explore women's fashion</span>
              </span>
              <span className="slider-2">
                <span className="of-text-2">up to 50% of </span>

                <span className="deal-text-2">Limited time deal</span>
                <br />
                <span className="info-text-2">Elevate your kitchen</span>
              </span>
              <span className="slider-3">
                <span className="of-text-3">up to 10% of </span>

                <span className="deal-text-3">Limited time deal</span>
                <br />
                <span className="info-text-3">Lightest Luggage Ever</span>
              </span>
              <span className="slider-4">
                <span className="of-text-4">up to 75% of </span>

                <span className="deal-text-4">Limited time deal</span>
                <br />
                <span className="info-text-4">
                  Best Offers on Storage Products
                </span>
              </span>
              <span className="slider-5">
                <span className="of-text-5">up to 40% of </span>

                <span className="deal-text-5">Limited time deal</span>
                <br />
                <span className="info-text-5">Top Deals On Shoes</span>
              </span>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default DealsCarousel;
