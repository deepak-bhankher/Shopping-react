import React, { useState } from "react";
import LoginModal from "./LoginModal";

function Kids_Wear() {
  const [ShowMore, setshowMore] = useState(false);
  const [Login,setLogin] = useState(false);
  const image = [
    {
      name: "Pent-Shirt",
      img: "first.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
    {
      name: "Suit",
      img: "sec.jpg",
      Rs: "$7",
      btn: "Order Now",
    },
    {
      name: "Outfit",
      img: "third.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
    {
      name: "Winter",
      img: "fourth.jpg",
      Rs: "$10",
      btn: "Order Now",
    },
    {
      name: "Trendy",
      img: "fifth.jpg",
      Rs: "$6",
      btn: "Order Now",
    },
    {
      name: "Cool",
      img: "sixth.jpg",
      Rs: "$9",
      btn: "Order Now",
    },
    {
      name: "Fresh",
      img: "seventh.jpg",
      Rs: "$10",
      btn: "Order Now",
    },
    {
      name: "Modern",
      img: "eight.jpg",
      Rs: "$7",
      btn: "Order Now",
    },

    // children chappal

    {
      name: "Orange",
      img: "kids_chappal1.jpg",
      Rs: "$7",
      btn: "Order Now",
    },
    {
      name: "Voilet",
      img: "kids_chappal2.jpg",
      Rs: "$7",
      btn: "Order Now",
    },
    {
      name: "Light Pink",
      img: "kids_chappal3.jpg",
      Rs: "$7",
      btn: "Order Now",
    },
    {
      name: "Pink",
      img: "kids_chappal4.jpg",
      Rs: "$7",
      btn: "Order Now",
    },

    // Coat

    {
      name: "Black",
      img: "child_coat1.jpg",
      Rs: "$7",
      btn: "Order Now",
    },

    {
      name: "Voilet",
      img: "child_coat2.jpg",
      Rs: "$10",
      btn: "Order Now",
    },

    {
      name: "Red",
      img: "child_coat3.jpg",
      Rs: "$12",
      btn: "Order Now",
    },

    {
      name: "Pink",
      img: "child_coat4.jpg",
      Rs: "$5",
      btn: "Order Now",
    },


    
    // winter dress
    {
      name: "Pink",
      img: "dress1.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
    {
      name: "Cyan",
      img: "dress2.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
    {
      name: "Red",
      img: "dress3.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
    {
      name: "Skyblue",
      img: "dress4.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
  ];

  const visibleimage = ShowMore ? image : image.slice(0, 4);
  return (
    <div>
      <div>
        {Login && <LoginModal setLogin={setLogin}/>}
      </div>
      <h1 className="text-center mt-10 text-4xl font-bold">FOR KIDS</h1>
      <div className="max-w-7xl p-10 mx-auto">
        <div className="items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl gap-10">
          {visibleimage.map((I, index) => (
            <div
              key={index}
              className=" overflow-hidden border border-gray-300 rounded-3xl "
            >
              <img
                src={I.img}
                alt={I.name}
                className=" border border-gray-300 h-[300px] w-full hover:scale-105 duration-300 transition-all rounded-3xl"
              />

              <div className="p-5">
                <h2 className="text-2xl font-extralight">{I.name}</h2>
                <h1 className="text-3xl font-bold mt-2">{I.Rs}</h1>

                <div className="mt-4" onClick={()=>setLogin(true)}>
                  <button className="  rounded-3xl hover:bg-orange-500 hover:text-white py-2 px-1 hover:scale-105 duration-300 transition-all cursor-pointer ">
                    {I.btn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* toggle case */}

      <div className="text-center mt-10">
        <button
          onClick={() => setshowMore(!ShowMore)}
          className="  p-2 rounded-2xl   hover:bg-orange-500 hover:text-white hover:scale-105 duration-300 transition-all cursor-pointer"
        >
          {" "}
          {ShowMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
export default Kids_Wear;
