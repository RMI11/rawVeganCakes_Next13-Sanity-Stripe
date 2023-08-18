import Iframe from "react-iframe";
import Carousel from "../components/Carousel";
import HomeBanner from "../components/HomeBanner";
import Slider from "../components/Slider";
import Link from "next/link";
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";
import RecProductCart from "../components/RecProductCart";
import Image from "next/image";
import banner from "../images/homebanner3.png";
import PopupComponent from "../components/PopupComponent";
import ShowMoreLess from "../components/ShowMoreLess";

export default async function Home({ children }) {
  let title1 = "No added sugar";
  let infoText1 =
    "All the products contain natural sugars only; no refined sugars are added to any of my recipes, so let’s call then Guilt-Free! We don’t even use maple or agave syrup. Most of the products are simply sweetened with dates & fresh fruit. There’s nothing artificial added.";
  let href1 = "https://www.healthline.com/nutrition/too-much-sugar";
  let title2 = "Gluten free";
  let infoText2 =
    "All my products are Gluten-free; I even use gluten-free oats where oats are listed in the ingredients. Don’t forget there’s no flour used in any of the products; the closest alternative ‘flour’ I use is simply made from ground almonds. So if you have a Gluten intolerance, you’re good-to-go!";
  let href2 =
    "https://www.health.harvard.edu/staying-healthy/ditch-the-gluten-improve-your-health";
  let title3 = "Dairy free";
  let infoText3 =
    "None of my products contain Dairy; no milk, no butter, no eggs. We achieve delicious creamy dairy-free products using the creaminess which is derived from cashew nuts and coconut cream. Where a ‘milk’ is required, only plant-based alternatives are used such as organic almond and coconut milk.";
  let href3 =
    "https://thebeet.com/is-milk-bad-for-you-7-reasons-why-dairy-is-unhealthy/";
  let title4 = "Soya free";
  let infoText4 =
    "If you have a soy allergy or prefer to cut soy from your diet, these products are 100% soy-free! As only very few wholesome and natural products are used, we can assure very high standard of product integrity.";
  let href4 = "https://www.cleaneatingkitchen.com/dangers-of-eating-soy/";

  const products = await client.fetch(
    groq`*[ _type == "product" && recommended == true ]{
      _id,
      "id": _id,
      categories,
      image,
      price,
      name,
      size,
      ingredients,
      description,
      "slug": slug.current,
        }`
  );

  return (
    <div className="home_wrapper">
      <div className="flex justify-center items-center w-full h-[4px] bg-[#479635] "></div>

      <div className="w-full h-[calc(100vh - 90px)] flex flex-col md:flex-row-reverse md:items-center bg-[#80ff0028] border-b-[#479635] border-b-[1px]">
        <div className="md:w-[60%] flex items-center justify-center md:p-6 md:py-0 md:ml-8 mb-4 md:mb-0">
          <div className="h-[100%] w-full max-w-[800px] mx-auto">
            <Image
              src={banner}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              alt="banner"
            />
          </div>
        </div>

        <div className="md:w-[40%] w-full md:p-6 md:ml-12">
          <div className="flex flex-col h-full justify-center text-center px-1 md:px-0">
            <h1 className="text-[#9A684B] text-3xl md:text-[3.25rem] mb-12 leading-tight tracking-wide">
              The Home of Raw Vegan Celebration Cakes
            </h1>
            <p className="text-gray-500 text-lg md:text-[1.5rem] mb-4">
              Welcome to my Guilt-Free creations; a range of natural,
              super-fresh & healthy indulgent Raw Vegan Celebration cakes.
            </p>
            <p className="text-gray-500 text-lg md:text-[1.5rem] mb-4">
              All the products are made with the finest ingredients; <br /> they
              contain no added sugar (I only use dates as a sweetener) and are
              gluten, soy &amp; dairy free.
            </p>
          </div>
        </div>
      </div>
      <Slider />
      <div className="w-full h-full flex flex-col items-center mt-2">
        <h3 className="font-bold text-2xl text-center my-0 md:mt-12 md:mb-4">
          Our Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-4 md:w-[75%] w-[90%]">
          {products.map((product) => (
            <RecProductCart product={product} key={product._id} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-[2rem] w-[80%] h-fit text-center mt-[1.5rem]">
        <ShowMoreLess title={title1} infoText={infoText1} href={href1} />
        <ShowMoreLess title={title2} infoText={infoText2} href={href2} />
        <ShowMoreLess title={title3} infoText={infoText3} href={href3} />
        <ShowMoreLess title={title4} infoText={infoText4} href={href4} />
      </div>

      <div className="high_protein">
        <h5 className="font-bold text-xl md:first-line:mb-2">
          High in Protein
        </h5>
        {/* high_protein-grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] w-[80%] md:mt-1">
          <div className="flex flex-col justify-start items-center rounded-md space-y-3 p-7 border border-slate-200 shadow-xl">
            <p>
              One of the benefits of using such high-quality raw ingredients in
              my products is that they are full of wonderful natural goodness
              and packed with protein.
            </p>
            <p className="text-[#6a8d39]">➤ ➤ ➤ ➤ ➤ ➤</p>
          </div>
          <div className="flex flex-col justify-start items-center rounded-md space-y-3  p-7 border border-slate-200 shadow-xl">
            <p>
              Most of the protein is derived from nuts; hazelnuts, cashew nuts
              and in some recipes – peanuts. High protein snacks also help you
              feel fuller for longer.{" "}
            </p>
            <p className="font-semibold self-start">Cake me happyyy </p>
          </div>
        </div>
      </div>

      {/* <div className="relative w-[95%] md:w-[80%] h-96 mb-6"> */}
      {/* <Iframe
        url="https://widgets.sociablekit.com/google-reviews/iframe/161414"
        frameborder="0"
        width="90%"
        height="450"
        style={{ border: "0" }}
      /> */}
      {/* </div>

      <div className="relative w-[80%] md:w-[80%] h-80 border border-[#469635] rounded-lg my-6 md:mb-8 md:mt-0">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.206575372047!2d-0.2137229230729649!3d51.656054099832325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876171fd566b3e3%3A0xcf3eed8bd8fbf0e5!2sCakeMeHappyyy%20by%20Mell!5e0!3m2!1sen!2srs!4v1688303762334!5m2!1sen!2srs"
          width="600px"
          height="450px"
          display="block"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="absolute top-0 left-0 w-full h-full outline-none"
        />
      </div> */}

      <div className="flex flex-col md:flex-row w-[80%] h-full md:h-80 md:my-8">
        <div className="md:w-1/2">
          {/* Google Reviews iframe */}
          <div className="relative w-full h-80 mb-4 md:h-full">
            <Iframe
              url="https://widgets.sociablekit.com/google-reviews/iframe/161414"
              frameborder="0"
              width="100%"
              height="100%"
              style={{ border: "0" }}
            />
          </div>
        </div>
        <div className="md:w-1/2">
          {/* Google Map iframe */}
          <div className="relative w-full h-96 mb-2 md:h-full">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.206575372047!2d-0.2137229230729649!3d51.656054099832325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876171fd566b3e3%3A0xcf3eed8bd8fbf0e5!2sCakeMeHappyyy%20by%20Mell!5e0!3m2!1sen!2srs!4v1688303762334!5m2!1sen!2srs"
              width="100%"
              height="100%"
              display="block"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full outline-none overflow-hidden"
            />
          </div>
        </div>
      </div>

      <Slider />
    </div>
  );
}
