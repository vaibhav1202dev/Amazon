import React from "react";
import "../styles/homepageproducts.scss";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Ac from "../assets/images/products/ac.jpg";
import Frige from "../assets/images/products/frige.jpg";
import Microwave from "../assets/images/products/microwave.jpg";
import Wmachine from "../assets/images/products/washingmachine.jpg";
import Home1 from "../assets/images/home/home1.jpg";
import Home2 from "../assets/images/home/home2.jpg";
import Home3 from "../assets/images/home/home3.jpg";
import Home4 from "../assets/images/home/home4.jpg";
import Style1 from "../assets/images/style/style1.jpg";
import Style2 from "../assets/images/style/style2.jpg";
import Style3 from "../assets/images/style/style3.jpg";
import Style4 from "../assets/images/style/style4.jpg";
import Clean1 from "../assets/images/clean/clean1.jpg";
import Clean2 from "../assets/images/clean/clean2.jpg";
import Clean3 from "../assets/images/clean/clean3.jpg";
import Clean4 from "../assets/images/clean/clean4.jpg";
import Automotive1 from "../assets/images/automotive/automotive1.jpg";
import Automotive2 from "../assets/images/automotive/automotive2.jpg";
import Automotive3 from "../assets/images/automotive/automotive3.jpg";
import Automotive4 from "../assets/images/automotive/automotive4.jpg";
import Headphone1 from "../assets/images/headphone/headphone1.jpg";
import Headphone2 from "../assets/images/headphone/headphone2.jpg";
import Headphone3 from "../assets/images/headphone/headphone3.jpg";
import Headphone4 from "../assets/images/headphone/headphone4.jpg";
import Cloth1 from "../assets/images/cloth/cloth1.jpg";
import Cloth2 from "../assets/images/cloth/cloth2.jpg";
import Cloth3 from "../assets/images/cloth/cloth3.jpg";
import Cloth4 from "../assets/images/cloth/cloth4.jpg";
import Businesses1 from "../assets/images/businesses/businesses1.jpg";
import Businesses2 from "../assets/images/businesses/businesses2.jpg";
import Businesses3 from "../assets/images/businesses/businesses3.jpg";
import Businesses4 from "../assets/images/businesses/businesses4.jpg";
import { Link } from "react-router-dom";
import { items } from "../alldata/AllData";
const HomePageProducts = () => {
  return (
    <div className="home">
      <div className="home-page-products">
        <div class="container">
          <div className="row">
            <div>
              <h3>Revamp your home in style</h3>
            </div>
            <div className="col">
              {" "}
              <Link
                to="home"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Home1} alt="home1" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Cushion covers, bedsheets & more
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
            <div className="col">
              {" "}
              <Link
                to="home"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Home2} alt="home2" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Fingurines, vases and more
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
            <div className="mar"></div>
            <div className="col">
              {" "}
              <Link
                to="home"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Home3} alt="home3" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Home storage
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
            <div className="col">
              {" "}
              <Link
                to="home"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Home4} alt="home4" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Lightnig solutions
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="home-page-products-2">
        <div class="container">
          <div className="row">
            <div>
              <h3>Appliances for your home | Up to 55% off</h3>
            </div>
            <div className="col">
              {" "}
              <Link
                to="appliances"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        {" "}
                        <Card.Img variant="top" src={Ac} alt="Ac" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Air conditioners
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
            <div className="col">
              {" "}
              <Link
                to="appliances"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Frige} />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Refrigerators
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
            <div className="mar"></div>
            <div className="col">
              {" "}
              <Link
                to="appliances"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Microwave} alt="micro" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Microwaves
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
            <div className="col">
              {" "}
              <Link
                to="appliances"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Wmachine} alt="wmachine" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Washing machines
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="home-page-products-3">
        <div class="container">
          <div className="row">
            <div>
              <h3>Up to 60% off | Styles for men</h3>
            </div>
            <div className="col">
              {" "}
              <Link
                to="style"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Style1} alt="style1" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Clothing
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
            <div className="col">
              {" "}
              <Link
                to="style"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Style2} alt="Style2" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Footwear
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
            <div className="mar"></div>
            <div className="col">
              {" "}
              <Link
                to="style"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Style3} alt="Style3" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Watches
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
            <div className="col">
              {" "}
              <Link
                to="style"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Style4} alt="Style4" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Bag & wallets
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="home-page-products-4">
        <div class="container">
          <div className="row">
            <div>
              <h3>Starting ₹99 | All your home improvement...</h3>
            </div>
            <div className="col">
              {" "}
              <Link
                to="home"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Clean1} alt="clean1" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Spin mops, wipes
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
            <div className="col">
              {" "}
              <Link
                to="home"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Clean2} alt="clean2" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Bathroom hardwa..
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
            <div className="mar"></div>
            <div className="col">
              {" "}
              <Link
                to="home"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Clean3} alt="clean3" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Hammers, srewdrivers
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
            <div className="col">
              {" "}
              <Link
                to="home"
                className="link-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Row xs={1} md={1} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card border="0">
                        <Card.Img variant="top" src={Clean4} alt="clean4" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Extention boards, plugs & more
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* second row start */}
      <div>
        <div className="home-page-products-1a">
          <div class="container">
            <div className="row">
              <div>
                <h3>Automotive essentials | Up to 60% off</h3>
              </div>
              <div className="col">
                {" "}
                <Link
                  to="automotive"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img variant="top" src={Automotive1} />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Spray and wipe
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
              <div className="col">
                {" "}
                <Link
                  to="automotive"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img
                            variant="top"
                            src={Automotive2}
                            alt="Automotive2"
                          />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Cleanig accessories
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
              <div className="mar"></div>
              <div className="col">
                {" "}
                <Link
                  to="automotive"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img
                            variant="top"
                            src={Automotive3}
                            alt="Automotive3"
                          />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Helmets
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
              <div className="col">
                {" "}
                <Link
                  to="automotive"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img
                            variant="top"
                            src={Automotive4}
                            alt="Automotive4"
                          />
                          <Card.Body>
                            <Card.Text className="product-text">
                              vacuum cleaner
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="home-page-products-2a">
          <div class="container">
            <div className="row">
              <div>
                <h3>Up to 75% off | Headphones</h3>
              </div>
              <div className="col">
                {" "}
                <Link
                  to="style"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img
                            variant="top"
                            src={Headphone1}
                            alt="headphone1"
                          />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Up to 75% | boAt
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
              <div className="col">
                {" "}
                <Link
                  to="style"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img
                            variant="top"
                            src={Headphone2}
                            alt="Headphone2"
                          />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Up to 75% | boult
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
              <div className="mar"></div>
              <div className="col">
                {" "}
                <Link
                  to="style"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img
                            variant="top"
                            src={Headphone3}
                            alt="Headphone3"
                          />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Up to 75% | Noise
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
              <div className="col">
                {" "}
                <Link
                  to="style"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img
                            variant="top"
                            src={Headphone4}
                            alt="Headphone4"
                          />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Up to 75% | Zebronics
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="home-page-products-3a">
          <div class="container">
            <div className="row">
              <div>
                <h3>Under ₹499 | Pocket-friendly fashion</h3>
              </div>
              <div className="col">
                {" "}
                <Link
                  to="style"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img variant="top" src={Cloth1} alt="Cloth1" />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Clothing
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
              <div className="col">
                {" "}
                <Link
                  to="style"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img variant="top" src={Cloth2} alt="Cloth2" />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Bagpacks
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
              <div className="mar"></div>
              <div className="col">
                {" "}
                <Link
                  to="style"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img variant="top" src={Cloth3} alt="Cloth3" />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Footwear
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
              <div className="col">
                {" "}
                <Link
                  to="style"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img variant="top" src={Cloth4} alt="Cloth4" />
                          <Card.Body>
                            <Card.Text className="product-text">
                              View all
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="home-page-products-4a">
          <div class="container">
            <div className="row">
              <div>
                <h3>Top rated products for your home | 60% off</h3>
              </div>
              <div className="col">
                {" "}
                <Link
                  to="appliances"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img
                            variant="top"
                            src={Businesses1}
                            alt="Businesses1"
                          />
                          <Card.Body>
                            <Card.Text className="product-text">Fans</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
              <div className="col">
                {" "}
                <Link
                  to="appliances"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img
                            variant="top"
                            src={Businesses2}
                            alt="Businesses2"
                          />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Coolers & heaters
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
              <div className="mar"></div>
              <div className="col">
                {" "}
                <Link
                  to="appliances"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img
                            variant="top"
                            src={Businesses3}
                            alt="Businesses3"
                          />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Water purifiers
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
              <div className="col">
                {" "}
                <Link
                  to="appliances"
                  className="link-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Row xs={1} md={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                      <Col key={idx}>
                        <Card border="0">
                          <Card.Img
                            variant="top"
                            src={Businesses4}
                            alt="Businesses4"
                          />
                          <Card.Body>
                            <Card.Text className="product-text">
                              Ovens, toaster & grills
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second row end */}
    </div>
  );
};

export default HomePageProducts;
