import { NextResponse } from "next/server";
import { validateCartItems } from "use-shopping-cart/utilities";
import { stripe } from "../../../lib/stripe";
import { inventory } from "../../../config/inventory";

export async function POST(request) {
  const cartDetails = await request.json();
  const deliveryCharge = cartDetails["deliveryCharge"];
  delete cartDetails.deliveryCharge;
  const lineItems = validateCartItems(inventory, cartDetails);
  const origin = request.headers.get("origin");

  const lineItemsWithCents = lineItems.map((item) => ({
    ...item,
    price_data: {
      ...item.price_data,
      unit_amount: item.price_data.unit_amount * 100,
    },
  }));

  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card"],
    line_items: lineItemsWithCents,
    billing_address_collection: "auto",
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: deliveryCharge * 100,
            currency: "gbp",
          },
          display_name: "Delivery charge",
          delivery_estimate: {},
        },
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
  });
  return NextResponse.json(session);
}
