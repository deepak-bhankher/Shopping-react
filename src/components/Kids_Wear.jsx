import React, { useState } from "react";

function Kids_Wear({ addtoCart, search }) {
  const [ShowMore, setshowMore] = useState(false);

  const image = [
    {
      name: "Pent-Shirt",
      img: "first.jpg",
      Rs: "$5",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Suit",
      img: "sec.jpg",
      Rs: "$7",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Outfit",
      img: "third.jpg",
      Rs: "$5",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Winter",
      img: "fourth.jpg",
      Rs: "$10",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Trendy",
      img: "fifth.jpg",
      Rs: "$6",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Cool",
      img: "sixth.jpg",
      Rs: "$9",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Fresh",
      img: "seventh.jpg",
      Rs: "$10",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Modern",
      img: "eight.jpg",
      Rs: "$7",
      btn: "Order Now",
      botn: "Add to cart",
    },

    // children chappal

    {
      name: "Orange",
      img: "kids_chappal1.jpg",
      Rs: "$7",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Voilet",
      img: "kids_chappal2.jpg",
      Rs: "$7",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Light Pink",
      img: "kids_chappal3.jpg",
      Rs: "$7",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Pink",
      img: "kids_chappal4.jpg",
      Rs: "$7",
      btn: "Order Now",
      botn: "Add to cart",
    },

    // Coat

    {
      name: "Black",
      img: "child_coat1.jpg",
      Rs: "$7",
      btn: "Order Now",
      botn: "Add to cart",
    },

    {
      name: "Voilet",
      img: "child_coat2.jpg",
      Rs: "$10",
      btn: "Order Now",
      botn: "Add to cart",
    },

    {
      name: "Red",
      img: "child_coat3.jpg",
      Rs: "$12",
      btn: "Order Now",
      botn: "Add to cart",
    },

    {
      name: "Pink",
      img: "child_coat4.jpg",
      Rs: "$5",
      btn: "Order Now",
      botn: "Add to cart",
    },

    // winter dress

    {
      name: "Pink",
      img: "dress1.jpg",
      Rs: "$5",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Cyan",
      img: "dress2.jpg",
      Rs: "$5",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Red",
      img: "dress3.jpg",
      Rs: "$5",
      btn: "Order Now",
      botn: "Add to cart",
    },
    {
      name: "Skyblue",
      img: "dress4.jpg",
      Rs: "$5",
      btn: "Order Now",
      botn: "Add to cart",
    },
  ];

  // SEARCH FILTER

  const filteredImage = image.filter((item) =>
  item.name
    .toLowerCase()
    .includes((search || "").toLowerCase())
);

  // SHOW MORE

  const visibleimage = ShowMore
    ? filteredImage
    : filteredImage.slice(0, 4);

  return (
    <div>
      <h1 className="text-center mt-10 text-4xl font-bold">
        FOR KIDS
      </h1>

      <div className="max-w-7xl p-10 mx-auto">
        <div className="items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl gap-10">

          {visibleimage.length > 0 ? (
            visibleimage.map((I, index) => (
              <div
                key={index}
                className="overflow-hidden border border-gray-300 rounded-3xl"
              >
                <div className="h-[280px] overflow-hidden rounded-3xl bg-gray-50">
                  <img
                    src={I.img}
                    alt={I.name}
                    className="w-full h-full object-contain hover:scale-105 duration-300 transition-all"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-2xl font-extralight">{I.name}</h2>
                  <h1 className="text-3xl font-bold mt-2">{I.Rs}</h1>

                  <div className="mt-5">
                    <button
                      onClick={() => addtoCart(I)}
                      className="w-full py-2 text-sm font-medium rounded-2xl bg-green-500 text-white hover:bg-green-600 hover:scale-105 duration-300 transition-all cursor-pointer shadow-md"
                    >
                      {I.botn}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-3xl font-bold text-red-500 text-center col-span-4">
              Not Found
            </h1>
          )}
        </div>
      </div>

      {/* SHOW MORE BUTTON */}

      {filteredImage.length > 0 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setshowMore(!ShowMore)}
            className="py-2 px-4 rounded-2xl shadow-2xl border border-gray-200 hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {ShowMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Kids_Wear;