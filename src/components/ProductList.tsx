import React from "react";
import ProductCard from "./ProductCard";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
};

type ProductListProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
