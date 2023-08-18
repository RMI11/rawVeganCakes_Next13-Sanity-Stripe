import React from "react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

const HomeBanner = () => {
  return (
    <div className="flex justify-center items-center space-x-3 text-sm md:text-2xl w-full h-10 md:h-28 bg-[#bcda90]">
      <p className="text-[#666666] font-bold text-sm md:text-2xl">
        Raw vegan cake north london -
      </p>
      <Link href="/about" className="text-gray-50">
        About MELL
      </Link>
      <AiOutlineRight className="text-gray-50" />
    </div>
  );
};

export default HomeBanner;
