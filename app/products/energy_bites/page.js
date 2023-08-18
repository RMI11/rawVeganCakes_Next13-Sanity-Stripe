import ProductCart from "../../../components/ProductCart";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import CategoryCarousel from "../../../components/Carousel/CategoryCarousel";
import image1 from "../../../images/carousel/energy_bites/gluten_free_cake_north_london-010.jpg";
import image2 from "../../../images/carousel/energy_bites/gluten_free_cake_north_london-011.jpg";
import image3 from "../../../images/carousel/energy_bites/gluten_free_cake_north_london-012.jpg";
import Slider from "../../../components/Slider";

const page = async () => {
  const products = await client.fetch(
    groq`*[_type == "product" && "Energy bites" in categories[] ]{
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
  const images = [
    { name: "Two Tier Chocolate Cake", image: image1 },
    { name: "Pistachio, Macha & Chocolate Tart", image: image2 },
    { name: "Chocolate & Vanilla Cake with Blueberries", image: image3 },
  ];
  const subTitle1 =
    "raw vegan cake | gluten free cake | North London | Hertfordshire";
  const subTitle2 = "raw vegan cake | gluten free cake SHOP";
  const description =
    "Our Energy Bites are absolutely great for snacking and as a healthy afternoon pick-me-up. \n These tasty guilt-free no-refined-sugar raw vegan gluten-free bites come in a range of delicious flavours including our ‘Feast’ product which is a true celebration of all the flavours along with a bonus homemade \n100% Organic cacao chocolate swirl!";
  const title = "Energy Bites";

  return (
    <div className="flex flex-col justify-center items-center max-w-screen divide-y-4 divide-[#6a8d39]">
      <div className="flex justify-center md:justify-start items-center w-full h-[4px] bg-[#469635] "></div>
      <section className="flex flex-col py-5 px-5 md:px-32 w-[100vw]">
        <div className="flex flex-col justify-center items-center w-full mb-6 ">
          <h2 className="text-xl">{title}</h2>
          <p className="text-base w-[95vw] md:w-[60vw] text-center whitespace-normal">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 md:w-[75%] w-[90%] mx-auto">
          {products.map((product) => (
            <ProductCart product={product} key={product._id} />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-screen">
        <div className="flex justify-center md:justify-start items-center w-full h-[4px] bg-[#469635] "></div>
        <CategoryCarousel
          title={title}
          subTitle1={subTitle1}
          subTitle2={subTitle2}
          description={description}
          images={images}
        />
      </section>
      <Slider />
    </div>
  );
};

export default page;
