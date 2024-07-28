"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import authStore from "@/mobx/authStore";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "@/context/CartContext";

const Header = observer(() => {
  const { cart } = useCart();

  const [activeTab, setActiveTab] = useState("home");

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out: ", error);
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Error signing out:", error);
      }
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-2 bg-white  shadow-md">
      <div className="logo flex items-center justify-center w-full md:w-auto">
        <Image
          alt="logo"
          width={70}
          height={70}
          src={"/images/logo.png"}
          className="bg-center object-cover rounded-full w-[70px] h-[70px]"
        />
      </div>
      <li
        onClick={() => setActiveTab("cart")}
        className={`relative underline ${
          activeTab === "home" && "underline"
        } text-gray-700 hover:underline`}
      >
        <Link href="/cart">
          <span className="underline text-black">
            <FaCartShopping
              size={30}
              className="text-gray-700 hover:text-gray-900"
            />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0  w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </span>
        </Link>
      </li>

      <nav>
        <ul className="flex space-x-6">
          <li onClick={() => setActiveTab("home")}>
            <Link href="/">
              <span
                className={`${
                  activeTab === "home" && "underline"
                } text-gray-700 hover:underline`}
              >
                בית
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        {authStore.isLoggedIn ? (
          <div>
            <span className="mr-2">
              שלום, {authStore.user?.displayName || authStore.user?.email}
            </span>
            <button
              onClick={logout}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              יציאה
            </button>
          </div>
        ) : (
          <button
            onClick={() => ModalStore.openModal(modals.login)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            כניסה
          </button>
        )}
      </div>
    </header>
  );
});

export default Header;
