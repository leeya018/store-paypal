"use client";
import React from "react";
import Cart from "@/components/Cart";
import ProductList from "@/components/ProductList";

const ProductsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Products</h1>

      <ProductList />
      <Cart />
    </div>
  );
};

export default ProductsPage;
