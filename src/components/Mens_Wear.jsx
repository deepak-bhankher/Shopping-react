import React, { useState } from "react";
import LoginModal from "./LoginModal";

function Mens_Wear() {
    const [showImage,setshowImage] = useState(false);
    const [Login,setLogin] = useState(false);
  const men = [
    {
      name: "Brown kurta",
      img: "first_kurta.jpg",
      Rs: "$8",
      btn: "Order Now",
    },
    {
      name: "Gray kurta",
      img: "sec_kurta.jpg",
      Rs: "$10",
      btn: "Order Now",
    },
    {
      name: "White kurta",
      img: "third_kurta.jpg",
      Rs: "$15",
      btn: "Order Now",
    },
    {
      name: "Black kurta",
      img: "fourth_kurta.jpg",
      Rs: "$10",
      btn: "Order Now",
    },



    // pent-shirt 

     {
      name: "Classic White",
      img: "first_pent.jpg",
      Rs: "$12",
      btn: "Order Now",
    },
     {
      name: "Urban Printed",
      img: "sec_pent.jpg",
      Rs: "$18",
      btn: "Order Now",
    },
     {
      name: "Summer Breeze",
      img: "third_pent.jpg",
      Rs: "$10",
      btn: "Order Now",
    },
     {
      name: "Denim Smart",
      img: "fourth_pent.jpg",
      Rs: "$8",
      btn: "Order Now",
    },


    // coat 
     {
      name: "Yellow",
      img: "fifth_coat.jpg",
      Rs: "$10",
      btn: "Order Now",
    },
     {
      name: "Blue Jacket",
      img: "sixth_coat.jpg",
      Rs: "$20",
      btn: "Order Now",
    },
     {
      name: "White",
      img: "seventh_coat.jpg",
      Rs: "$15",
      btn: "Order Now",
    },
     {
      name: "Green Jacket",
      img: "eight_coat.jpg",
      Rs: "$8",
      btn: "Order Now",
    },


    // Shoes 

     {
      name: "Athleisure",
      img: "men_shoes1.jpg",
      Rs: "$10",
      btn: "Order Now",
    },
     {
      name: "Sneakers",
      img: "men_shoes2.jpg",
      Rs: "$8",
      btn: "Order Now",
    },
     {
      name: "RedTape",
      img: "men_shoes3.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
     {
      name: "Genuine",
      img: "men_shoes4.jpg",
      Rs: "$15",
      btn: "Order Now",
    },


    // Watch
     {
      name: "Poedagar",
      img: "watch1.jpg",
      Rs: "$10",
      btn: "Order Now",
    },
     {
      name: "Wrist ",
      img: "watch2.jpg",
      Rs: "$7",
      btn: "Order Now",
    },
     {
      name: "Benling ",
      img: "watch3.jpg",
      Rs: "$20",
      btn: "Order Now",
    },
     {
      name: "Olevs",
      img: "watch4.jpg",
      Rs: "$15",
      btn: "Order Now",
    },



    // cap 
    {
      name: "Gray",
      img: "cap1.jpg",
      Rs: "$15",
      btn: "Order Now",
    },
    {
      name: "White",
      img: "cap2.jpg",
      Rs: "$10",
      btn: "Order Now",
    },
    {
      name: "Black",
      img: "cap3.jpg",
      Rs: "$7",
      btn: "Order Now",
    },
    {
      name: "Red",
      img: "cap4.jpg",
      Rs: "$12",
      btn: "Order Now",
    },

    // Creams
    {
      name: "Himalaya",
      img: "cream1.jpg",
      Rs: "$12",
      btn: "Order Now",
    },
    {
      name: "Denver",
      img: "cream2.jpg",
      Rs: "$15",
      btn: "Order Now",
    },
    {
      name: "Set Wet",
      img: "cream3.jpg",
      Rs: "$10",
      btn: "Order Now",
    },
    {
      name: "Dove",
      img: "cream4.jpg",
      Rs: "$5",
      btn: "Order Now",
    },

    // Chappal

    {
      name: "Red",
      img: "chappal1.jpg",
      Rs: "$12",
      btn: "Order Now",
    },

    {
      name: "Yoho Black",
      img: "chappal2.jpg",
      Rs: "$7",
      btn: "Order Now",
    },

    {
      name: "Flip Flop",
      img: "chappal3.jpg",
      Rs: "$10",
      btn: "Order Now",
    },

    {
      name: "Flite White",
      img: "chappal4.jpg",
      Rs: "$10",
      btn: "Order Now",
    },



  ];
 const hideimage = showImage ? men :men.slice(0,4) 
  return (
    <div>
      <div>
        {Login && <LoginModal setLogin={setLogin}/>}
      </div>
      <h1 className="text-center text-4xl font-bold mt-10">FOR MEN</h1>
      <div className="p-10 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl gap-10">
          {hideimage.map((M, index) => (
            <div
              key={index}
              className=" h-[470px] overflow-hidden  border rounded-3xl mt-10 border-gray-300  "
            >
              <img
                src={M.img}
                alt={M.Rs}
                className="h-[300px] border border-gray-300  w-full rounded-3xl hover:scale-105 duration-300 transition-all "
              />
              <div className="p-5">
                <h1 className="text-2xl font-extralight">{M.name}</h1>
                <h2 className="font-bold text-3xl mt-2">{M.Rs}</h2>
              </div>
              <div className="ml-4" onClick={()=>setLogin(true)}>
                <button className=" rounded-3xl hover:bg-orange-500 hover:text-white py-2 px-1 hover:scale-105 duration-300 transition-all cursor-pointer ">
                  {M.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* toggle case */}
      <div className="text-center mt-10">
        <button onClick={()=> setshowImage(!showImage)} className="rounded-2xl hover:bg-orange-500 hover:text-white p-2 hover:scale-105 duration-300 transition-all cursor-pointer">{showImage ? "Show Less": "Show More"}</button>
      </div>

    </div>
  );
}
export default Mens_Wear;
