import Header from "parts/Header";
import React from "react";
import Hero from "parts/Hero";
import JustArrived from "parts/HomePage/JustArrived";

export default function HomePage(props) {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <JustArrived></JustArrived>
    </>
  );
}
