"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

const Cart: React.FC = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();
  const router = useRouter();

  const getTotal = () => {
    return cart
      .map((item) => item.product.price * item.quantity)
      .reduce((acc, value) => acc + value, 0);
  };

  const handleCheckout = () => {
    router.push(
      "https://meshulam.co.il/purchase?b=2f93c0fc2d45a702e20ed63e2c5e3814"
    );
  };

  return (
    <div className="p-6 bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.product.id}
              className="flex justify-between items-center mb-4"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{item.product.name}</h3>
                <p className="text-gray-700">${item.product.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item.product.id)}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.product.id)}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div>total: ${getTotal()}</div>
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
