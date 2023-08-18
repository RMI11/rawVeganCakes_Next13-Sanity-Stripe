import { NextUIProvider } from "@nextui-org/react";
import { CartProvider } from "use-shopping-cart";

const Providers = ({ children }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}
      currency="GBP"
      shouldPersist={true}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </CartProvider>
  );
};

export default Providers;
