import "./App.css";
import HeaderLine from "./components/HeaderLine";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomeStyle from "./categorie-pages/HomeStyle";
import Appliances from "./categorie-pages/Appliances";
import Style from "./categorie-pages/Styles";
import Automotive from "./categorie-pages/Automotive";
import Mobiles from "./categorie-pages/Mobiles";
import Kitchen from "./categorie-pages/Kitchen";
import CartPage from "./components/CartPage";
function App() {
  return (
    <>
      <Navbar />
      <HeaderLine />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="product-page" element={<ProductPage />} />
        <Route path="home" element={<HomeStyle />} />
        <Route path="appliances" element={<Appliances />} />
        <Route path="style" element={<Style />} />
        <Route path="automotive" element={<Automotive />} />
        <Route path="mobiles" element={<Mobiles />} />
        <Route path="kitchen" element={<Kitchen />} />
        <Route path="cartpage" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
