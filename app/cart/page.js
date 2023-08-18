// import { CartItems } from "../../components/cart-items";
// import { CartSummary } from "../../components/cart-summary";
// import React from "react";

// const page = () => {
//   return (
//     <div className="w-screen">
//       <div className="flex justify-center items-center w-full md:w-full h-[4px]  bg-[#469635] "></div>
//       <main className="mx-auto px-5 md:px-0 md:w-[100%] pb-24 pt-12 lg:max-w-7xl">
//         <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
//           Shopping Cart
//         </h1>

//         <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
//           <section aria-labelledby="cart-heading" className="lg:col-span-7">
//             <h2 id="cart-heading" className="sr-only">
//               Items in your shopping cart
//             </h2>
//             <CartItems />
//           </section>
//           <CartSummary />
//         </form>
//       </main>
//     </div>
//   );
// };

// export default page;

import { CartItems } from "../../components/cart-items";
import { CartSummary } from "../../components/cart-summary";
import React from "react";

const page = () => {
  return (
    <div className="w-screen">
      <div className="flex justify-center items-center w-full md:w-full h-[4px]  bg-[#6a8d39] "></div>
      <main className="mx-auto px-5 md:px-0 md:w-[100%] pb-24 pt-12 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <CartItems />
          </section>
          <CartSummary />
        </form>
      </main>
    </div>
  );
};

export default page;
