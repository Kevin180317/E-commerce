import React from "react";
import Products from "./pages/products";
import Hero from "./pages/hero";
import Offers from "./pages/offers";
import Shipping from "./pages/shipping";

function page() {
  return (
    <div className="bg-slate-200 overflow-x-hidden">
      <Hero />
      <Offers />
      <Products />
      <Shipping />
    </div>
  );
}

export default page;
