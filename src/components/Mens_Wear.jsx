import React, { useState } from "react";

function Mens_Wear({ addtoCart, placeOrder, search }) {
  const [showAll, setShowAll] = useState(false);

  const men = [
    {
      name: "Brown kurta",
      img: "first_kurta.jpg",
      Rs: "$8",
    },
    {
      name: "Gray kurta",
      img: "sec_kurta.jpg",
      Rs: " $10",
    },
    {
      name: "White kurta",
      img: "third_kurta.jpg",
      Rs: "$15",
    },
    {
      name: "Black kurta",
      img: "fourth_kurta.jpg",
      Rs: "$10",
    },
    {
      name: "Classic White",
      img: "first_pent.jpg",
      Rs: "$12",
    },
    {
      name: "Urban Printed",
      img: "sec_pent.jpg",
      Rs: "$18",
    },
    {
      name: "Summer Breeze",
      img: "third_pent.jpg",
      Rs: "$10",
    },
    {
      name: "Denim Smart",
      img: "fourth_pent.jpg",
      Rs: "$8",
    },

    // coat
    {
      name: "Yellow",
      img: "fifth_coat.jpg",
      Rs: "$10",
    },
    {
      name: "Blue Jacket",
      img: "sixth_coat.jpg",
      Rs: "$20",
    },
    {
      name: "White",
      img: "seventh_coat.jpg",
      Rs: "$15",
    },
    {
      name: "Green Jacket",
      img: "eight_coat.jpg",
      Rs: "$8",
    },

    // Shoes

    {
      name: "Athleisure",
      img: "men_shoes1.jpg",
      Rs: "$10",
    },
    {
      name: "Sneakers",
      img: "men_shoes2.jpg",
      Rs: "$8",
    },
    {
      name: "RedTape",
      img: "men_shoes3.jpg",
      Rs: "$5",
    },
    {
      name: "Genuine",
      img: "men_shoes4.jpg",
      Rs: "$15",
    },

    // Watch
    {
      name: "Poedagar",
      img: "watch1.jpg",
      Rs: "$10",
    },
    {
      name: "Wrist ",
      img: "watch2.jpg",
      Rs: "$7",
    },
    {
      name: "Benling ",
      img: "watch3.jpg",
      Rs: "$20",
    },
    {
      name: "Olevs",
      img: "watch4.jpg",
      Rs: "$15",
    },

    // cap
    {
      name: "Gray",
      img: "cap1.jpg",
      Rs: "$15",
    },
    {
      name: "White",
      img: "cap2.jpg",
      Rs: "$10",
    },
    {
      name: "Black",
      img: "cap3.jpg",
      Rs: "$7",
    },
    {
      name: "Red",
      img: "cap4.jpg",
      Rs: "$12",
    },

    // Creams
    {
      name: "Himalaya",
      img: "cream1.jpg",
      Rs: "$12",
    },
    {
      name: "Denver",
      img: "cream2.jpg",
      Rs: "$15",
    },
    {
      name: "Set Wet",
      img: "cream3.jpg",
      Rs: "$10",
    },
    {
      name: "Dove",
      img: "cream4.jpg",
      Rs: "$5",
    },

    // Chappal

    {
      name: "Red",
      img: "chappal1.jpg",
      Rs: "$12",
    },

    {
      name: "Yoho Black",
      img: "chappal2.jpg",
      Rs: "$7",
    },

    {
      name: "Flip Flop",
      img: "chappal3.jpg",
      Rs: "$10",
    },

    {
      name: "Flite White",
      img: "chappal4.jpg",
      Rs: "$10",
    },
  ];

  const filteredMen = men.filter((item) =>
    item.name.toLowerCase().includes((search || "").toLowerCase()),
  );

  const displayPhoto = showAll ? filteredMen : filteredMen.slice(0, 4);

  const handleCart = (item) => {
    addtoCart(item);
  };

  const handleOrder = (item) => {
    placeOrder(item);
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-10">FOR MEN</h1>

      <div className="p-10 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl gap-10">
          {displayPhoto.length > 0 ? (
            displayPhoto.map((p, index) => (
              <div
                key={index}
                className="border rounded-3xl mt-10 border-gray-300 overflow-hidden"
              >
                <div className="h-[280px] overflow-hidden rounded-3xl bg-gray-50">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-contain hover:scale-105 duration-300 transition-all"
                  />
                </div>

                <div className="p-5">
                  <h1 className="text-2xl font-extralight">{p.name}</h1>
                  <h2 className="font-bold text-3xl mt-2">{p.Rs}</h2>
                </div>

                <div className="p-4">
                  <button
                    onClick={() => handleCart(p)}
                    className="w-full py-2 text-sm font-medium rounded-2xl bg-green-500 text-white hover:bg-green-600 hover:scale-105 duration-300 transition-all cursor-pointer shadow-md"
                  >
                    Add to cart
                  </button>
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

      {/* toggle */}
      {filteredMen.length > 0 && (
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
}

export default Mens_Wear;
