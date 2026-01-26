import React, { useState } from "react";
import LoginModal from "./LoginModal";

function Womens_Wear() {
  const [hidephoto, sethidephoto] = useState(false);
  const [Login,setLogin] = useState(false);
  const image = [
    {
      name: "Trendy Sun",
      img: "summer1.jpg",
      Rs: "$10",
      btn: "Order Now",
    },
    {
      name: "Casual Wear",
      img: "summer2.jpg",
      Rs: "$15",
      btn: "Order Now",
    },
    {
      name: "Maxi Dress",
      img: "summer3.jpg",
      Rs: "$12",
      btn: "Order Now",
    },
    {
      name: "Sleeveless",
      img: "summer4.jpg",
      Rs: "$7",
      btn: "Order Now",
    },

    // hide image 
     {
      name: "Formal Light ",
      img: "women_dress1.jpg",
      Rs: "$8",
      btn: "Order Now",
    },
     {
      name: "Cotton Lycra",
      img: "women_dress2.jpg",
      Rs: "$20",
      btn: "Order Now",
    }, 
    {
      name: "co-ord",
      img: "women_dress3.jpg",
      Rs: "$12",
      btn: "Order Now",
    },
     {
      name: "Semi Formal",
      img: "women_dress4.jpg",
      Rs: "$7",
      btn: "Order Now",
    },


    //  shoes ///////

   {
      name: "Footwear",
      img: "fifth_shoes.jpg",
      Rs: "$17",
      btn: "Order Now",
    },
    {
      name: "Footwear",
      img: "sixth_shoes.jpg",
      Rs: "$15",
      btn: "Order Now",
    },
    {
      name: "Casual Sneakers",
      img: "seventh_shoes.jpg",
      Rs: "$20",
      btn: "Order Now",
    },
    {
      name: "Sneakers",
      img: "eight_shoes.jpg",
      Rs: "$18",
      btn: "Order Now",
    },

    // jins 

     {
      name: "formal jins",
      img: "jins1.jpg",
      Rs: "$10",
      btn: "Order Now",
    },
     {
      name: "Dark Blue",
      img: "jins2.jpg",
      Rs: "$8",
      btn: "Order Now",
    },
     {
      name: "Black",
      img: "jins3.jpg",
      Rs: "$15",
      btn: "Order Now",
    },
     {
      name: "Ribcage fit",
      img: "jins4.jpg",
      Rs: "$18",
      btn: "Order Now",
    },



//  Kurti 
   {  
      name: "Cotton Kurti ",
      img: "kurti1.jpg",
      Rs: "$10",
      btn: "Order Now",
    },

    {
      name: "Light Blue",
      img: "kurti2.jpg",
      Rs: "$8",
      btn: "Order Now",
    },

    {
      name: "Cotton",
      img: "kurti3.jpg",
      Rs: "$15",
      btn: "Order Now",
    },

    {
      name: "Yellow Kurti",
      img: "kurti4.jpg",
      Rs: "$12",
      btn: "Order Now",
    },



    // heels

    
    {
      name: "Elsa Heel",
      img: "heel1.jpg",
      Rs: "$12",
      btn: "Order Now",
    },
    
    {
      name: "Black Heeled",
      img: "heel2.jpg",
      Rs: "$10",
      btn: "Order Now",
    },

    
    {
      name: "Low-Heel ",
      img: "heel3.jpg",
      Rs: "$8",
      btn: "Order Now",
    },

    
    {
      name: " occasion",
      img: "heel4.jpg",
      Rs: "$5",
      btn: "Order Now",
    },



//  facewash

    { name: "nivea",
      img: "face1.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
    
     { name: " Mamaearth",
      img: "face2.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
    
     { name: " Mamaearth Oil",
      img: "face3.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
    
     { name: "Detan Facewash",
      img: "face4.jpg",
      Rs: "$5",
      btn: "Order Now",
    },
    




  ];
  const hide = hidephoto ? image : image.slice(0, 4);
  return (

    <div>
      <div>
        {Login && <LoginModal setLogin={setLogin}/>}
      </div>
      <h1 className="text-center text-4xl mt-10 font-bold"> FOR WOMENS</h1>
      <div className="max-w-7xl mx-auto p-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl ">
          {hide.map((W, index) => (
            <div
              key={index}
              className=" border border-gray-300 rounded-3xl overflow-hidden "
            >
              <img
                src={W.img}
                alt={W.img}
                className="border border-gray-300 h-[300px] rounded-3xl w-full hover:scale-105 duration-300 transition-all"
              />
              <div className="p-5">
                <h1 className="font-extralight text-2xl ">{W.name}</h1>
                <h2 className="font-bold text-3xl mt-4">{W.Rs}</h2>

                <button onClick={()=> setLogin(true)} className="mt-5 rounded-3xl hover:bg-orange-500 hover:text-white py-2 px-1 hover:scale-105 duration-300 transition-all cursor-pointer ">
                  {W.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
<div className="text-center">
      <button onClick={()=> sethidephoto(!hidephoto)} className="hover:bg-orange-500 hover:text-white py-2 px-1 rounded-2xl transition-all hover:scale-105 duration-300 cursor-pointer" >
        { hidephoto ?"Show Less" :"Show More"}
        
      </button>
      </div>
    </div>
  );
}
export default Womens_Wear;
