import React, { useState } from "react";

const Top_Rated = ({ addtoCart ,search }) => {
  const [showAll, setShowAll] = useState(false);
  
  const photo = [
    { name: "Women Ethenic", img: "first_shopping.jpg", Rs: "$20", bton: "Order Now", btn: "Add to cart" },
    { name: "Women Top", img: "sec_shopping.jpg", Rs: "$15", bton: "Order Now", btn: "Add to cart" },
    { name: "Men T-shirt", img: "third_shopping.jpg", Rs: "$10", bton: "Order Now", btn: "Add to cart" },
    { name: "Men Jacket", img: "fourth_shopping.jpg", Rs: "$25", bton: "Order Now", btn: "Add to cart" },
    { name: "Boys Jacket", img: "nine_shopping.jpg", Rs: "$20", bton: "Order Now", btn: "Add to cart" },
    { name: "Man Jacket", img: "ten_shopping.jpg", Rs: "$15", bton: "Order Now", btn: "Add to cart" },
    { name: "Winter Jacket", img: "eleven_shopping.jpg", Rs: "$17", bton: "Order Now", btn: "Add to cart" },
    { name: "Man Shirt", img: "twelve_shopping.jpg", Rs: "$15", bton: "Order Now", btn: "Add to cart" },
    { name: "Red Tap", img: "first_shoes.jpg", Rs: "$30", bton: "Order Now", btn: "Add to cart" },
    { name: "Addidas", img: "sec_shoes.jpg", Rs: "$15", bton: "Order Now", btn: "Add to cart" },
    { name: "Sports", img: "third_shoes.jpg", Rs: "$20", bton: "Order Now", btn: "Add to cart" },
    { name: "Sneakers", img: "fourth_shoes.jpg", Rs: "$25", bton: "Order Now", btn: "Add to cart" },
    { name: "Footwear", img: "fifth_shoes.jpg", Rs: "$17", bton: "Order Now", btn: "Add to cart" },
    { name: "Footwear", img: "sixth_shoes.jpg", Rs: "$15", bton: "Order Now", btn: "Add to cart" },
    { name: "Casual Sneakers", img: "seventh_shoes.jpg", Rs: "$20", bton: "Order Now", btn: "Add to cart" },
    { name: "Sneakers", img: "eight_shoes.jpg", Rs: "$18", bton: "Order Now", btn: "Add to cart" },
    { name: "Brown Jacket", img: "first_jacket.jpg", Rs: "$30", bton: "Order Now", btn: "Add to cart" },
    { name: "Cotton Jacket", img: "sec_jacket.jpg", Rs: "$35", bton: "Order Now", btn: "Add to cart" },
    { name: "Jins Jacket", img: "third_jacket.jpg", Rs: "$27", bton: "Order Now", btn: "Add to cart" },
    { name: "Black Jacket", img: "fourth_jacket.jpg", Rs: "$20", bton: "Order Now", btn: "Add to cart" },
    { name: "Classic Stripes", img: "thirteen_shopping.jpg", Rs: "$19", bton: "Order Now", btn: "Add to cart" },
    { name: "Vibrant Stripes", img: "fourteen_shopping.jpg", Rs: "$20", bton: "Order Now", btn: "Add to cart" },
    { name: "Chic Green", img: "fifteen_shopping.jpg", Rs: "$25", bton: "Order Now", btn: "Add to cart" },
    { name: "Classic Red", img: "sixteen_shopping.jpg", Rs: "$17", bton: "Order Now", btn: "Add to cart" },
    { name: "Classic Red", img: "first_saree.jpg", Rs: "$25", bton: "Order Now", btn: "Add to cart" },
    { name: "Voilet", img: "sec_saree.jpg", Rs: "$40", bton: "Order Now", btn: "Add to cart" },
    { name: "SkyBlue", img: "third_saree.jpg", Rs: "$30", bton: "Order Now", btn: "Add to cart" },
    { name: "Classic Brown", img: "fourth_saree.jpg", Rs: "$20", bton: "Order Now", btn: "Add to cart" },
  ];

  const filteredPhoto = photo.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

const displayPhoto = showAll
  ? filteredPhoto
  : filteredPhoto.slice(0, 4);

  return (
   <div className="border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <h1 className="text-4xl font-bold text-center mt-10">TOP RATE BRAND</h1>

      <div className="max-w-7xl mx-auto p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {displayPhoto.length > 0 ? (
  displayPhoto.map((item, index) => (
    <div
      key={index}
      className="border border-gray-300 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-[280px] overflow-hidden rounded-3xl bg-gray-50 dark:bg-gray-800">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-contain hover:scale-105 duration-300 transition-all"
        />
      </div>

      <div className="p-5">
        <p className="text-2xl font-extralight">{item.name}</p>
        <h2 className="text-3xl font-bold mt-2">{item.Rs}</h2>
      </div>

      <div className="flex justify-center p-4 pb-6">
        <button
          onClick={() => addtoCart(item)}
          className="w-full py-2 text-sm font-medium rounded-2xl bg-green-500 text-white hover:bg-green-600 hover:scale-105 duration-300 transition-all cursor-pointer shadow-md"
        >
          {item.btn}
        </button>
      </div>
    </div>
  ))
) : (
  <h1 className="text-3xl font-bold text-center col-span-4 text-red-500">
    Not Found
  </h1>
)}
        </div>
      </div>

      {/* Show More / Show Less Button */}
      {filteredPhoto.length > 0 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="py-2 px-4 rounded-2xl shadow-2xl border border-gray-200 hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Top_Rated;
