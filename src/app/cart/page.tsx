// app/checkout/page.tsx

"use client";

import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";

const CheckoutPage = () => {
  const { cart } = useCart();

  const initialOptions: any = {
    "client-id": process.env.NEXT_PUBLIC_API_PAYPAL_KEY,
    currency: "USD",
    intent: "capture",
  };

  const createOrder = (data: any, actions: any) => {
    const items = cart.map((item) => ({
      name: item.product.name,
      unit_amount: {
        currency_code: "ILS",
        value: item.product.price.toFixed(2),
      },
      quantity: item.quantity.toString(),
      description: item.product.description,
    }));

    const itemTotal = cart
      .reduce((total, item) => total + item.product.price * item.quantity, 0)
      .toFixed(2);

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "ILS",
            value: itemTotal,
            breakdown: {
              item_total: {
                currency_code: "ILS",
                value: itemTotal,
              },
            },
          },
          items: items,
        },
      ],
    });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      alert("Transaction completed by " + details.payer.name.given_name);
    });
  };

  const getTotal = () => {
    return cart
      .map((item) => item.product.price * item.quantity)
      .reduce((acc, value) => acc + value, 0);
  };

  return (
    <div className="flex flex-col  justify-center items-center h-screen">
      <div>
        <Cart />
      </div>
      {cart.length !== 0 && (
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
        </PayPalScriptProvider>
      )}
    </div>
  );
};

export default CheckoutPage;
