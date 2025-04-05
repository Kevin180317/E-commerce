"use client";

import React, { useState } from "react";
import Header from "./pages/header";
import Products from "./pages/products";
import Hero from "./pages/hero";
import Offers from "./pages/offers";
import Shipping from "./pages/shipping";
import ModalCart from "./pages/ModalCart";
import { Product } from "@/app/types"; // Ajusta la ruta según tu estructura

const Page = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const onAddToCart = (product: Product, quantity: number) => {
    const newCart = [...cart, ...Array(quantity).fill(product)];
    setCart(newCart);
  };

  return (
    <div className="bg-slate-200 overflow-x-hidden">
      <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <Offers />
      <Products onAddToCart={onAddToCart} />
      <Shipping />
      {isCartOpen && (
        <ModalCart
          cart={cart}
          setCart={setCart}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default Page;
