import React from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";

import Breadcrumb from "components/Breadcrumb";
import Sitemap from "parts/Sitemap";
import ShoppingCart from "parts/Cart/ShoppingCart";
import ShippingDetails from "parts/Cart/ShippingDetails";

export default function Cart() {
  return (
    <>
      <Header theme="black"></Header>

      <Breadcrumb
        list={[
          { name: "Home", url: "/" },
          { name: "Cart", url: "/cart" },
        ]}
      ></Breadcrumb>

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart></ShoppingCart>
            <ShippingDetails></ShippingDetails>
          </div>
        </div>
      </section>

      <Sitemap></Sitemap>
      <Footer></Footer>
    </>
  );
}
