import React from "react";
import "../styles/products.scss";
import { Link } from "react-router-dom";
import { items } from "../alldata/AllData";
import Footer from "../components/Footer";
import Homep from "../assets/images/home/homep.jpg";

const Automotive = () => {
  const filteredItems = items.filter((item) => item.category === "automotive");

  return (
    <div>
      <div className="main-container">
        <div className="container">
          <img src={Homep} alt="homep" className="home-p" />
          <div>
            {" "}
            <Link to="/" className="home-link">
              HOME PAGE{" "}
            </Link>
          </div>
          <div className="products-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="product">
                <Link to="home" className="link">
                  <div className="product-header">
                    <img src={item.img} alt="product1" />
                  </div>
                  <div className="product-details ">
                    <p>{item.description}</p>
                    <p className="item-price">{item.price}₹</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Automotive;
