import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-black mt-10 text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            🛍️ Shopsy
          </h2>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus, voluptate.
          </p>
        </div>

        {/* IMPORTANT LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Important Links
          </h3>
          <ul className="space-y-2 text-sm">
             <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Top_Rated</li>
            <li className="hover:text-yellow-400 cursor-pointer">Kids_Wear</li>
            <li className="hover:text-yellow-400 cursor-pointer">Mens_Wear</li>
            <li className="hover:text-yellow-400 cursor-pointer">Womens_Wear</li>
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Top_Rated</li>
            <li className="hover:text-yellow-400 cursor-pointer">Kids_Wear</li>
            <li className="hover:text-yellow-400 cursor-pointer">Mens_Wear</li>
            <li className="hover:text-yellow-400 cursor-pointer">Womens_Wear</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <div className="flex gap-4 mb-4">
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
          </div>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Hisar, Haryana
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +91 7988059891
            </p>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © 2025 Shopsy. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
