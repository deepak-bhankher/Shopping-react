import React, { useState } from "react";
import LoginModal from "./LoginModal";
function Home() {
  const [Login, setLogin] = useState(false);
  
  const image = [
    {
      name: "Pink",
      img: "seventh_shopping.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
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
    {
      name: "Women Ethnic",
      img: "new_img.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
  ];

  return (
    <div>
      <div className="p-10">{Login && <LoginModal setLogin={setLogin} />}</div>

      <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center md:items-start mx-4 md:mx-52 ">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            70% Of on all <br /> Products Sale
          </h1>
          <p className="mt-5 text-sm sm:text-base">
            Constetetu adipsing elit,sed do eiusmod tempor incididunt ut labour
            et dolar magna aliqua
          </p>
          <button
            onClick={() => setLogin(true)}
            className="mt-5  p-2 rounded-3xl  hover:bg-orange-500 hover:text-white cursor-pointer hover:scale-105 duration-300 transition-all border-amber-300"
          >
            Order Now
          </button>
        </div>
        <div className=" md:mt-0 md:ml-10 md:w-1/2 flex justify-center">
          <img
            src="big_sale.png"
            alt="sale"
            className="w-full max-w-sm md:w-full hover:scale-105 duration-300 transition-all"
          />
        </div>
      </div>

      {/* sec poge */}
      <div className="mx-auto mt-20 p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl">
          {image.map((N, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-3xl overflow-hidden"
            >
              <img
                src={N.img}
                className="h-[200px] w-full hover:scale-105 duration-300 transition-all rounded-3xl"
              />
              <div className="p-5">
                <h1 className="text-2xl font-extralight">{N.name}</h1>
                <h2 className="font-bold text-2xl mt-4" >{N.Rs}</h2>

                <button
                  onClick={() => setLogin(true)}
                  className="mt-5 rounded-3xl hover:bg-orange-500 hover:text-white py-2 px-1 hover:scale-105 duration-300 transition-all cursor-pointer"
                >
                  {N.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* poster  */}

      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Main Responsive Flex */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* LEFT : IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="shadow-2xl rounded-lg overflow-hidden">
                <img
                  src="offer_shopping.jpg"
                  alt="Shopping"
                  className="w-full max-w-md object-cover hover:scale-105 duration-300 transition-all"
                />
              </div>
            </div>

            {/* RIGHT : CONTENT */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Winter Sale Up To{" "}
                <span className="text-orange-500">50% Off</span>
              </h1>

              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio.
              </p>

              {/* FEATURES */}
              <div className="space-y-4">
                <Feature text="Quality Products" bg="bg-purple-100" />
                <Feature text="Fast Delivery" bg="bg-orange-100" />
                <Feature text="Easy Payment Method" bg="bg-green-100" />
                <Feature text="Get Offers" bg="bg-yellow-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
const Feature = ({ text, bg }) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${bg}`}
      >
        ✔
      </div>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  );
};
export default Home;
