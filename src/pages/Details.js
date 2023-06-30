import React from "react";
import Header from "parts/Header";
import Clients from "parts/Clients";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

import Breadcrumb from "components/Breadcrumb";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";

export default function HomePage() {
  return (
    <>
      <Header theme="black"></Header>

      <Breadcrumb
        list={[
          { name: "Home", url: "/" },
          { name: "Office Room", url: "/categories/9123" },
          { name: "Details", url: "/categories/9123/products/788" },
        ]}
      ></Breadcrumb>

      <ProductDetails></ProductDetails>
      <Suggestion></Suggestion>
      <Clients></Clients>
      <Sitemap></Sitemap>
      <Footer></Footer>
    </>
  );
}
