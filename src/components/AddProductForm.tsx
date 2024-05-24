// components/AddProductForm.tsx

import { addProductApi } from "@/api/product/add";
import { Product } from "@/api/product/interfaces";
import productStore from "@/mobx/ProductStore";
import messageStore from "@/mobx/messageStore";
import { ModalStore } from "@/mobx/modalStore";
import React, { useState } from "react";

const AddProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    image: null,
    price: 0,
    currency: "USD",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setProduct({
      ...product,
      image: file,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(product);
      const newProd = await addProductApi(product);
      productStore.addProduct(newProd);
      messageStore.setMessage("product added!", "success");
      ModalStore.closeModal();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      messageStore.setMessage(error.message, "error");
    } finally {
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="currency"
          className="block text-gray-700 font-bold mb-2"
        >
          Currency
        </label>
        <select
          id="currency"
          name="currency"
          value={product.currency}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        >
          <option value="NIS">NIS</option>
          <option value="USD">Dollar</option>
          <option value="EUR">Euro</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
