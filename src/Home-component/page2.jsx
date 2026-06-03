import React from "react";

const Page2 = () => {
  const image = [
    { name: "Pink", img: "seventh_shopping.jpg", Rs: "$5", btn: "Order Now" },
    {
      name: "Black White",
      img: "thirteen_shopping.jpg",
      Rs: "$7",
      btn: "Order Now",
    },
    {
      name: "Classic Red",
      img: "fourteen_shopping.jpg",
      Rs: "$10",
      btn: "Order Now",
    },
    { name: "Women Ethnic", img: "new_img.jpg", Rs: "$5", btn: "Order Now" },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Featured Products
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
            Discover our handpicked collection of trending items
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {image.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="h-[240px] overflow-hidden bg-gray-50 dark:bg-gray-700 rounded-3xl p-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.name}
                </h2>
                <p className="text-2xl font-bold text-orange-500 mb-4">
                  {item.Rs}
                </p>

                <button className="w-full py-2.5 bg-orange-500 text-white font-medium rounded-2xl hover:bg-orange-600 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md">
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;
