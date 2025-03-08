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
        <div className="absolute h-screen flex flex-col items-baseline justify-center container mx-64 max-w-6xl gap-8">
          <h1 className="text-6xl text-slate-700 font-bold ">
            Medicia Medical Service and Woocommerce
          </h1>
          <p className="text-2xl max-w-3xl text-slate-700 pb-10">
            Medicia as always focused on the best treatments with affordable
            price through the best medical services
          </p>
          <Link
            href=""
            className="p-4 bg-emerald-400 rounded-xl text-xl font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
