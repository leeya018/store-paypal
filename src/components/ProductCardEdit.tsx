import { removeProductApi } from "@/api/product/remove";
import messageStore from "@/mobx/messageStore";
import { ModalStore } from "@/mobx/modalStore";
import Modal from "@/ui/Modal";
import { currencies, modals } from "@/util";
import React from "react";
import EditProductForm from "./EditProductForm";
import productStore from "@/mobx/ProductStore";
import { Product } from "@/api/product/interfaces";
import Image from "next/image";

interface ProductProps {
  product: Product;
}

const ProductCardEdit: React.FC<ProductProps> = ({ product }) => {
  const { id, name, imageUrl, price, currency, description } = product;

  console.log({ imageUrl });
  const handleRemove = async (product: Product) => {
    try {
      if (!product.id) {
        messageStore.setMessage("product id not defiened");
        return;
      } else if (!product.imageUrl) {
        messageStore.setMessage("imageUrl not defiened");
        return;
      }
      await removeProductApi(product.id, product.imageUrl);
      productStore.removeProduct(product.id);
      messageStore.setMessage("Product removed successfully!", "success");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        messageStore.setMessage(
          "Error removing product: " + error.message,
          "error"
        );
      } else {
        console.error("Error adding product:", error);
      }
    } finally {
      ModalStore.closeModal();
    }
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <Image
        width={128}
        height={128}
        className="w-32 h-32 object-cover mb-4 mx-auto"
        src={imageUrl || ""}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-gray-900 font-bold">
          {currencies[currency]}

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
        <button
          onClick={() => {
            productStore.setChosenProduct(product);
            ModalStore.openModal(modals.editProduct);
          }}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProductCardEdit;
