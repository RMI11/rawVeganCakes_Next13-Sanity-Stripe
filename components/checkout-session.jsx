"use client"

import { CheckCheck, XCircle } from "lucide-react"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"
import { useEffect } from "react";

export function CheckoutSession() {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);
  
  return (
    <>
      <CheckCheck className="mx-auto h-10 w-10 text-lime-500 dark:text-lime-400" />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-lime-500 dark:text-lime-400 sm:text-5xl">
        Order Successful!
      </h1>
      <h3 className="mt-8 text-2xl leading-7">Thank you!</h3>
      <p className="mt-8">Check your email for your invoice.</p>
    </>
  );
}
