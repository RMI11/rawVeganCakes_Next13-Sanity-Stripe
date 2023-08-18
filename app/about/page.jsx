import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../../images/about/profile.jpg";
import signatureImg from "../../images/about/signature.jpg";

const About = () => {
  return (
    <div className="mx-10 md:mx-32 py-10">
      <h3>ABOUT US</h3>

      <section className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start md:h-96 md:text-start text-center">
        <ul className="md:w-1/2 md:mt-0 my-10">
          <li>
            <a href="#begin" className="text-[#6a8d39]">
              How did it all begin?
            </a>
          </li>
          <li>
            <a href="#enquiries" className="text-[#6a8d39]">
              Questions or Enquiries
            </a>
          </li>
          <li>
            <a href="#order" className="text-[#6a8d39]">
              How do I place an order?
            </a>
          </li>
          <li>
            <a href="#rawvegan" className="text-[#6a8d39]">
              What is Raw Vegan?
            </a>
          </li>
          <li>
            <a href="#sugarfree" className="text-[#6a8d39]">
              Are your products sugar-free?
            </a>
          </li>
          <li>
            <a href="#delivery" className="text-[#6a8d39]">
              Deliver/Collection
            </a>
          </li>
          <li>
            <a href="#fresh" className="text-[#6a8d39]">
              How long do the products stay fresh?
            </a>
          </li>
          <li>
            <a href="#freeze" className="text-[#6a8d39]">
              Can I freeze the products?
            </a>
          </li>
          <li className="font-semibold">
            <a href="#customercare" className="text-[#6a8d39]">
              CUSTOMER CARE & ALLERGEN INFORMATION STATEMENT
            </a>
          </li>
        </ul>

        <div className="relative md:block h-1/2 md:h-full md:w-1/2 rounded-lg my-10  md:my-0">
          <Image
            src={profileImg}
            width={1000}
            height={1000}
            alt=""
            placeholder="blur"
            blurDataURL="/"
            className="h-full w-full object-cover rounded-lg"
          />
          <div className="flex justify-center md:justify-end absolute md:-bottom-[15%] md:-right-[3%] -bottom-[3%] -right-[1%]">
            <Image
              src={signatureImg}
              width={1000}
              height={1000}
              alt=""
              placeholder="blur"
              blurDataURL="/"
              className="h-40 w-40 overflow-clip object-cover rounded-lg"
              />
          </div>
        </div>
      </section>
      <div className="flex flex-col space-y-10 justify-start items-start text-center md:text-left py-10">
        <section id="history" className="scroll-my-10">
          <h4>How did it all begin?</h4>
          <section className="flex flex-col justify-start items-start text-center md:text-left space-y-5">
            <p>
              I've always loved baking and especially deserts! It all started
              back in 2016 in my kitchen in Barnet, north London although many
              of my recipes are inspired by places that I've visited; the
              Bajadera cake is inspired from my Balkan roots; the Coffee &
              Walnut cake from my birth town of Bitola, North Macedonia where
              the favourite passtime is to sit in one of the numerous cafes on
              the main thoroughfare (Shirok Sokak) sipping coffee and watching
              the World go by. The Lemon cake was actually inspired from my
              holiday on the beautiful Amalfi Coast in Italy whilst the Fig Bars
              were inspired from my travels in Turkey!
            </p>
            <p>
              As a family we try to lead a really healthy lifestyle with regular
              exercise and healthy food. I did however used to consume far too
              much refined sugar in my diet; my challenge was to cut this right
              down but still be able to enjoy a range of delicious cakes &
              deserts - this was the seed of my 'guilt-free' vegan indulgence
              business.
            </p>
            <p>
              Both friends & family loved sampling many of the products that I
              experimented with (although I've had my fair share of disasters
              along the way too!); it has been immensely challenging and equally
              rewarding to develop a range of raw vegan, gluten-free, no added
              sugar, dairy & soy free products simply using the vibrancy of
              flavour and colour to bring you super-healthy 'guilt-free'
              indulgent treats.
            </p>
          </section>
        </section>
        <section id="enquiries" className="scroll-my-10">
          <h4>Questions or Enquiries</h4>
          <section>
            <p>
              Do feel free to contact me to discuss any products. Perhaps your
              require a customised Birthday cake or Celebration cake? I'd be
              delighted to hear from you. Simply message me at
              info@rawvegancakes.co.uk and I'll get back right to you.
            </p>
          </section>
        </section>
        <section id="order" className="scroll-my-10">
          <h4>How do i place an order?</h4>
          <section>
            <p>
              Simply select your products and complete your order & pay online.
              You will then receive an Order Confirmation email.
            </p>
            <p>
              Please allow a minimum of 3-5 working days for your indulgent
              treat to be created. You will receive an email when your order is
              ready.
            </p>
          </section>
        </section>
        <section id="rawvegan" className="scroll-my-10">
          <h4>What is Raw Vegan?</h4>
          <section>
            <p>
              Raw Vegan products are simply and purely made from fresh uncooked
              ingredients so that all the natural goodness is retained{" "}
            </p>
          </section>
        </section>
        <section id="sugarfree" className="scroll-my-10">
          <h4>Are your products sugar-free?</h4>
          <section>
            <p>
              All the products contain natural sugars only. No refined sugars
              are added to any of my products; they are simply sweetened with
              dates & fresh fruit.
            </p>
          </section>
        </section>
        <section id="area" className="scroll-my-10">
          <h4>What areas do we serve?</h4>
          <section className="flex flex-col justify-start items-start space-y-5">
            <p className="md:mx-0 mx-auto">
            As our products are prepared with love using only natural ingredients, 
            they don’t travel well over long distances. 
            Most of our clients are therefore based in the North West London and Hertfordshire areas including:
            </p>
            <div className="flex justify-between w-[80%]">
            <section className="py-5 md:mx-0 mx-auto">
            <h5 className="md:mx-0 mx-auto">London</h5>
              <p className="font-semibold">EN5, ENGLAND, United Kingdom [BARNET]</p>
              <p className="font-semibold">EN6, ENGLAND, United Kingdom [BARNET]</p>
              <p className="font-semibold">N2, ENGLAND, United Kingdom [East Finchley area]</p>
              <p className="font-semibold">N3, ENGLAND, United Kingdom [Finchley Central area]</p>
              <p className="font-semibold">N12, ENGLAND, United Kingdom [North Finchley area]</p>
              <p className="font-semibold">Highgate, ENGLAND, United Kingdom</p>
              <p className="font-semibold">Wembley, ENGLAND, United Kingdom</p>
              <p className="font-semibold">Harrow, ENGLAND, United Kingdom</p>
              <p className="font-semibold">HA3, ENGLAND, United Kingdom [HARROW]</p>
              <p className="font-semibold">N1, ENGLAND, United Kingdom [Islington area]</p>
              <p className="font-semibold">N10, ENGLAND, United Kingdom [Muswell Hill area]</p>
              <p className="font-semibold">HA5, ENGLAND, United Kingdom [PINNER]</p>
              <p className="font-semibold">HA7, ENGLAND, United Kingdom [STANMORE]</p>
              <p className="font-semibold">HA8, ENGLAND, United Kingdom [EDGWARE]</p>
              <p className="font-semibold">N14, ENGLAND, United Kingdom [Southgate area]</p>
              <p className="font-semibold">N11, ENGLAND, United Kingdom [New Southgate/Finchley areas]</p>
              <p className="font-semibold">W3, ENGLAND, United Kingdom [Acton, East Acton, Park Royal, West Acton areas]</p>
              <p className="font-semibold">W5, ENGLAND, United Kingdom [Ealing area]</p>
              <p className="font-semibold">W7, ENGLAND, United Kingdom [Ealing area]</p>
              <p className="font-semibold">W6, ENGLAND, United Kingdom [Hammersmith, Fulham &amp; Hounslow areas]</p>
            </section>
            <section className="py-5 md:mx-0 mx-auto">
            <h5 className="md:mx-0 mx-auto">HERTFORDSHIRE, ENGLAND, UNITED KINGDOM</h5>
              <p className="font-semibold">St Albans, ENGLAND, United Kingdom</p>
              <p className="font-semibold">Hatfield, ENGLAND, United Kingdom</p>
              <p className="font-semibold">London Colney, ENGLAND, United Kingdom</p>
              <p className="font-semibold">AL2, ENGLAND, United Kingdom</p>
              <p className="font-semibold">AL3, ENGLAND, United Kingdom</p>
              <p className="font-semibold">Watford, ENGLAND, United Kingdom</p>
              <p className="font-semibold">WD17, ENGLAND, United Kingdom</p>
              <p className="font-semibold">Berkhamsted, ENGLAND, United Kingdom</p>
              <p className="font-semibold">HP4, ENGLAND, United Kingdom</p>
              <p className="font-semibold">Harpenden, ENGLAND, United Kingdom</p>
              <p className="font-semibold">Hemel Hempstead, ENGLAND, United Kingdom</p>
              <p className="font-semibold">HP2, ENGLAND, United Kingdom</p>
              <p className="font-semibold">Welwyn, ENGLAND, United Kingdom</p>
              <p className="font-semibold">AL7, 8, 9, ENGLAND, United Kingdom</p>
              <p className="font-semibold">Borehamwood, ENGLAND, United Kingdom</p>
              <p className="font-semibold">Elstree, ENGLAND, United Kingdom</p>
              <p className="font-semibold">Radlet, ENGLAND, United Kingdom</p>
            </section>
            </div>
          </section>
        </section>
        <section id="delivery" className="scroll-my-10">
          <h4>Delivery/Collection</h4>
          <section className="flex flex-col justify-start items-start space-y-5">
            <p>
              Most orders are available for collection within 3-5 working days.
              You will receive an email when your order is ready.
            </p>
            <h4>
              DELIVERY - Delivered to your doorstep for a small fee if you live
              within selected postcodes.
            </h4>

            <p>
              All raw vegan gluten-free cakes and products are made super-fresh
              to order with high quality ingredients. On the Checkout page, you
              can decide whether you would like your order delivered for a small
              fee (within selected postcodes) or whether you would like to
              collect it for free.
            </p>
            <section className="flex flex-col justify-start md:items-start items-center space-y-0.5 pt-10">
              <h4 className="">DELIVERY</h4>
              <p className="text-gray-500">
                raw vegan cake | gluten free cake | north London | Hertfordshire
              </p>
            </section>

            <p className="md:mx-0 mx-auto">
              Delivery is <span className="text-[#6a8d39]">£15</span> for the
              following postcodes:
            </p>
            <h5 className="md:mx-0 mx-auto">All AL postcodes</h5>
            <section className="py-5 md:mx-0 mx-auto">
              <p className="font-semibold">WD6 WD7 WD23 WD25</p>
              <p className="font-semibold">NW4 NW7 NW11</p>
              <p className="font-semibold">HA7 HA8</p>
              <p className="font-semibold">N2 N3 N10 N11 N12 N20</p>
            </section>
            <p>
              You may of course collect free of charge from{" "}
              <span className="text-[#6a8d39]">
                CakeMeHappyyy @ 37 Byng Road, Barnet EN5 4NW
              </span>
            </p>
            <p>
              Outside these postcodes, delivery is by arrangement only. Please
              contact me to discuss.
            </p>
          </section>
        </section>
        <section id="fresh" className="scroll-my-10">
          <h4>How long do the products stay fresh?</h4>
          <section>
            <p>
              The products can be kept fresh in the fridge for 3-5 days.
              Alternatively, all the products are suitable for freezing for up
              to 3 months.
            </p>
          </section>
        </section>
        <section id="freeze" className="scroll-my-10">
          <h4>Can I freeze the products?</h4>
          <section>
            <p>
              The products can be kept fresh in the fridge for 3-5 days.
              Alternatively, all the products are suitable for freezing for up
              to 3 months.
            </p>
          </section>
        </section>
        <section id="customercare" className="scroll-my-10">
          <h4>CUSTOMER CARE & ALLERGEN INFORMATION STATEMENT</h4>
          <section className="flex flex-col justify-start items-start space-y-5">
            <p>
              Caring about our customers is our No. 1 priority; to provide
              healthy and super-tasty raw vegan indulgent birthday cakes & celebration cakes. We want to
              ensure that you have an amazing experience.
            </p>
            <p>
              So, if you are pregnant or allergic to certain foods (nuts, seeds,
              gluten, dairy, wheat etc) then these products are not suitable for
              you. Most of the products contain nuts or could contain traces of
              nuts, seeds, gluten and other allergens.
            </p>
            <p>
              So, if you have any food allergies whatsoever, or you are pregnant
              we are sadly unable to supply you with our raw vegan products. We
              can't guarantee that any of our products are 100% 'Free-from' any
              allergen, however unlikely.
            </p>
            <section className="flex flex-col justify-start md:items-start items-center text-center md:text-left space-y-0.5">
              <p>
                If you wish to discuss any aspect of this, please do feel free
                to contact me here
              </p>
              <p>{"<info@rawvegancakes.co.uk>."}</p>
            </section>
          </section>
        </section>
      </div>
      
    </div>
  );
};

export default About;
