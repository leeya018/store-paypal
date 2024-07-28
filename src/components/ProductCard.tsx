// components/Product.tsx

import { Product } from "@/api/product/interfaces";
import { removeProductApi } from "@/api/product/remove";
import messageStore from "@/mobx/messageStore";
import { ModalStore } from "@/mobx/modalStore";
import productStore from "@/mobx/ProductStore";
import { currencies, modals } from "@/util";
import Image from "next/image";
import React from "react";

interface ProductProps {
  product: Product;
  onProductRemove: (productId: string) => void;
}

const ProductCard: React.FC<ProductProps> = ({
  product,

  onProductRemove,
}) => {
  const { id, name, imageUrl, price, currency, description } = product;

  const handleClick = () => {
    productStore.setChosenProduct(product);
    ModalStore.openModal(modals.productView);
  };
  return (
    <div
      className=" mx-2  my-5 rounded-xl  bg-card-gradient cursor-pointer "
      onClick={handleClick}
    >
      <div className=" relative w-full h-64">
        <Image
          alt={name + "תמונה של"}
          src={imageUrl ? imageUrl : "/"}
          layout="fill"
          className=" bg-center object-cover "
        />
      </div>
      <div className="my-4 px-5 py-2 text-white">
        <h3 className="text-lg font-semibold mb-2 whitespace-normal  ">
          {name}
        </h3>
        <h3 className="text-lg font-semibold mb-2 whitespace-normal  ">
          מחיר : {price}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;

// // components/Product.tsx

// import { Product } from "@/api/product/interfaces";
// import { removeProductApi } from "@/api/product/remove";
// import messageStore from "@/mobx/messageStore";
// import { ModalStore } from "@/mobx/modalStore";
// import { currencies } from "@/util";
// import Image from "next/image";
// import React from "react";

// interface ProductProps {
//   product: Product;
//   onAddToCart: () => void;
//   onProductRemove: (productId: string) => void;
// }

// const ProductCard: React.FC<ProductProps> = ({
//   product,
//   onAddToCart,
//   onProductRemove,
// }) => {
//   const { id, name, imageUrl, price, currency, description } = product;

//   return (
//     <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg p-2">
//       <Image
//         width={96}
//         height={96}
//         className="w-24 h-24 object-cover mb-2 mx-auto"
//         src={imageUrl || ""}
//         alt={name}
//       />
//       <div className="px-4 py-2">
//         <div className="font-bold text-lg mb-1">{name}</div>
//         <p className="text-gray-700 text-sm">{description}</p>
//       </div>
//       <div className="px-4 pt-2 pb-1">
//         <span className="text-gray-900 font-bold">
//           {currencies[currency]}
//           {price}
//         </span>
//       </div>
//       <div className="flex justify-center">
//         <button
//           onClick={onAddToCart}
//           className="bg-blue-500 text-white px-3 py-1 rounded-md"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
