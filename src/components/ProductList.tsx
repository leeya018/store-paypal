// components/ProductList.tsx

import React from "react";
import { products } from "@/util";
import { useCart } from "@/context/CartContext";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
