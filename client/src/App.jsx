import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import ItemsDetail from "./scenes/ItemsDetail/ItemsDetail";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/Global/Navbar";
import CartMenu from "./scenes/Global/CartMenu";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="item/:itemId" element={<ItemsDetail />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkout/sucess" element={<Confirmation />} />
          </Routes>
          <CartMenu />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
