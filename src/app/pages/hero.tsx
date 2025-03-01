import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="h-screen w-screen">
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/bgHero.jpg"
            alt="background"
            className="w-auto h-screen "
          />
        </div>
        <div className="absolute h-screen flex flex-col items-center justify-center container mx-auto">
          <h1 className="text-4xl text-black">
            Medicia Medical Service and Woocommerce
          </h1>
          <p>
            Medicia as always focused on the best treatments with affordable
            price through the best medical services
          </p>
          <a href="" className="p-4 bg-emerald-400">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
