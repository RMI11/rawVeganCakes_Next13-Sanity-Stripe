import Link from "next/link";
import logo from "../images/logo_head.png";
import Image from "next/image";
import fb from "../images/icons/facebook.png";
import ing from "../images/icons/instagram.png";

import { siteConfig } from "../config/site";
import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

export function SiteFooter() {
  const [news, setNews] = useState(null);

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
      setNews(data);
    };

    fetchContent();
  }, []);

  if (!news) {
    return null;
  }

  return (
    <footer>
      {/* footer-wrapper */}
      <div className="grid text-center items-center h-full grid-cols-1 md:grid-cols-4 gap-[2rem] w-[80%]">
        <div className="footer-company-data">
          <Link href="/home" className="flex items-center justify-center">
            <Image
              src={logo}
              width={165}
              height={55}
              alt="logo"
              className="mb-[.5rem]"
            />
          </Link>

          <div className="footer-company-data-address">
            <p>37 Byng Road</p>
            <p>Barnet EN5 4NW</p>
          </div>

          <div className="footer-contact">
            <a href="tel:07900601365">07900 601365</a>
            <a href="mailto:info@rawvegancakes.co.uk">
              info@rawvegancakes.co.uk
            </a>
          </div>

          <span className="footer-social flex items-center justify-center">
            <a href="https://www.facebook.com/cakemehappyyybymell">
              <Image src={fb} width={24} height={24} alt="facebook-icon" />
            </a>
            <a href="https://www.instagram.com/cakemehappyyybymell/?igshid=NTc4MTIwNjQ2YQ==">
              <Image src={ing} width={24} height={24} alt="instagram-icon" />
            </a>
          </span>
        </div>

        <nav className="flex flex-col" aria-label="Footer">
          <h4>LINKS</h4>
          {siteConfig.footer.map((item) => (
            <div key={item.name} className="pb-2">
              <Link href={item.href} className="text-sm leading-6">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        {news?.map((item) => (
          <div className="footer-latest_news">
            <h4>LATEST NEWS</h4>
            <p>{item.newsdate}</p>
            <p>
              {item.news}
              {/* Welcome to our new raw vegan glute-free cake website! Integration of
            the full shopping cart will be carried out in the next couple of
            months for seamless transactions; in the meantime do feel free to
            use PayPal to make payments – instructions are on the Order page. */}
            </p>
          </div>
        ))}

        <div className="footer-latest_news">
          <h4>CAKE ME HAPPYYY</h4>
          <p>raw vegan cake | gluten free cake</p>
          <p>
            It has been immensely challenging and equally rewarding to develop a
            range of raw vegan, gluten-free, no added sugar, dairy & soy free
            products simply using the vibrancy of flavour and colour to bring
            you super-healthy 'guilt-free' indulgent treats.
          </p>
        </div>
      </div>

      <div className="footer_rights text-xs">
        &copy; {new Date().getFullYear()} raw_vegan_cake | gluten_free_cake
        <Link href="https://www.cakemehappyyy.co.uk/" className="text-black">
          {" "}
          CakeMeHappyyy.
        </Link>
      </div>
    </footer>
  );
}
