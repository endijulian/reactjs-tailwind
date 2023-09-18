import React, { useEffect } from "react";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import { useParams } from "react-router-dom";
import Breadcrumb from "components/Breadcrumb";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";
import useAsync from "helpers/hooks/useAsync";
import fetchData from "helpers/fetch";

export default function HomePage() {
  const { idp } = useParams();

  const { data, status, error, run, isLoading } = useAsync({
    data: { username: "" },
  });
  // console.log(data);

  useEffect(() => {
    run(fetchData({ url: `/api/products/${idp}` }));
  }, [run]);

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

      {isLoading ? "Loading" : <ProductDetails data={data}></ProductDetails>}
      {isLoading ? (
        "Loading"
      ) : (
        <Suggestion data={data?.relatedProducts || {}}></Suggestion>
      )}

      <Sitemap></Sitemap>
      <Footer></Footer>
    </>
  );
}
