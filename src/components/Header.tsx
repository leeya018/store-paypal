"use client";

import React from "react";
import Link from "next/link";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import authStore from "@/mobx/authStore";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { observer } from "mobx-react-lite";
const Header = observer(() => {
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out: ", error);
      throw new Error(error.message);
    }
  };

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
          {authStore.isLoggedIn && (
            <li>
              <Link href="/products_admin">
                <span className="text-gray-700  text-red-500">
                  products admin
                </span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div>
        {authStore.isLoggedIn ? (
          <div>
            <span className="mr-2">
              Hello, {authStore.user?.displayName || authStore.user?.email}
            </span>
            <button
              onClick={logout}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Log out
            </button>
          </div>
        ) : (
          <button
            onClick={() => ModalStore.openModal(modals.login)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Log in
          </button>
        )}
        {/* <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Sign up
        </button> */}
      </div>
    </header>
  );
});

export default Header;
