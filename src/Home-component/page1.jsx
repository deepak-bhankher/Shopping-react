import React from 'react'

const Page1 = () => {
  return (
    <div>
         {/* Hero Section */}
      <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center md:items-start mx-4 md:mx-52">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
            70% Off on all <br /> Products Sale
          </h1>
          <p className="mt-5 text-sm sm:text-base">
            Constetetu adipsing elit, sed do eiusmod tempor incididunt ut labore
            et dolor magna aliqua
          </p>
          <button
            onClick={() => setLogin(true)}
            className="mt-5 p-2 rounded-3xl border  shadow-2xl hover:bg-orange-500 hover:text-white cursor-pointer hover:scale-105 duration-300 transition-all border-amber-300"
          >
            Order Now
          </button>
        </div>
        <div className="md:mt-0 md:ml-10 md:w-1/2 flex justify-center mt-10">
          <img
            src="big_sale.png"
            alt="sale"
            className="w-full max-w-sm object-cover md:w-full hover:scale-105 duration-300 transition-all"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Page1
