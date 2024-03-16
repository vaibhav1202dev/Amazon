import React from "react";
import "../styles/footer.scss";
import AmazonLogo from "../assets//images/logo/Amazon-logo.jpg";
import { IoIosGlobe } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="back-top" onClick={() => window.scrollTo(0, 0)}>
          {" "}
          Back to top
        </div>
        <div className="footer-section">
          <div>
            <span className="footer-title">Get to Know Us </span>
            <br />
            <div className="footer-row">
              About Us
              <br />
              Careers
              <br />
              Press Releases
              <br />
              Amazon Science
            </div>
          </div>
          <div>
            {" "}
            <span className="footer-title"> Connect with Us</span> <br />
            <div className="footer-row">
              Facebook <br />
              Twitter <br />
              Instagram
            </div>
          </div>
          <div>
            {" "}
            <span className="footer-title">Make Money with Us </span>
            <br />
            <div className="footer-row">
              Sell on Amazon <br />
              Sell under Amazon Accelerator <br />
              Protect and Build Your Brand <br />
              Protect and Build Your Brand <br /> Amazon Global Selling
              <br />
              Become an Affiliate
              <br />
              Fulfilment by Amazon
              <br />
              Advertise Your Products
              <br />
              Amazon Pay on Merchants
            </div>
          </div>
          <div>
            {" "}
            <span className="footer-title"> Let Us Help You</span>
            <br />
            <div className="footer-row">
              COVID-19 and Amazon <br />
              Your Account <br />
              Returns Centre <br />
              100% Purchase Protection <br />
              Amazon App Download <br />
              Help
            </div>
          </div>
        </div>
        <div className="divider-line"></div>
        <div className="footer-logo">
          <img className="amazon-logo-footer" src={AmazonLogo} />
          <span className="footer-lang">
            <span className="globe">
              {" "}
              <IoIosGlobe />{" "}
            </span>
            English
            <TiArrowUnsorted className="arrow1" />
          </span>
        </div>
        <div className="country-names">
          Australia Brazil Canada China France Germany Italy Japan Mexico
          Netherlands Poland Singapore Spain Turkey United Arab Emirates
        </div>
      </div>

      <div className="down-footer">
        <div className="down-footer-section">
          <div>
            <span className="down-footer-title">AbeBooks </span>
            <br />
            <div className="down-footer-row">
              Books, art
              <br />
              & collectibles
              <br />
              <div className="list-title">Shopbop</div>
              <br />
              Disigner <br />
              Fashion Brands
            </div>
          </div>
          <div>
            {" "}
            <span className="down-footer-title"> Amazon Web Services</span>{" "}
            <br />
            <div className="down-footer-row">
              Scalable cloud <br />
              Computing Services
              <div className="list-title">Amazon Business</div>
              <br />
              Everything for <br />
              your Business
            </div>
          </div>
          <div>
            {" "}
            <span className="down-footer-title">Audible</span>
            <br />
            <div className="down-footer-row">
              Download <br />
              Audio Books
              <br />
              <div className="list-title">Prime Now</div>
              <br />
              2-Hours Delivery
              <br />
              on Everyday Items
            </div>
          </div>
          <div>
            {" "}
            <span className="down-footer-title"> IMDb</span>
            <br />
            <div className="down-footer-row">
              Movies, TV <br />
              & Celebrities <br />
              <div className="list-title">Amazon Prime Music</div> <br />
              100 million songs ad-free <br />
              Over 15 million podcast episodes
            </div>
          </div>
        </div>
        <div className="lnc-line">
          Conditions of Use & Sale &nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;
          Interest-Based Ads <br />
        </div>
        <div className="last-line">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
};

export default Footer;
