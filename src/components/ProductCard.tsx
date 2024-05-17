import React from "react";

type ProductCardProps = {
  name: string;
  image: string;
  price: number;
  description: string;
  onAddToCart: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  description,
  onAddToCart,
}) => {
  return (
    <div className="border rounded-md p-4 flex flex-col items-center">
      <img src={image} alt={name} className="w-32 h-32 object-cover mb-4" />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-700 mb-2">${price}</p>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button
        onClick={onAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
