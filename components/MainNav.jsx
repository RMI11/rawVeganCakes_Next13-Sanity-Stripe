import { siteConfig } from "../config/site";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/cakeMeHappyNewLogo.jpg";
import { Dropdown } from "@nextui-org/react";
import "../styles/style.css";
import { ShoppingBag } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

export function MainNav({ setShowDropDownMenu }) {
  const links = siteConfig.header;
  const { cartCount } = useShoppingCart();

  return (
    //mainNav-wrapper,
    <div className="flex justify-center md:justify-between w-screen items-center md:mt-1">
      <div className="self-start pb-2 ">
        <Link href="/">
          <Image
            src={logo}
            width={165}
            height={55}
            className="h-[65px] md:h-[70px] w-full md:mt-[1.75rem] mt-[1rem] md:mb-[1rem] mb-[.5rem]"
            alt="logo"
          />
        </Link>
      </div>

      <div className="">
        {/*mainNav-ul */}
        <ul className="flex text-base justify-end items-center m-0 md:mt-[1rem] mt-[.5rem] gap-[1.5rem]">
          <div className="hidden md:flex text-base justify-end items-center m-0 md:mr-6 gap-[1.5rem]">
            {links.map((link) => (
              <li className="hidden md:flex" key={link.name}>
                {link.category ? (
                  <Dropdown>
                    <Dropdown.Button
                      className="dropdown-button font-bold"
                      id="dropdown-button"
                      style={{ fontWeight: 'bold', color: '#666666' }}
                    >
                      <p style={{ fontWeight: 'bold', color: '#666666' }}>{link.name}</p>
                    </Dropdown.Button>
                    <Dropdown.Menu aria-label="Static Actions">
                      {link.category.map((category) => (
                        <Dropdown.Item key={category.name} style={{ color: '#AC8067'}}>
                          <Link href={`/products/${category.slug}`} id="drop-links">
                            {category.name}
                          </Link>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Link className="mainNav-link" href={link.href}>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </div>
          <div>
            <li className="flex">
              <div className="mr-2">
                <Link href="/cart" className="flex">
                  <ShoppingBag height={26} width={26} />
                  <span className="cart-quantity">{cartCount}</span>
                  <span className="sr-only">Cart</span>
                </Link>
              </div>

              <button
                onClick={() => setShowDropDownMenu((prev) => !prev)}
                className="block md:hidden"
              >
                <GiHamburgerMenu size={30} />
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
