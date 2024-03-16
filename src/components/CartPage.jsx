import React from "react";
import "../styles/cartpage.scss";
import Cart from "../assets/images/cart/cartimg.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const CartPage = () => {
  return (
    <>
      <div>
        <div className="cart-container">
          <img src={Cart} alt="cart" className="cart-img" />
          <div className="div-cart">
            <div className="cart-text">Your Amazon Cart is empty</div>
            <div className="shop-text">Shop todays deals</div>
            <div>
              <button className="sign-in">Sign in to your account</button>
              <button className="sign-up">Sign up now</button>
            </div>
          </div>
        </div>
        <div className="text-lines">
          The price and availability of items at Amazon.in are subject to
          change. The shopping cart is a temporary place to store a list of your
          items and reflects
          <br /> each item's most recent price. <br /> Do you have a promotional
          code? We'll ask you to enter your claim code when it's time to pay.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
