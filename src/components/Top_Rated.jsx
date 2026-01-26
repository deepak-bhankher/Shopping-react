import React, { useContext, useState } from "react";
import LoginModal from "./LoginModal";


const Top_Rated = () => {
  const [image, setImage] = useState(false);
  const [Login, setLogin] = useState(false);

  const photo = [
    {
      name: "Women Ethenic",
      img: "first_shopping.jpg",
      Rs: "$20",
      bton: "Order Now",
    },
    {
      name: "Women Top",
      img: "sec_shopping.jpg",
      Rs: "$15",
      bton: "Order Now",
    },
    {
      name: "Men T-shirt",
      img: "third_shopping.jpg",
      Rs: "$10",
      bton: "Order Now",
    },
    {
      name: "Men Jacket",
      img: "fourth_shopping.jpg",
      Rs: "$25",
      bton: "Order Now",
    },

    // hide image
    {
      name: "Boys Jacket",
      img: "nine_shopping.jpg",
      Rs: "$20",
      bton: "Order Now",
    },
    {
      name: "Man Jacket",
      img: "ten_shopping.jpg",
      Rs: "$15",
      bton: "Order Now",
    },
    {
      name: "Winter Jacket",
      img: "eleven_shopping.jpg",
      Rs: "$17",
      bton: "Order Now",
    },
    {
      name: "Man Shirt",
      img: "twelve_shopping.jpg",
      Rs: "$15",
      bton: "Order Now",
    },

    // shoes and sendels
    {
      name: "Red Tap",
      img: "first_shoes.jpg",
      Rs: "$30",
      bton: "Order Now",
    },

    {
      name: "Addidas",
      img: "sec_shoes.jpg",
      Rs: "$15",
      bton: "Order Now",
    },
    {
      name: "Sports",
      img: "third_shoes.jpg",
      Rs: "$20",
      bton: "Order Now",
    },
    {
      name: "Sneakers",
      img: "fourth_shoes.jpg",
      Rs: "$25",
      bton: "Order Now",
    },

    // female shoes
    {
      name: "Footwear",
      img: "fifth_shoes.jpg",
      Rs: "$17",
      bton: "Order Now",
    },
    {
      name: "Footwear",
      img: "sixth_shoes.jpg",
      Rs: "$15",
      bton: "Order Now",
    },
    {
      name: "Casual Sneakers",
      img: "seventh_shoes.jpg",
      Rs: "$20",
      bton: "Order Now",
    },
    {
      name: "Sneakers",
      img: "eight_shoes.jpg",
      Rs: "$18",
      bton: "Order Now",
    },

    // Jackets
    {
      name: "Brown Jacket",
      img: "first_jacket.jpg",
      Rs: "$30",
      bton: "Order Now",
    },
    {
      name: "Cotton Jacket",
      img: "sec_jacket.jpg",
      Rs: "$35",
      bton: "Order Now",
    },
    {
      name: "Jins Jacket",
      img: "third_jacket.jpg",
      Rs: "$27",
      bton: "Order Now",
    },
    {
      name: "Black Jacket",
      img: "fourth_jacket.jpg",
      Rs: "$20",
      bton: "Order Now",
    },

    // Dress
    {
      name: "Classic Stripes",
      img: "thirteen_shopping.jpg",
      Rs: "$19",
      bton: "Order Now",
    },

    {
      name: "Vibrant Stripes",
      img: "fourteen_shopping.jpg",
      Rs: "$20",
      bton: "Order Now",
    },

    {
      name: "Chic Green",
      img: "fifteen_shopping.jpg",
      Rs: "$25",
      bton: "Order Now",
    },

    {
      name: "Classic Red",
      img: "sixteen_shopping.jpg",
      Rs: "$17",
      bton: "Order Now",
    },

    // Saree
    {
      name: "Classic Red",
      img: "first_saree.jpg",
      Rs: "$25",
      bton: "Order Now",
    },
    {
      name: "Voilet",
      img: "sec_saree.jpg",
      Rs: "$40",
      bton: "Order Now",
    },

    {
      name: "SkyBlue",
      img: "third_saree.jpg",
      Rs: "$30",
      bton: "Order Now",
    },

    {
      name: "Classic Brown",
      img: "fourth_saree.jpg",
      Rs: "$20",
      bton: "Order Now",
    },
  ];
  const hideImage = image ? photo : photo.slice(0, 4);
  return (
    <div>
      {/* login ka page */}
      <div className="p-10">{Login && <LoginModal setLogin={setLogin} />}</div>

{/* page  */}
      <h1 className="text-4xl font-bold text-center mt-10">TOP RATE BRAND</h1>
      <div className="mx-auto max-w-7xl px-15">
        <div className="   items-center grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mt-10">
          {hideImage.map((i, index) => (
            <div
              key={index}
              className=" border h-[470px] border-gray-300  overflow-hidden rounded-3xl "
            >
              <img
                src={i.img}
                alt={i.Rs}
                className="w-full h-[300px] object-cover rounded-3xl  hover:scale-105 duration-300 transition-all"
              />

              <div className="p-5">
                <p className="text-2xl font-extralight ">{i.name}</p>
                <h2 className="text-3xl font-bold mt-2">{i.Rs}</h2>
              </div>
              <div onClick={() => setLogin(true)} className="ml-3">
                <button className="rounded-3xl hover:bg-orange-500 hover:text-white py-2 px-1 hover:scale-105 duration-300 transition-all cursor-pointer ">
                  {" "}
                  {i.bton}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* toggle case */}
      <div className="text-center mt-10">
        <button
          onClick={() => setImage(!image)}
          className=" py-2 px-1 rounded-2xl text-center  hover:bg-orange-500 hover:text-white  hover:scale-105 duration-300 transition-all  cursor-pointer "
        >
          {image ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Top_Rated;
