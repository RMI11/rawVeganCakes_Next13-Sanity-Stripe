"use client";
import Image from "next/image";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDownCircle,
} from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../images/carousel/gluten_free_cake-065.jpg";
import image2 from "../../images/carousel/gluten_free_cake-066.jpg";
import image3 from "../../images/carousel/gluten_free_cake-067.jpg";

let slideShowId;
const Carousel = () => {
  const [index, setIndex] = useState(0);

  const incrementIndex = useCallback(() => {
    clearInterval(slideShowId);
    setIndex((prevIndex) => (prevIndex == 2 ? 0 : ++prevIndex));
    slideShowId = setInterval(() => incrementIndex(), 8000);
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
    <div className="relative w-full">
      {index === 0 && (
        <div className="relative h-[20rem] md:h-[35rem]">
          <Image
            src={image1}
            width={1000}
            height={1000}
            alt="gluten_free_cake-065"
            placeholder="blur"
            blurDataURL="/"
            className="w-full h-full overflow-clip object-cover"
          />

          <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <section className="flex flex-col justify-center items-center space-y-1 md:space-y-3 text-white">
              <motion.p
                className="p-2 w-fit bg-[#469635] text-xs md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                All my cakes are made with Love
              </motion.p>
              <motion.p
                className="p-2 w-fit  bg-[#469635] text-xs md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Full of goodness and guilt free
              </motion.p>
              <motion.p
                className="p-2 text-xs md:text-4xl font-bold bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Raw vegan cake North London
              </motion.p>
            </section>
          </section>
        </div>
      )}
      {index === 1 && (
        <div className="relative h-[20rem] md:h-[35rem]">
          <Image
            src={image2}
            width={1000}
            height={1000}
            alt="gluten_free_cake-066"
            placeholder="blur"
            blurDataURL="/"
            className="w-full h-full overflow-clip object-cover"
          />
          <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <section className="flex flex-col justify-center items-center space-y-1 md:space-y-3 text-white">
              <motion.p
                className="text-sm md:text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Experience
              </motion.p>
              <motion.p
                className="text-sm md:text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                KnowledgeCake
              </motion.p>
              <motion.p
                className="text-sm md:text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Me Happyyy by Mell
              </motion.p>
            </section>
            <section className="flex justify-center items-center space-x-5 md:space-x-5 md:text-[0.25rem] mt-2 md:mt-20">
              <motion.p
                className="py-1 px-2 bg-[#469635] text-[0.1rem]  md:text-sm text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                Raw vegan cake
              </motion.p>
              <motion.p
                className="py-1 px-2 bg-[#469635] text-[0.1rem]  md:text-sm text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                Gluten free cake
              </motion.p>
            </section>
          </section>
        </div>
      )}
      {index === 2 && (
        <div className="relative h-[20rem] md:h-[35rem]">
          <Image
            src={image3}
            width={1000}
            height={1000}
            alt="gluten_free_cake-067"
            placeholder="blur"
            blurDataURL="/"
            className="w-full h-full overflow-clip object-cover"
          />
          <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <section className="flex flex-col justify-center items-center space-y-1 md:space-y-3 text-white ">
              <motion.p
                className="p-2 bg-[#469635] text-xs md:text-5xl font-bold "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                See What We Can Do For You
              </motion.p>
              <motion.p
                className="text-xs md:text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Scroll Down
              </motion.p>
              <motion.button
                className="text-5xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <AiOutlineDownCircle />
              </motion.button>
            </section>
          </section>
        </div>
      )}

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
    </div>
  );
};

export default Carousel;
