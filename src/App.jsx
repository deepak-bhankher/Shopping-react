import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Top_Rated from "./components/Top_Rated";
import Kids_Wear from "./components/Kids_Wear";
import Mens_Wear from "./components/Mens_Wear";
import Womens_Wear from "./components/Womens_Wear";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const AppContent = () => {
  const [cart, setCart] = useState([]);
  const [showMsg, setShowMsg] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const addtoCart = (item) => {
    setCart((prev) => [...prev, item]);
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
      navigate("/cart");
    }, 1000);
  };

  const removeCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
        <Navbar cart={cart} search={search} setSearch={setSearch} darkMode={darkMode} setDarkMode={setDarkMode}/>

        {showMsg && (
          <p className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
            Item added to cart
          </p>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Top_Rated" element={<Top_Rated addtoCart={addtoCart} search={search} />} />
          <Route path="/Kids_Wear" element={<Kids_Wear addtoCart={addtoCart} search={search} />} />
          <Route path="/Mens_Wear" element={<Mens_Wear addtoCart={addtoCart} search={search} />} />
          <Route path="/Womens_Wear" element={<Womens_Wear addtoCart={addtoCart} search={search} />} />
          <Route path="/cart" element={<Cart cart={cart} removeCart={removeCart} search={search} />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
