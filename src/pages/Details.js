import React from "react";
import Header from "parts/Header";
import Clients from "parts/Clients";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

import Breadcrumb from "components/Breadcrumb";

export default function HomePage() {
  return (
    <>
      <Header theme="black"></Header>

      <Breadcrumb
        list={[
          { name: "Home", url: "/" },
          { name: "Office Room", url: "/categories/9123" },
        ]}
      ></Breadcrumb>

      <Clients></Clients>
      <Sitemap></Sitemap>
      <Footer></Footer>
    </>
  );
}
