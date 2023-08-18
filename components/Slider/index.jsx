"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import allproducts from "../../images/carousel/mini_slider/allproducts.png";
import image1 from "../../images/carousel/mini_slider/raw_vegan _cake-009.jpg";
import image2 from "../../images/carousel/mini_slider/raw_vegan _cake-010.jpg";
import image3 from "../../images/carousel/mini_slider/raw_vegan _cake-0011.jpg";
import image4 from "../../images/carousel/mini_slider/raw_vegan _cake-012.jpg";
import image5 from "../../images/carousel/mini_slider/raw_vegan _cake-013.jpg";
import image6 from "../../images/carousel/mini_slider/raw_vegan_cake-014.jpg";
import image7 from "../../images/carousel/mini_slider/raw_vegan_cake-015.jpg";
import image8 from "../../images/carousel/mini_slider/raw_vegan_cake-016.jpg";
import Slide from "./Slide";
import "./Slider.scss";

const Slider = () => {
  const categories = [
    { id: 1, title: "All Products", image: allproducts, slug: "" },
    { id: 2, title: "New Products", image: image1, slug: "new_products" },
    { id: 3, title: "Best Sellers", image: image2, slug: "best_sellers" },
    {
      id: 4,
      title: "Chocolate Cakes",
      image: image3,
      slug: "chocholate_cakes",
    },
    { id: 5, title: "Fruit Cakes", image: image4, slug: "fruit_cakes" },
    { id: 6, title: "Coffee Cakes", image: image5, slug: "coffee_cakes" },
    { id: 7, title: "Breakfast Bars", image: image6, slug: "breakfast_bars" },
    { id: 8, title: "Energy Bites", image: image7, slug: "energy_bites" },
    { id: 9, title: "Chocolate Bars", image: image8, slug: "chocholate_cakes" },
  ];

  const scrollContainerRef = useRef(null);
  const forwardScrollBtnRef = useRef(null);
  const backwardScrollBtnRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const forwardScrollBtn = forwardScrollBtnRef.current;
    const backwardScrollBtn = backwardScrollBtnRef.current;

    backwardScrollBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    });

    forwardScrollBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <div
      className="flex justify-center items-center
     w-screen my-10"
    >
      <div className="flex flex-col justify-center items-center w-[80%]">
        <section className="flex flex-col md:flex-row justify-center md:justify-between space-y-2 items-center w-full p-5">
          <div className="flex flex-col justify-between items-center">
            <h3 className="font-bold text-xl">Cake Me Happyyy</h3>
            <Link href="/products">
              <p className="text-[#6a8d39] text-sm md:text-lg">Go to Shop</p>
            </Link>
          </div>
          <div className="text-xs md:text-lg">
            <p>
              All my cakes are made with Love! Raw vegan cake, no added sugar
            </p>
            <p>All natural Birthday cakes & Celebration cakes. Full of goodness and guilt free.</p>
          </div>

          <div className="w-10 flex justify-center items-center space-x-2">
            <button
              className="p-3 font-bold border border-gray-400 bg-white text-[6a8d39] focus:bg-[#469635] focus:text-white"
              ref={backwardScrollBtnRef}
            >
              <AiOutlineLeft />
            </button>
            <button
              className="p-3 font-bold border border-gray-400 bg-white text-[6a8d39] focus:bg-[#469635] focus:text-white"
              ref={forwardScrollBtnRef}
            >
              <AiOutlineRight />
            </button>
          </div>
        </section>
        <section className="w-full flex justify-center">
          <section
            className="flex items-center space-x-5 overflow-x-scroll scroll-smooth snap-x scrollbar-hide"
            ref={scrollContainerRef}
          >
            {categories.map((category) => {
              return (
                <div id={category.id} className="flex-shrink-0 snap-center">
                  <Slide
                    title={category.title}
                    image={category.image}
                    slug={category.slug}
                  />
                </div>
              );
            })}
          </section>
        </section>
      </div>
    </div>
  );
};

export default Slider;
