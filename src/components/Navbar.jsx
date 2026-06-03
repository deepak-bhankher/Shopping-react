import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ cart, search, setSearch, darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Top Rated", to: "/Top_Rated" },
    { label: "Kids Wear", to: "/Kids_Wear" },
    { label: "Mens Wear", to: "/Mens_Wear" },
    { label: "Womens Wear", to: "/Womens_Wear" },
  ];

  return (
    <div>
      {/* TOP NAVBAR */}
      <div className="w-full bg-orange-200 dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">

          {/* HAMBURGER - mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl dark:text-white cursor-pointer"
          >
            {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>

          {/* LOGO */}
          <div className="flex items-center gap-2 shrink-0">
            <img src="Logo.jpg" className="w-10 h-10 rounded-full" />
            <h1 className="font-bold text-lg dark:text-white">Shopsy</h1>
          </div>

          {/* SEARCH */}
          <div className="relative flex-1 max-w-md ml-auto">
            <input
              type="text"
              placeholder="Search Product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full px-3 py-2 pr-8
                border border-gray-300 dark:border-gray-600
                focus:outline-none text-sm
                bg-white dark:bg-gray-800 dark:text-white
                focus:border-orange-500"
            />
            <IoMdSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          </div>

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer text-sm shrink-0"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* CART */}
          <button
            onClick={() => navigate("/cart")}
            className="relative bg-orange-500 cursor-pointer text-white p-3 rounded-full hover:scale-105 duration-300 transition-all shrink-0"
          >
            <FaCartShopping size={18} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </button>

        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex flex-wrap gap-8 bg-amber-50 dark:bg-gray-800 px-6 py-3 justify-center border-b border-gray-200 dark:border-gray-700">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-sm font-medium dark:text-white hover:text-orange-500 dark:hover:text-orange-400 hover:scale-105 transition-all duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* MOBILE MENU - smooth slide */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-amber-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700
          ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col px-6 py-3 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
