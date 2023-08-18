"use client";

import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../sanity/lib/image";
import { Clock, X } from "lucide-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";
import { CartItemsEmpty } from "./cart-items-empty";
import { useState } from "react";

export function CartItems() {
  const { cartDetails, removeItem, setItemQuantity } = useShoppingCart();
  const cartItems = Object.entries(cartDetails).map(([_, product]) => product);

  if (cartItems.length === 0) return <CartItemsEmpty />;

  function removeCartItem(product) {
    removeItem(product.id);
  }

  return (
    <ul
      role="list"
      className=" m-0 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-500 dark:border-gray-500"
    >
      {cartItems.map((product, productIdx) => (
        <li
          key={product._id}
          className="flex flex-col md:flex-row space-y-5 md:space-y-0 py-2 sm:py-6"
        >
          <div className="shrink-0">
            <Image
              src={urlForImage(product.image[0]).url()}
              alt={product.name}
              width={200}
              height={200}
              className="h-56 md:h-24 w-full md:w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-48 sm:w-48"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link
                      href={`/products/${product.slug}`}
                      className="font-semibold text-base md:text-lg text-[#469635]"
                    >
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="mt-1 text-sm">{product.description}</p>
                <p className="mt-[1rem] text-sm">Size: {product.size}</p>
              </div>

              <div className="mt-0 sm:mt-0 sm:pr-9">
                <div className="absolute right-0 top-0">
                  <button
                    variant="ghost"
                    type="button"
                    className="mt-0 -mr-2 inline-flex pr-2"
                    onClick={() => removeCartItem(product)}
                  >
                    <span className="sr-only">Remove</span>
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="mt-4 flex space-x-2 text-sm">
            <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                  Quantity, {product.name}
                </label>
                <input
                  id={`quantity-${productIdx}`}
                  name={`quantity-${productIdx}`}
                  type="number"
                  className="w-16"
                  min={1}
                  max={10}
                  value={product.quantity}
                  onChange={event => setItemQuantity(product.id, Number(event.target.value))}
                />
            </div> */}
            <div className="flex items-center justify-between mt-2">
              <div className="md:w-[20%] w-[30%] group flex h-6 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-8">
                <button
                  className="text-heading hover:bg-heading hover:bg-green-500 flex h-full w-6 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-8"
                  onClick={(event) => {
                    event.preventDefault();
                    setItemQuantity(product.id, Number(product.quantity - 1));
                  }}
                >
                  -
                </button>
                <input
                  id={`quantity-${productIdx}`}
                  name={`quantity-${productIdx}`}
                  type="number"
                  className="w-8 text-center appearance-none"
                  min={1}
                  max={10}
                  value={product.quantity}
                  onChange={(event) =>
                    setItemQuantity(product.id, Number(event.target.value))
                  }
                />
                <button
                  className="text-heading hover:bg-heading hover:bg-green-500 flex h-full w-6 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-8"
                  onClick={(event) => {
                    event.preventDefault();
                    setItemQuantity(product.id, Number(product.quantity + 1));
                  }}
                >
                  +
                </button>
              </div>
              <div className="flex justify-center items-center">
                <p className=" text-lg font-medium">{formatCurrencyString({ value: product.price , currency: 'GBP' })}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
