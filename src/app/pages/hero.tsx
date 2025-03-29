import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="h-screen w-auto">
      <div className="relative flex">
        <div className="">
          <img
            src="/bgHero.jpg"
            alt="background"
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="absolute w-auto h-screen flex flex-col items-center md:items-baseline justify-center mx-16 lg:mx-32 xl:mx-80 md:max-w-md lg:max-w-2xl gap-8">
          <h1 className="text-5xl text-slate-700 font-bold ">
            Medicia Medical Service
          </h1>
          <p className="text-lg max-w-3xl text-slate-700 pb-10">
            Medicia as always focused on the best treatments with affordable
            price through the best medical services
          </p>
          <Link
            href=""
            className="p-4 flex justify-center bg-emerald-400 rounded-xl text-xl w-36 font-semibold hover:bg-emerald-700 hover:scale-110 transition-transform duration-500 ease-in-out"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
