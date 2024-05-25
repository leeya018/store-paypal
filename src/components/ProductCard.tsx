// components/Product.tsx

import { Product } from "@/api/product/interfaces";
import { removeProductApi } from "@/api/product/remove";
import messageStore from "@/mobx/messageStore";
import { ModalStore } from "@/mobx/modalStore";
import { currencies } from "@/util";
import Image from "next/image";
import React from "react";

interface ProductProps {
  product: Product;
  onAddToCart: () => void;
  onProductRemove: (productId: string) => void;
}

const ProductCard: React.FC<ProductProps> = ({
  product,
  onAddToCart,
  onProductRemove,
}) => {
  const { id, name, imageUrl, price, currency, description } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
      <Image
        width={96}
        height={96}
        className="w-24 h-24 object-cover mb-2 mx-auto"
        src={imageUrl || ""}
        alt={name}
      />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-1">{name}</div>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <div className="px-4 pt-2 pb-1">
        <span className="text-gray-900 font-bold">
          {currencies[currency]}
          {price}
        </span>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onAddToCart}
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
