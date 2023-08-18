"use client";
import React, { useState } from "react";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";

const Product = ({ product }) => {
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
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src={
                  product.image !== undefined && urlForImage(product.image[0]).url()
                }
                alt="product.name"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {product.name} successfuly added to cart!
              </p>
              <p className="mt-1 text-sm text-gray-500">
                
              </p>
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
    ))
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
    <div className="mx-auto max-w-7xl md:px-8 2xl:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:space-x-10">
        <div className="md:w-1/2 h-[500px]">
          <Image
            priority
            src={
              product.image !== undefined && urlForImage(product.image[0]).url()
            }
            alt={product.name}
            width={600}
            height={800}
            className="h-full w-full object-cover  rounded-xl shadow-xl"
          />
        </div>
        <div className="col-span-4 pt-8 lg:pt-0 md:w-1/2">
          <div className="mb-7 border-b border-gray-300 pb-7">
            <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
              {product.name}
            </h2>
            <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
              {product.description}
            </p>
            <div className="mt-5 flex items-center justify-between ">
              <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
              {formatCurrencyString({ value: product.price , currency: 'GBP' })}
              </div>
              <div className="text-heading font-bold pr-2 text-sm md:pr-0 md:text-base lg:pr-2 lg:text-xl 2xl:pr-0 2xl:text-2xl">
                Size: {product.size}
              </div>

            </div>
          </div>
          <div className="py-2 md:py-4">
            <section className="flex flex-col justify-start items-start space-y-3">
              <span className="text-heading inline-block font-semibold">
                Ingredients:
              </span>
              <div className="flex flex-wrap justify-start items-center space-x-1 md:space-x-3 ">
                {product.ingredients.map((ing) => (
                  <span className="px-1 py-1 mt-2 m-0 w-fit bg-white border border-slate-400 rounded-lg text-sm shadow-xl">
                    {ing}
                  </span>
                ))}
              </div>
            </section>
          </div>
          <div className="space-s-4 3xl:pr-48 flex items-center gap-2 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
            <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
              <button
                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                {quantity}
              </span>
              <button
                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="h-11 w-full rounded-md bg-[#469635] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Product;
