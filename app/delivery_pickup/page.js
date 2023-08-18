import Image from "next/image";
import React from "react";
import img from "../../images/bag.jpg";
import img1 from "../../images/delivery.jpg";
import img2 from "../../images/special_boxes.jpg";
import map from "../../images/icons/map-icon.png";
import features from "../../images/icons/feature-icon.png";

const page = () => {
  return (
    <div className="delivery_wrapper">
      <div className="flex justify-center md:justify-start items-center w-full h-[4px] bg-[#469635] "></div>
      <div className="delivery">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[95%] md:w-full gap-[2rem] mt-[3rem]  ">
          <div className="flex flex-col justify-start items-center">
            <Image src={img} className="mt-[3rem] mb-2" alt="pickup_service" />
            <h3>PICK UP SEVICE</h3>
            <h5>Collect your birthday cakes & celebration cakes for free</h5>
          </div>
          <div className="flex flex-col justify-start items-center">
            <Image src={img1} className="mt-[3rem] mb-2" alt="free_delivery" />
            <h3>DELIVERY</h3>
            <h5>Delivered to your doorstep for a small fee</h5>
            <h5>if you live within selected postcodes.</h5>
          </div>
        </div>
        <p className="my-[6rem] md:w-full w-[90%] text-center md:text-left">
          All raw vegan gluten-free cakes and products are made super-fresh to
          order with high quality ingredients. On the Checkout page, you can
          decide whether you would like your order delivered for a small fee
          (within selected postcodes) or whether you would like to collect it
          for free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-full gap-[2rem] mt-[2rem] mb-[6rem] text-center md:text-left">
          <div>
            <span className="flex  items-center mr-1 justify-center md:justify-start">
              <Image src={map} className="mr-1"></Image>
              <h5>FREE COLLECTION</h5>
            </span>
            <small>
              raw vegan cake | gluten free cake | north london | Hertfordshire
            </small>
            <p className="md:mt-2">
              You are welcome to collect your order from{" "}
              <span className="text-[#469635]">
                {" "}
                CakeMeHappyyy @ 37 Byng Road, Barnet EN5 4NW
              </span>{" "}
              once you have received confirmation that order is ready for
              collection.
            </p>
            <p className="md:my-2">
              Please allow a minimum of 3-5 working days for your order to be
              ready.
            </p>
            <p>
              Kindly message me the expected time of arrival so that you are not
              disappointed. Do feel free to message or call me on 07900 601365
              if you have any collection queries or you are running late.
            </p>
          </div>

          <div>
            <span className="flex items-center justify-center md:justify-start">
              <Image src={features} className="mr-1"></Image>
              <h5>DELIVERY</h5>
            </span>
            <small>
              raw vegan cake | gluten free cake | north london | Hertfordshire
            </small>
            <p className="md:mt-2">
              Please allow a minimum of 3-5 working days for your order to be
              ready.
            </p>
            <p className="md:mt-2">Delivery is £15 for the following postcodes:</p>

            <h6>All AL postcodes</h6>

            <h6>WD6 WD7 WD23 WD25</h6>
            <h6>NW4 NW7 NW11</h6>
            <h6>HA7 HA8</h6>
            <h6>N2 N3 N10 N11 N12 N20</h6>

            <p>
              You may of course collect free of charge from{" "}
              <span className="text-[#469635]">
                {" "}
                CakeMeHappyyy @ 37 Byng Road, Barnet EN5 4NW
              </span>{" "}
            </p>
            <p>
              Outside these postcodes, delivery is by arrangement only. Please
              contact me to discuss.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
