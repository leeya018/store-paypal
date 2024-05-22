// components/Product.tsx

import { Product } from "@/api/product/interfaces";
import React from "react";

interface ProductProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductProps> = ({ product, onAddToCart }) => {
  const { name, imageUrl, price, currency, description } = product;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <img
        className="w-32 h-32 object-cover mb-4 mx-auto"
        src={imageUrl}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-gray-900 font-bold">
          {currency}
          {price}
        </span>
      </div>{" "}
      <div className="flex justify-center">
        <button
          onClick={onAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded-md "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
