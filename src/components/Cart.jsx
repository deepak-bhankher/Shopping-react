import React, { useState } from "react";

const Cart = ({ cart, removeCart }) => {
  const [quantities, setQuantities] = useState(() =>
    cart.map(() => 1)
  );

  const increase = (index) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? q + 1 : q))
    );
  };

  const decrease = (index) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? Math.max(1, q - 1) : q))
    );
  };

  const handleRemove = (index) => {
    setQuantities((prev) => prev.filter((_, i) => i !== index));
    removeCart(index);
  };

  const total = cart.reduce(
    (sum, item, i) =>
      sum + Number(item.Rs.replace("$", "")) * (quantities[i] || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white py-10 px-4">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-center">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center mt-32">
            <p className="text-6xl mb-4">🛍️</p>
            <p className="text-gray-500 dark:text-gray-400 text-xl">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-xl bg-gray-50 dark:bg-gray-700 shrink-0"
                  />

                  {/* NAME & PRICE */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-semibold truncate">{item.name}</h2>
                    <p className="text-orange-500 font-bold text-lg">{item.Rs}</p>
                  </div>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => decrease(index)}
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-gray-600 text-lg font-bold flex items-center justify-center transition-all duration-200 cursor-pointer"
                    >
                      −
                    </button>
                    <span className="w-6 text-center font-semibold">{quantities[index]}</span>
                    <button
                      onClick={() => increase(index)}
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-gray-600 text-lg font-bold flex items-center justify-center transition-all duration-200 cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* SUBTOTAL */}
                  <p className="text-sm font-semibold text-green-600 w-14 text-right shrink-0">
                    ${Number(item.Rs.replace("$", "")) * quantities[index]}
                  </p>

                  {/* REMOVE */}
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-400 hover:text-red-600 text-xl transition-colors duration-200 cursor-pointer shrink-0"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-500 dark:text-gray-400">Total Items</span>
                <span className="font-semibold">{quantities.reduce((a, b) => a + b, 0)}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold">Total</span>
                <span className="text-2xl font-bold text-green-600">${total}</span>
              </div>
              <button className="w-full mt-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer shadow-md">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
