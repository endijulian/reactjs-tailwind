import Header from "parts/Header";
import React from "react";
import Hero from "parts/HomePage/Hero";
import JustArrived from "parts/HomePage/JustArrived";
import Browse from "parts/HomePage/Browse";
import Clients from "parts/Clients";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";

export default function HomePage() {
  useScrollAnchor();

  return (
    <>
      <Header theme="white" position="absolute"></Header>
      <Hero></Hero>
      <Browse></Browse>
      <JustArrived></JustArrived>
      <Clients></Clients>
      <Sitemap></Sitemap>
      <Footer></Footer>
    </>
  );
}
