import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import HomePageProducts from "../components/HomePageProducts";
import DealsCarousel from "../components/DealsCarousel";
import FurnitureCarousel from "../components/FurnitureCarousel";
import KitchenCarousel from "../components/KitchenCarousel";
import ProductSection from "../components/ProductSection";
import BikeAccessories from "../components/BikeAccessories";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <HomePageProducts />
      <DealsCarousel />
      <FurnitureCarousel />
      <KitchenCarousel />
      <BikeAccessories />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default HomePage;
