import React from "react";
import Products from "./pages/products";
import Hero from "./pages/hero";
import Offers from "./pages/offers";

function page() {
  return (
    <div>
      <Hero />
      <Offers />
      <Products />
    </div>
  );
}

export default page;
