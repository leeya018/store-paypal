"use client";

import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Footer from "../components/Footer";
import LoginForm from "@/components/LoginForm";
import Modal from "@/ui/Modal";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import Message from "@/components/Message";
import { observer } from "mobx-react-lite";
import ProductList from "@/components/ProductList";

const HomePage = observer(() => {
  return (
    <div>
      <Modal
        isOpen={ModalStore.modalName === modals.login}
        closeModal={ModalStore.closeModal}
      >
        <LoginForm />
      </Modal>
      <Message />

      <MainSection />
      <ProductList />
    </div>
  );
});

export default HomePage;
