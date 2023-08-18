'use client'

import Link from "next/link";
import React, { useRef } from "react";
import { siteConfig } from "../../config/site";
import Image from "next/image";
import image from "../../images/raw_vegan_cake_north_london-029.jpg";
import { ImLocation } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
  const form = useRef();
  const links = siteConfig.header;

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_yo14mij', 'template_t141zge', form.current, 'ZpX6KW5e6UV8mWG0f')
    .then((result) => {
      console.log(result.text);
      toast.success("The email was successfully sent!", {
        style: {
          backgroundColor: "#469635",
          color: "white",
          scale: "1.3",
        }
      })
    }, (error) => {
      console.log(error.text);
      toast.error("Something went wrong!")
    });
  };


  return (
    <div className="flex flex-col justify-center items-center space-y-10 w-screen h-full">
      <section className="flex flex-col justify-center items-center w-full bg-[#4796354d]">
        <div className="flex flex-col justify-center items-center md:items-start w-full h-[4px] bg-[#469635] ">
        </div>

        <Image
          src={image}
          width={1920}
          height={900}
          className="h-56 md:h-[35rem] w-full object-contain"
        />
        <div className="flex justify-center items-center w-screen md:w-full h-[1px]  bg-[#469635] "></div>
      </section>

      <div className="flex justify-around items-start space-x-10 w-[80%]">
        <section className="flex flex-col justify-between items-center space-y-10 w-full md:w-2/3">
          <h3>HAVE A QUESTION?</h3>
          <p>
            HAVE A QUESTION? Do feel free to contact me to discuss any products.
            Perhaps your require a customised Birthday cake or Celebration cake? I'd
            be delighted to hear from you. Simply message me below and I'll get
            back right to you.
          </p>

          <div className="px-5 md:px-12 py-5 w-full bg-gray-100">
            <p className="mt-4 text-lg text-gray-600">How Can We Help You?</p>
            <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-4 w-full">
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  id="address"
                  placeholder="Address"
                  name="address"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="phone_number"
                >
                  Phone number
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="tel"
                  id="phone_number"
                  placeholder="Phone number"
                  name="phone"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                  required
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  id="email"
                  placeholder="Email"
                  name="email"
                />
              </div>

              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="flex h-40 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  id="message"
                  placeholder="Leave us a message"
                  cols={3}
                  required
                  name="message"
                />
              </div>
              <input
                type="submit"
                value="Send Message"
                className="w-full rounded-md bg-[#469635] cursor-pointer px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              />
                {/* Send Message
              </input> */}
            </form>
          </div>
          <div className="w-1/3"></div>
        </section>
        <aside className="hidden md:flex md:flex-col space-y-5 md:w-1/3 ">
          <section className="flex flex-col justify-start items-start">
            <h3 className="px-5  text-lg font-bold">SHOP</h3>
            <ul className="w-64 mb-0">
              <li className="px-5 py-1 border border-gray-400 w-full bg-[#469635] ">
                <Link href="/products" className="text-white text-sm">
                  ALL PRODUCTS
                </Link>
              </li>
              <li className="px-5 py-1 border border-gray-400 w-full ">
                <Link
                  href="/products/new_products"
                  className="text-black text-sm"
                >
                  NEW PRODUCTS
                </Link>
              </li>
              <li className="px-5 py-1 border border-gray-400 w-full ">
                <Link
                  href="/products/best_sellers"
                  className="text-black text-sm"
                >
                  BEST SELLERS
                </Link>
              </li>
              <li className="px-5 py-1 border border-gray-400 w-full">
                <Link
                  href="/products/chocholate_cakes"
                  className="text-black text-sm"
                >
                  CHOCHOLATE CAKES
                </Link>
              </li>
              <li className="px-5 py-1 border border-gray-400 w-full">
                <Link
                  href="/products/fruit_cakes"
                  className="text-black text-sm"
                >
                  FRUIT CAKES
                </Link>
              </li>
              <li className="px-5 py-1 border border-gray-400 w-full">
                <Link
                  href="/products/coffee_cakes"
                  className="text-black text-sm"
                >
                  COFFEE CAKES
                </Link>
              </li>
              <li className="px-5 py-1 border border-gray-400 w-full">
                <Link
                  href="/products/breakfast_bars"
                  className="text-black text-sm"
                >
                  BREAKFAST BARS
                </Link>
              </li>
              <li className="px-5 py-1 border border-gray-400 w-full">
                <Link
                  href="/products/energy_bites"
                  className="text-black text-sm"
                >
                  ENERGY BITES
                </Link>
              </li>
              <li className="px-5 py-1 border border-gray-400 w-full">
                <Link
                  href="/products/chocholate_bars"
                  className="text-black text-sm"
                >
                  CHOCHOLATE BARS
                </Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-col justify-start items-start space-y-1 px-5">
            <h3 className="text-lg font-bold ">CONTACT ME</h3>
            <section className="flex justify-start items-center space-x-5">
              <ImLocation className="text-lg text-slate-500" />
              <div className="flex flex-col justify-center items-start space-y-1">
                <p className="font-bold">Cake Me Happyyy</p>
                <p>37 Byng Road</p>
                <p>Barnet EN5 4NW</p>
              </div>
            </section>
            <section className="flex justify-start items-center space-x-5">
              <GrMail className="text-lg text-slate-500" />
              <a href="mailto:info@rawvegancakes.co.uk">
                info@rawvegancakes.co.uk
              </a>
            </section>
            <section className="flex justify-start items-center space-x-5">
              <BsFillTelephoneFill className="text-lg text-slate-500" />
              <a href="tel:079 00 601365">079 00 601365</a>
            </section>

            <section className="flex justify-start items-center space-x-5">
              <IoIosContact className="text-lg text-slate-500" />
              <a href="mailto:info@rawvegancakes.co.uk">
                Cake Me Happyyy by MELL
              </a>
            </section>
            <section className="flex justify-start items-center space-x-5">
              <FaRegClock className="text-lg text-slate-500" />
              <div className="flex flex-col space-y-1 justify-center items-start">
                <p>Mon-Fri: 8:30 - 20:30</p>
                <p>Sat: 10:00 - 17:00</p>
                <p>Sun: 10:00 - 17:00</p>
              </div>
            </section>
          </section>
        </aside>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
};

export default page;
