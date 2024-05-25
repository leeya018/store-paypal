// components/ProductList.tsx

import React, { useEffect, useState } from "react";
// import { products } from "@/util";
import { useCart } from "@/context/CartContext";
import ProductCard from "./ProductCard";
import { Product } from "@/api/product/interfaces";
import { getProductsApi } from "@/api/product/get";
import Loading from "./Loading";
import { removeProductApi } from "@/api/product/remove";

const ProductList: React.FC = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsApi();
        setProducts(products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductRemove = async (productId: string) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onAddToCart={() => addToCart(product)}
          onProductRemove={handleProductRemove}
        />
      ))}
    </div>
  );
};

export default ProductList;
