import React from "react";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
};

async function fetchProducts(): Promise<Product[]> {
  // Replace this with your actual data fetching logic
  return [
    {
      id: "1",
      name: "Bench Grinder",
      image: "/bench-grinder.png",
      price: 120,
      description: "A powerful bench grinder for various grinding tasks.",
    },
    {
      id: "2",
      name: "Small cover",
      image: "/small-cover.png",
      price: 50,
      description: "A durable cover for small items.",
    },
    // Add more products here
  ];
}

const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-md p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover mb-4"
            />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
