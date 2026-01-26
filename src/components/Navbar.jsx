import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";


function Navbar() {
  const [Login, setLogin] = useState(false);


 
  return (
    <div>
      
 
      <div>{Login && <LoginModal setLogin={setLogin} />}</div>

      <div className="w-full bg-orange-200 px-4 py-3">
        <div className="flex items-center">
          {/* LOGO */}
          <div className="flex items-center gap-2 shrink-0">
            <img src="Logo.jpg" className="w-12 h-12 rounded-full" />
            <h1 className="font-bold text-lg">Shopsy</h1>
          </div>

          {/* RIGHT SIDE (push to right) */}
          <div
            className="flex items-center gap-2 
      ml-auto w-full max-w-md"
          >
            {/* SEARCH */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-full px-3 py-1.5 pr-8 
    border border-gray-300 focus:outline-none  text-sm bg-white focus:border-orange-500"
              />
              <IoMdSearch  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* CART */}
          
                <button className="bg-orange-500 text-white p-3 rounded-full shrink-0 hover:scale-105 duration-300 cursor-pointer transition-all">
                  <FaCartShopping size={18} />
                </button>
              
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 sm:gap-10 bg-amber-50 p-2 justify-center  border border-gray-200">
        <h2 className="cursor-pointer hover:scale-105 duration-300 transition-all text-sm sm:text-base">
          <Link to="/">Home </Link>{" "}
        </h2>
        <h2 className="cursor-pointer hover:scale-105 duration-300 transition-all text-sm sm:text-base">
          <Link to="Top_Rated">Top Rated </Link>{" "}
        </h2>
        <h2 className="cursor-pointer hover:scale-105 duration-300 transition-all text-sm sm:text-base">
          <Link to="Kids_Wear">Kids Wear </Link>{" "}
        </h2>
        <h2 className="cursor-pointer hover:scale-105 duration-300 transition-all text-sm sm:text-base">
          <Link to="Mens_Wear">Mens Wear </Link>{" "}
        </h2>
        <h2 className="cursor-pointer hover:scale-105 duration-300 transition-all text-sm sm:text-base">
          <Link to="Womens_Wear">Womens Wear </Link>{" "}
        </h2>

      </div>
    </div>
  );
}

export default Navbar;
