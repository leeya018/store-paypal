import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/util";
import { useCart } from "@/context/CartContext";

const ProductList: React.FC = ({}) => {
  const { addToCart } = useCart();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
