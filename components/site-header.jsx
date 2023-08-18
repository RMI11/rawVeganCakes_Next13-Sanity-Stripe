"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Pencil } from "lucide-react";
import { MainNav } from "./MainNav.jsx";
import Image from "next/image";
import fb from "../images/icons/facebook.png";
import ing from "../images/icons/instagram.png";
import "../styles/style.css";
import { useShoppingCart } from "use-shopping-cart";
import { GiHamburgerMenu } from "react-icons/gi";
import { siteConfig } from "../config/site";

export function SiteHeader() {
  const links = siteConfig.header;
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  
  return (
    <header className="header">
      {/* <div className="info-bar hidden md:block md:mb-3 md:mt-1 ">
        <p className="hidden md:block">
          <small>raw vegan cake | gluten free cake | North London | Hertfordshire </small>
        </p>
        <div className="social hidden md:block">
          <span className="flex">
          <p className="header-email mr-1 ">
            <Pencil fill="#bcda90" stroke="#bcda90" />
            <small>
              <a href="mailto:info@rawvegancakes.co.uk">
                info@rawvegancakes.co.uk
              </a>
            </small>
          </p>
            <a href="https://www.facebook.com/cakemehappyyybymell">
              <Image className="mr-2" src={fb} width={24} height={24} alt="facebook-icon" />
            </a>
            <a href="https://www.instagram.com/cakemehappyyybymell/?igshid=NTc4MTIwNjQ2YQ==">
              <Image src={ing} width={24} height={24} alt="instagram-icon" />
            </a>
          </span>
        </div>
      </div> */}

      <div className="menu-bar md:mt-6 md:mb-2 mt-4 mb-1">
        <MainNav className="flex justify-between md:pt-1" setShowDropDownMenu={setShowDropDownMenu}/>
      </div>
      
      {showDropDownMenu && (
        <div className="absolute top-[85px] px-5 w-full flex flex-col z-50 md:hidden shadow-2xl">
          <div
            className="flex justify-center items-center w-full h-10 bg-slate-50 hover:bg-[#bcda90] text-[#AC8067]"
            onClick={() => {
              setShowCategoryMenu(!showCategoryMenu);
            }}
            >
            <button>Shop&darr;</button>
          </div>
          {showCategoryMenu && (
            <div className="flex flex-col">
            {links.map((link) =>
                link.category && (
                  link.category.map((category) => (
                    <div
                      key={category.name}
                      className="flex justify-center items-center w-full h-10 bg-slate-50 hover:bg-[#bcda90]"
                    >
                      <Link
                        href={`/products/${category.slug}`}
                        onClick={() => setShowDropDownMenu(false)}
                        className="text-[#AC8067]"
                      >
                        {category.name}
                      </Link>
                    </div>
                  ))
                )
              )}
            </div>
          )}
          {links.map((link) => (
          
            link.name !== "Shop" && (
          <div
                    key={link.name}
                    className="flex justify-center items-center w-full h-10 bg-slate-50 hover:bg-[#bcda90]"
                  >
                    <Link className="text-[#AC8067]" href={link.href} onClick={() => setShowDropDownMenu(false)}>
                      {link.name}
                    </Link>
                  </div>
          )))}
          
        </div>
      )}
    </header>
  );
}
