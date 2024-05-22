// components/Product.tsx

import { Product } from "@/api/product/interfaces";
import { removeProductApi } from "@/api/product/remove";
import messageStore from "@/mobx/messageStore";
import { ModalStore } from "@/mobx/modalStore";
import React from "react";

interface ProductProps {
  product: Product;

  onProductRemove: (productId: string) => void;
}

const ProductCardEdit: React.FC<ProductProps> = ({
  product,
  onProductRemove,
}) => {
  const { id, name, imageUrl, price, currency, description } = product;

  const handleRemove = async (product: Product) => {
    try {
      await removeProductApi(product.id, product.imageUrl);
      onProductRemove(product.id);
      messageStore.setMessage("Product removed successfully!", "success");
    } catch (error) {
      messageStore.setMessage(
        "Error removing product: " + error.message,
        "error"
      );
    } finally {
      ModalStore.closeModal();
    }
  };
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
      </div>
      <div className="w-full flex justify-between items-center">
        <button
          onClick={() => handleRemove(product)}
          className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCardEdit;
