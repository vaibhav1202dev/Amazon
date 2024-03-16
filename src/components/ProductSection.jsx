import React from "react";
import "../styles/productsection.scss";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Product1 from "../assets/images/productsection/productsec1.jpg";
import Product2 from "../assets/images/productsection/productsec2.jpg";
import Summer1 from "../assets/images/summer/summer1.jpg";
import Summer2 from "../assets/images/summer/summer2.jpg";
import Summer3 from "../assets/images/summer/summer3.jpg";
import Summer4 from "../assets/images/summer/summer4.jpg";
import Bestseller1 from "../assets/images/bestseller/bestseller1.jpg";
import Bestseller2 from "../assets/images/bestseller/bestseller2.jpg";
import Bestseller3 from "../assets/images/bestseller/bestseller3.jpeg";
import Bestseller4 from "../assets/images/bestseller/bestseller4.jpg";
import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <div>
      <div className="home-products">
        <div class="container">
          <div className="row">
            <div>
              <h3>Starting ₹99 | Start your fitness journey</h3>
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
                          src={Product1}
                          className="img"
                        />
                        <Card.Body>
                          <Card.Text className="product-text">
                            See more
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

      <div className="home-products-2">
        <div class="container">
          <div className="row">
            <div>
              <h3> Up to 20% off on | Summer Products</h3>
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
                        <Card.Img variant="top" src={Summer1} alt="Summer1" />
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
                        <Card.Img variant="top" src={Summer2} alt="Summer2" />
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
                        <Card.Img variant="top" src={Summer3} alt="Summer3" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Coolers
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
                        <Card.Img variant="top" src={Summer4} alt="Summer4" />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Top Refrigerators
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

      <div className="home-products-2a">
        <div class="container">
          <div className="row">
            <div>
              <h3>Customers’ Most-Loved Fashion for you</h3>
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
                          src={Bestseller1}
                          alt="Bestseller1"
                        />
                        <Card.Body>
                          <Card.Text className="product-text">Shoes</Card.Text>
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
                          src={Bestseller2}
                          alt="Bestseller2"
                        />
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
                          src={Bestseller3}
                          alt="Bestseller3"
                        />
                        <Card.Body>
                          <Card.Text className="product-text">
                            Bags & luggage
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
                          src={Bestseller4}
                          alt="Bestseller4"
                        />
                        <Card.Body>
                          <Card.Text className="product-text">
                            65+ iches TV
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

      <div className="home-products1a">
        <div class="container">
          <div className="row">
            <div>
              <h3> Minimum 50% off | Outdoor Lights </h3>
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
                        <Card.Img
                          variant="top"
                          src={Product2}
                          className="img"
                        />
                        <Card.Body>
                          <Card.Text className="product-text">
                            See more
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
  );
};

export default ProductSection;
