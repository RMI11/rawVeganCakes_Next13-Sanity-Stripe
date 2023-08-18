import React from "react";
import Image from "next/image";
import Link from "next/link";
const Slide = ({ title, image, slug }) => {
  return (
    <div className="flex flex-col justify-between rounded-md w-60 border shadow-xl">
      <Link href={`/products/${slug}`}>
        <Image
          src={image}
          width={420}
          height={372}
          className="h-[200px] w-full rounded-t-md object-fit"
          alt={title}
        />
      </Link>

      <div className="p-4 flex flex-col justify-between">
        <Link href={`/products/${slug}`} className="text-[#6a8d39]">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {title}
          </h1>
        </Link>
        <p className="text-sm text-gray-600">
          raw vegan cake | gluten free cake
        </p>
      </div>
    </div>
  );
};

export default Slide;
