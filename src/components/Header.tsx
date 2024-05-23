"use client";

import React from "react";
import Link from "next/link";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-bold">LOGO</div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              <span className="text-gray-700">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <span className="text-gray-700">Products</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-gray-700">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <button
          onClick={() => ModalStore.openModal(modals.login)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Log in
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
