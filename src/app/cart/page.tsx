"use client";
import ProductList from "@/components/ProductList";
import cartStore from "@/mobx/cartStore";
import { useParams } from "next/navigation";

import { observer } from "mobx-react-lite";
import React, { useState } from "react";

const CartPage = () => {
  return (
    <div className="max-h-screen overflow-y-auto text-white">
      <div className="bg-black bg-opacity-50 mb-10 pb-5">
        <div className="w-full flex justify-center">
          <h1 className="text-2xl font-bold text-white mt-10 underline">
            העגלה שלי{" "}
          </h1>
        </div>

        <div className="flex justify-center text-xl">
          סכום כולל :
          {cartStore.items.reduce((acc, item) => item.price + acc, 0)}
        </div>
      </div>
      <div>
        <ProductList
          products={cartStore.items}
          isLoading={false}
          pageName="cart"
        />
      </div>
    </div>
  );
};
export default observer(CartPage);
