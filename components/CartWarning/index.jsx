"use client";
import React from "react";
import { Popover } from "@headlessui/react";

const CartWarning = ({ agree, setAgree }) => {
  const checkboxHandler = () => {
    setAgree(!agree);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-start items-center space-x-5">
        <input type="checkbox" id="agree" onChange={checkboxHandler} />
        <label htmlFor="agree" className="text-sm">
          Please read & confirm you understand
        </label>
      </div>
      <Popover className="flex flex-col">
        <Popover.Button className="flex justify-start items-center space-x-3">
          <label className="underline underline-offset-1 px-8 text-sm">
            the statement below.
          </label>
        </Popover.Button>

        <Popover.Panel className="z-10 mt-5">
          <section
            id="customercare"
            className=" scroll-my-10 bg-violet-900 text-white p-5"
          >
            <h4 className="text-sm font-bold">
              CUSTOMER CARE & ALLERGEN INFORMATION STATEMENT
            </h4>
            <section className="flex flex-col justify-start items-start space-y-0.5 text-xs">
              <p>
                Caring about our customers is our No. 1 priority; to provide
                healthy and super-tasty raw vegan indulgent treats. We want to
                ensure that you have an amazing experience.
              </p>
              <p>
                So, if you are pregnant or allergic to certain foods (nuts,
                seeds, gluten, dairy, wheat etc) then these products are not
                suitable for you. Most of the products contain nuts or could
                contain traces of nuts, seeds, gluten and other allergens.
              </p>
              <p>
                So, if you have any food allergies whatsoever, or you are
                pregnant we are sadly unable to supply you with our raw vegan
                products. We can't guarantee that any of our products are 100%
                'Free-from' any allergen, however unlikely.
              </p>
              <section className="flex flex-col justify-start items-start space-y-0.5 text-xs">
                <p>
                  If you wish to discuss any aspect of this, please do feel free
                  to contact me here
                </p>
                <p>{"<info@rawvegancakes.co.uk>."}</p>
              </section>
            </section>
          </section>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default CartWarning;
