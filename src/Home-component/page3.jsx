import React from 'react'

const Page3 = () => {
  return (
    <div>

      {/* Poster / Offer Section */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="shadow-2xl rounded-lg overflow-hidden">
                <img
                  src="offer_shopping.jpg"
                  alt="Shopping"
                  className="w-full max-w-md object-cover hover:scale-105 duration-300 transition-all"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Winter Sale Up To <span className="text-orange-500">50% Off</span>
              </h1>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio.
              </p>

              {/* Features */}
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

// Feature Component
const Feature = ({ text, bg }) => {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bg}`}>
        ✔
      </div>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  )
}

export default Page3
