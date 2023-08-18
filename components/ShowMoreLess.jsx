'use client'

import Link from "next/link";
import React, { useState } from "react";

const ShowMoreLess = ({ title, infoText, href }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="flex flex-col max-h-fit justify-between items-center space-y-2 rounded-md p-5 border border-slate-200 shadow-xl">
      <h5 className="font-bold">{title}</h5>
      <div>
        <p
          className={`paragraph md:line-clamp-none ${isExpanded ? "max-[768px]:line-clamp-none inline" : "max-[768px]:line-clamp-2"}`}
        >
          {infoText}{" "}
        </p>
        {infoText.length > 2 && (
          <button
            className="text-[#469635] inline-block md:hidden"
            onClick={toggleExpand}
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
      <button className="bg-[#469635] hover:bg-green-500 text-gray-50 w-1/2 h-7">
        <Link href={href} className="text-gray-50">
          Learn More
        </Link>
      </button>
    </div>
  );
};

export default ShowMoreLess;
