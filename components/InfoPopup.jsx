import Link from 'next/link'
import React from 'react'
import { client } from '../sanity/lib/client';
import { groq } from 'next-sanity';
import { useEffect } from 'react';
import { useState } from 'react';


const InfoPopup = () => {
    const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const data = await client.fetch(
        groq`*[ _type == "content" ]{
          newsdate,
          news,
          popup,
          showpopup,
        }`
      );
      setContent(data);
    };

    fetchContent();
  }, []);

    if (!content) {
        return null;
      }

  return (
    content?.map(cont => (
    <div
        className={`${cont.showpopup == true ? "fixed bottom-[20px] left-[5px] md:bottom-[20px] md:left-[20px] max-w-[280px] md:max-w-[500px] w-full bg-[#479635] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5" : "hidden"}`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm md:text-lg font-medium text-white">
                 {cont.popup}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                
              </p>
            </div>
          </div>
        </div>
        
      </div>
  )))

}

export default InfoPopup