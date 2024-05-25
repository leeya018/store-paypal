"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image";

const Cart: React.FC = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const router = useRouter();

  const getTotal = () => {
    return cart
      .map((item) => item.product.price * item.quantity)
      .reduce((acc, value) => acc + value, 0);
  };

  console.log({ cart });

  return (
    <div className="p-6 bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.product.id}
              className="flex justify-between items-center mb-4"
            >
              <Image
                width={64}
                height={64}
                src={item.product.imageUrl || ""}
                alt={item.product.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{item.product.name}</h3>
                <p className="text-gray-700">${item.product.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => {
                    if (!item.product.id) return;
                    decreaseQuantity(item.product.id);
                  }}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => {
                    if (!item.product.id) return;
                    increaseQuantity(item.product.id);
                  }}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                >
                  +
                </button>
                <FaTrashAlt
                  size={25}
                  className="ml-4 text-red-500 cursor-pointer"
                  onClick={() => {
                    if (!item.product.id) return;
                    removeFromCart(item.product.id);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length !== 0 && (
        <div>
          <div>total: ${getTotal()}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
