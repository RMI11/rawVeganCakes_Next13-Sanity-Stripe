"use client";

import { urlForImage } from "../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

const ProductCart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem, incrementItem, cartDetails } = useShoppingCart();
  const isInCart = !!cartDetails?.[product.id];

  function addToCart() {
    const item = {
      ...product,
    };
    isInCart ? incrementItem(item.id) : addItem(item, { count: quantity });

    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src={
                  product.image !== undefined &&
                  urlForImage(product.image[0]).url()
                }
                alt="product.name"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {product.name} successfuly added to cart!
              </p>
              <p className="mt-1 text-sm text-gray-500"></p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <Link
            href="/cart"
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Go to cart
          </Link>
        </div>
      </div>
    ));
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col justify-between items-center rounded-md border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-[1.05] transform transition-transform duration-300">
      <Link href={`/products/${product.slug}`} className=" w-full">
        <Image
          src={
            product.image !== undefined && urlForImage(product.image[0]).url()
          }
          width={420}
          height={372}
          className="w-full h-[300px] rounded-t-md object-cover "
          alt={product.name}
        />
      </Link>

      <div className="h-full p-4 flex flex-col items-center">
        <Link
          style={{ color: "#469635" }}
          href={`/products/${product.slug}`}
          className="text-[#469635]"
        >
          <h1 className="inline-flex items-center text-center text-lg font-semibold tracking-wide mb-4">
            {product.name}
          </h1>
        </Link>
        {/* <p className="text-sm md:text-[1.3rem] text-center text-gray-600 mb-4">{formatCurrencyString({ value: product.price , currency: 'GBP' })}</p> */}
        <p className="text-base text-center">{product.description}</p>
        {/* <div className="w-full flex justify-center space-x-5 text-xl">
          <button
            onClick={decreaseQuantity}
            className="quantity-button font-bold "
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="quantity-button font-bold "
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="addtocart-button mt-4 w-full rounded-sm bg-[#469635] px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={addToCart}
        >
          Add to cart
        </button> */}
      </div>
      {/* <Toaster position="bottom-center" /> */}
    </div>
  );
};

export default ProductCart;
