import React from "react";
import "../styles/navbar.scss";
import logo from "../assets/images/logo/Amazon-logo.jpg";
import Flag from "../assets/images/logo/india-flag.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <img className="amz-logo" src={logo} alt="Amazon Logo" />
      </Link>
      <div className="location-icon">
        <IoLocationOutline />
      </div>

      <div className="location-text">
        Dilivering to Pune <br />
        <span>Updated location</span>
      </div>

      <div className="header__search">
        <button className="all-text-btn">
          All
          <TiArrowSortedDown className="down-arrow" />
        </button>
        <input className="header__searchInput" type="text" />
        <button className="search-btn ">
          {" "}
          <FaMagnifyingGlass />
        </button>
      </div>
      <img className="flag" src={Flag} alt="India-flag" />
      <div className="lang">EN</div>
      <TiArrowSortedDown className="flag-arrow" />
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, sign in</span>
          <span className="header__optionLineTwo">
            Account & Lists <TiArrowSortedDown className="flag-arrow" />
          </span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div>
          <Link
            to="cartpage"
            style={{ color: "#131921" }}
            onClick={() => window.scrollTo(0, 0)}
          >
            <HiOutlineShoppingCart className="cart-icon" />
            <div className="header__optionBasket">
              <span>0</span>
              <span className="header__optionLineTwo header__basketCount">
                Cart
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
