"use client";
import { useRef } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import "../styles/style.css";
const inter = Inter({ subsets: ["latin"] });
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { SiteHeader } from "../components/site-header";
import Providers from "../components/providers";
import { SiteFooter } from "../components/site-footer";
import InfoPopup from "../components/InfoPopup";
import Head from "next/head";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const analitycs = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-NXGZKG81GZ");
};

export default function RootLayout({ children }) {
  const tawkMessengerRef = useRef();

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-NXGZKG81GZ"
          ></script>
          <script>
            {`
  window.dataLayer = window.dataLayer || []
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-NXGZKG81GZ') `}
          </script>

          <title>raw_vegan_cake</title>
          <meta
            name="description"
            content="All my cakes are made with Love! Raw vegan cake, dairy free cake, no added sugar all natural products. Full of goodnes and guilt free."
          />
          <meta
            name="keywords"
            content="raw_vegan_cake | gluten_free_cake | raw_vegan_cake_north_london | gluten_free_cake_north_london | raw_vegan_cake_hertfordshire | gluten_free_cake_hertfordshire"
          />
          <meta name="robots" content="index, follows" />
        </Head>
        <body className="layout-body">
          <Providers>
            <div className="layout-wrapper">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <TawkMessengerReact
                propertyId={process.env.NEXT_PUBLIC_TWAKTO_PROPERTY_ID}
                widgetId={process.env.NEXT_PUBLIC_TWAKTO_WIDGET_ID}
                ref={tawkMessengerRef}
              />

              <InfoPopup />
              <SiteFooter />
            </div>
          </Providers>
          <Analytics />
        </body>
      </html>
    </>
  );
}
