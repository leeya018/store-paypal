// components/EditProductForm.tsx

import React, { useState, useEffect } from "react";
import messageStore from "@/mobx/messageStore";
import { updateProductApi } from "@/api/product/update";
import { Product } from "@/api/product/interfaces";
import productStore from "@/mobx/ProductStore";

interface EditProductFormProps {
  product: Product;
  onClose: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({
  product,
  onClose,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setUpdatedProduct({
      ...updatedProduct,
      image: file,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedProd = await updateProductApi(updatedProduct);
      productStore.updateProduct(updatedProd);
      messageStore.setMessage("Product updated successfully!", "success");
      onClose();
    } catch (error) {
      messageStore.setMessage(
        "Error updating product: " + error.message,
        "error"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={updatedProduct.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-gray-700">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-gray-700">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={updatedProduct.price}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="currency" className="block text-gray-700">
          Currency
        </label>
        <select
          id="currency"
          name="currency"
          value={updatedProduct.currency}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        >
          <option value="ILS">ILS</option>
          {/* <option value="USD">Dollar</option> */}
          {/* <option value="EUR">Euro</option> */}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={updatedProduct.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Update Product
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;
