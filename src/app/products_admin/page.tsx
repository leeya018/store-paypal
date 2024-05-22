"use client";
import React from "react";
import Cart from "@/components/Cart";
import ProductList from "@/components/ProductList";
import { observer } from "mobx-react-lite";
import Modal from "@/ui/Modal";
import { ModalStore } from "@/mobx/modalStore";
import AddProductForm from "@/components/AddProductForm";
import { modals } from "@/util";
import AddButton from "@/components/AddButton";
import Message from "@/components/Message";
import ProductListEdit from "@/components/ProductListEdit";

const ProductsPage = observer(() => {
  return (
    <div>
      <Message />
      <Modal
        isOpen={ModalStore.modalName === modals.addProduct}
        closeModal={ModalStore.closeModal}
      >
        <AddProductForm />
      </Modal>

      <h1 className="text-3xl font-bold text-center my-6">Products</h1>

      <div className="flex justify-center items-center ">
        <AddButton />
      </div>
      <ProductListEdit />
    </div>
  );
});

export default ProductsPage;
