import CategoryCarousel from "../../../components/Carousel/CategoryCarousel";
import ProductCart from "../../../components/ProductCart";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import image1 from "../../../images/carousel/chocholate_cakes/raw_vegan_cake_north_london-028.jpg";
import image2 from "../../../images/carousel/chocholate_cakes/raw_vegan_cake_north_london-029.jpg";
import image3 from "../../../images/carousel/chocholate_cakes/raw_vegan_cake_north_london-030.jpg";
import Slider from "../../../components/Slider";

const page = async () => {
  const products = await client.fetch(
    groq`*[_type == "product" && "Chocolate cakes" in categories[] ]{
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
  const subTitle1 = "raw vegan cake | gluten free cake | north london";
  const subTitle2 = "raw vegan cake | gluten free cake SHOP";
  const description =
    "Made with 100% Organic cacao, take a look at our range of guilt-free no-refined-sugar delicious & super-tasty raw vegan gluten-free Chocolate cakes. All the products are made with high quality natural ingredients to ensure they taste 100% yummy!";
  const title = "Chocolate Cakes";

  return (
    <div className="flex flex-col justify-center items-center max-w-screen divide-y-4 divide-[#6a8d39]">
      <div className="flex justify-center md:justify-start items-center w-full h-[4px] bg-[#469635] "></div>
      <section className="flex flex-col py-5 px-5 md:px-32 w-[100vw]">
        <div className="flex flex-col justify-center items-center w-full  mb-6">
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
