"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import "../styles/style.css";
import { ShippingMethod } from "./ShippingMethod";
import CartWarning from "./CartWarning";

export function CartSummary() {
  const { redirectToCheckout, cartCount, cartDetails, totalPrice } =
    useShoppingCart();
  const [isLoading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const isDisabled = isLoading || cartCount === 0 || agree === false;
  const [status, setStatus] = useState("");

  const [shippingCharge, setShippingCharge] = useState(0);

  async function handleClick(event) {
    setLoading(true);
    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ ...cartDetails, deliveryCharge: shippingCharge }),
    });
    //console.log(response.json())

    const data = await response.json();
    console.log(data.url);
    window.location.href = data.url;
    /*
    const result = await redirectToCheckout(data.url)
    if(result?.error) {
      console.log(result)
    }*/
    setLoading(false);
    // event.preventDefault();
    // if (cartCount > 0) {
    //   setStatus("loading");
    //   try {
    //     const result = await redirectToCheckout();
    //     setStatus(result);
    //     if (result?.error) {
    //       console.error(result);
    //       setStatus("redirect-error");
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     setStatus("redirect-error");
    //   }
    // } else {
    //   setStatus("no-items");
    // }
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-white shadow-2xl px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary :
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">{formatCurrencyString({ value: totalPrice , currency: 'GBP' })}</dd>
        </div>

        <div className="w-full h-full">
          <ShippingMethod
            shippingCharge={shippingCharge}
            setShippingCharge={setShippingCharge}
          />
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-lg font-medium">
          {formatCurrencyString({ value: Number(totalPrice) + Number(shippingCharge*100) , currency: 'GBP' })}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        {/* <button className="w-full">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </button> */}
        <CartWarning agree={agree} setAgree={setAgree} />
        <button
          className="flex justify-center items-center w-full mt-4 rounded-sm bg-[#469635] px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:bg-gray-400"
          onClick={handleClick}
          disabled={isDisabled}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Checkout"
          )}
        </button>
      </div>
    </section>
  );
}
