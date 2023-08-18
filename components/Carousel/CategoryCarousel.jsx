"use client";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
let slideShowId;
const CategoryCarousel = ({
  title,
  subTitle1,
  subTitle2,
  description,
  images,
}) => {
  const [index, setIndex] = useState(0);

  const incrementIndex = useCallback(() => {
    clearInterval(slideShowId);
    setIndex((prevIndex) => (prevIndex == 2 ? 0 : ++prevIndex));
    slideShowId = setInterval(() => incrementIndex(), 4000);
  }, []);

  const decrementIndex = useCallback(() => {
    clearInterval(slideShowId);
    setIndex((prevIndex) => (prevIndex == 0 ? 2 : --prevIndex));
    slideShowId = setInterval(() => incrementIndex(), 16000);
  }, []);

  useEffect(() => {
    slideShowId = setInterval(() => incrementIndex(), 16000);
  }, [incrementIndex]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-1/6 px-5 md:px-32 py-10">
      <section className="relative w-full md:w-[960px] h-full">
        <Image
          src={images[index].image}
          width={940}
          height={460}
          alt={images[index].name}
          placeholder="blur"
          blurDataURL="/"
          className="w-full h-[260px] overflow-clip object-fit"
        />
        <div className="absolute bottom-1/2 z-30 w-full ">
          <div className="mx-2 md:mx-10 flex items-center justify-between text-brand-white">
            <button
              className="rounded-sm text-gray-50/30 hover:text-gray-50 text-sm md:text-lg p-3 font-bold backdrop-blur-lg hover:backdrop-blur-3xl bg-gray-500/25  hover:bg-gray-500/5"
              onClick={decrementIndex}
            >
              <AiOutlineLeft />
            </button>
            <button
              className="rounded-sm text-sm md:text-lg p-3 text-gray-50/30 hover:text-gray-50  font-bold backdrop-blur-lg hover:backdrop-blur-3xl bg-gray-500/25 hover:bg-gray-500/5"
              onClick={incrementIndex}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
        <section className="hidden md:absolute md:w-[940px] bottom-10 ml-5 z-30  bg-black">
          <section className="flex flex-col justify-center items-start px-5 py-2">
            <h3 className="text-[#6a8d39] text-base">{images[index].name}</h3>
            <p className="text-white text-sm">{subTitle1}</p>
          </section>
        </section>
      </section>
      <section className=" flex flex-col md:flex-row justify-center items-center space-y-1 md:space-x-5 w-full md:w-[940px] md:px-0 pt-10 md:divide-x-2 divide-gray-300">
        <div className="flex flex-col justify-center items-center md:items-start md:w-1/4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{subTitle2}</p>
        </div>

        <div className="md:w-3/4 md:px-10 text-sm md:text-xl">
          <p>{description}</p>
        </div>
      </section>
    </div>
  );
};

export default CategoryCarousel;
