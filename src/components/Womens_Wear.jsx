import React, { useState } from "react";

function Womens_Wear({ addtoCart, search }) {
  const [hidephoto, sethidephoto] = useState(false);

  const image = [
    {
      name: "Trendy Sun",
      img: "summer1.jpg",
      Rs: "$10",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Casual Wear",
      img: "summer2.jpg",
      Rs: "$15",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Maxi Dress",
      img: "summer3.jpg",
      Rs: "$12",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Sleeveless",
      img: "summer4.jpg",
      Rs: "$7",
      btn: "Order Now",
      boton: "Add to cart",
    },

    // women dress

    {
      name: "Formal Light",
      img: "women_dress1.jpg",
      Rs: "$8",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Cotton Lycra",
      img: "women_dress2.jpg",
      Rs: "$20",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Co-ord",
      img: "women_dress3.jpg",
      Rs: "$12",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Semi Formal",
      img: "women_dress4.jpg",
      Rs: "$7",
      btn: "Order Now",
      boton: "Add to cart",
    },

    // shoes

    {
      name: "Footwear",
      img: "fifth_shoes.jpg",
      Rs: "$17",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Footwear",
      img: "sixth_shoes.jpg",
      Rs: "$15",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Casual Sneakers",
      img: "seventh_shoes.jpg",
      Rs: "$20",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Sneakers",
      img: "eight_shoes.jpg",
      Rs: "$18",
      btn: "Order Now",
      boton: "Add to cart",
    },

    // jeans

    {
      name: "Formal Jeans",
      img: "jins1.jpg",
      Rs: "$10",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Dark Blue",
      img: "jins2.jpg",
      Rs: "$8",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Black",
      img: "jins3.jpg",
      Rs: "$15",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Ribcage Fit",
      img: "jins4.jpg",
      Rs: "$18",
      btn: "Order Now",
      boton: "Add to cart",
    },

    // kurti

    {
      name: "Cotton Kurti",
      img: "kurti1.jpg",
      Rs: "$10",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Light Blue",
      img: "kurti2.jpg",
      Rs: "$8",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Cotton",
      img: "kurti3.jpg",
      Rs: "$15",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Yellow Kurti",
      img: "kurti4.jpg",
      Rs: "$12",
      btn: "Order Now",
      boton: "Add to cart",
    },

    // heels

    {
      name: "Elsa Heel",
      img: "heel1.jpg",
      Rs: "$12",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Black Heeled",
      img: "heel2.jpg",
      Rs: "$10",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Low-Heel",
      img: "heel3.jpg",
      Rs: "$8",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Occasion",
      img: "heel4.jpg",
      Rs: "$5",
      btn: "Order Now",
      boton: "Add to cart",
    },

    // facewash

    {
      name: "Nivea",
      img: "face1.jpg",
      Rs: "$5",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Mamaearth",
      img: "face2.jpg",
      Rs: "$5",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Mamaearth Oil",
      img: "face3.jpg",
      Rs: "$5",
      btn: "Order Now",
      boton: "Add to cart",
    },
    {
      name: "Detan Facewash",
      img: "face4.jpg",
      Rs: "$5",
      btn: "Order Now",
      boton: "Add to cart",
    },
  ];

  // SEARCH FILTER

  const filteredWomen = image.filter((item) =>
    item.name
      .toLowerCase()
      .includes((search || "").toLowerCase())
  );

  // SHOW MORE

  const hide = hidephoto
    ? filteredWomen
    : filteredWomen.slice(0, 4);

  return (
    <div>
      <h1 className="text-center text-4xl mt-10 font-bold">
        FOR WOMENS
      </h1>

      <div className="max-w-7xl mx-auto p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl">

          {hide.length > 0 ? (
            hide.map((W, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-3xl overflow-hidden"
              >
                <div className="h-[280px] overflow-hidden rounded-3xl">
                  <img
                    src={W.img}
                    alt={W.name}
                    className="w-full h-full object-contain bg-gray-50 hover:scale-105 duration-300 transition-all"
                  />
                </div>

                <div className="p-5">
                  <h1 className="font-extralight text-2xl">
                    {W.name}
                  </h1>

                  <h2 className="font-bold text-3xl mt-4">
                    {W.Rs}
                  </h2>

                  <div className="mt-5">
                    <button
                      onClick={() => addtoCart(W)}
                      className="w-full py-2 text-sm font-medium rounded-2xl bg-green-500 text-white hover:bg-green-600 hover:scale-105 duration-300 transition-all cursor-pointer shadow-md"
                    >
                      {W.boton}
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

      {filteredWomen.length > 0 && (
        <div className="text-center">
          <button
            onClick={() => sethidephoto(!hidephoto)}
            className="py-2 px-4 rounded-2xl shadow-2xl border border-gray-200 hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {hidephoto ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Womens_Wear;