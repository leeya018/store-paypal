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
import EditProductForm from "@/components/EditProductForm";
import productStore from "@/mobx/ProductStore";
import ProtectedRoute from "@/components/ProtectedRoute";

const ProductsPage = observer(() => {
  return (
    <ProtectedRoute>
      <Message />
      <Modal
        isOpen={ModalStore.modalName === modals.addProduct}
        closeModal={ModalStore.closeModal}
      >
        <AddProductForm />
      </Modal>
      <Modal
        isOpen={ModalStore.modalName === modals.editProduct}
        closeModal={ModalStore.closeModal}
      >
        {productStore.chosenProduct && (
          <EditProductForm
            product={productStore.chosenProduct}
            onClose={ModalStore.closeModal}
          />
        )}
      </Modal>
      <h1 className="text-3xl font-bold text-center my-6">Products</h1>

      <div className="flex justify-center items-center ">
        <AddButton />
      </div>
      <ProductListEdit />
    </ProtectedRoute>
  );
});

export default ProductsPage;
