import React from "react";
import "../styles/headerline.scss";
import { IoMenu } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from "react-bootstrap/Stack";
const HeaderLine = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="header-line">
      <Button variant="none" onClick={handleShow} className="canvas-btn">
        <IoMenu className="menu-icon" />
        <div className="header-line-text"> All</div>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="canvas-title">
          <Offcanvas.Title className="canvas-title">
            <div className="canvas-title-text">Hello, sign in</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            <div className="p-2 header-canvas-title">Trending</div>
            <div className="p-2">Best Sellers</div>
            <div className="p-2">New Releases</div>
            <div className="p-2">Movers and Shakers</div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="headers-menu-list">
        <span className="header-span-1">Amazon miniTV</span>
        <span className="header-span">Sell</span>
        <span className="header-span">Best Seller</span>
        <span className="header-span">Mobiles</span>
        <span className="header-span">Todays Deals</span>
        <span className="header-span">Electronics</span>
        <span className="header-span">Customer Service</span>
        <span className="header-span">Prime</span>
        <TiArrowSortedDown className="span-arrow" />
        <span className="span-text">
          New Launches from Mobiles, Electronics & more | Shop now
        </span>
      </div>
    </div>
  );
};

export default HeaderLine;
