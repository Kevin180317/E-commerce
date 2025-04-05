import { div } from "motion/react-client";
import React from "react";
import Link from "next/link";

function Offers() {
  return (
    <section className="w-screen h-auto py-20 bg-slate-200">
      <div className="mx-16 lg:mx-32 xl:mx-64 flex flex-col items-center justify-center h-full">
        <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-8 w-full h-auto">
          <div className="md:row-span-2 relative overflow-hidden mb-8 md:mb-0">
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/promotion/img_1.jpg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <div className="flex flex-col items-end absolute bottom-16 right-6">
              <h1 className="text-4xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-emerald-400">
                50% OFF
              </h1>
              <p className="text-3xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-700 pb-8 md:pb-4 lg:pb-8">
                For First Purchase
              </p>
              <Link
                href=""
                className="p-4 bg-emerald-400 rounded-xl text-lg md:text-sm lg:text-medium xl:text-lg font-semibold hover:bg-emerald-700"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 relative overflow-hidden mb-8 md:mb-0">
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/promotion/img_2.jpg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <div className="absolute top-8 md:top-10 xl:top-16 left-8">
              <h1 className="text-4xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-emerald-400">
                50% OFF
              </h1>
              <p className="text-3xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-700 max-w-96 md:max-w-72 pb-4">
                Digital Electronic Stethoscope
              </p>
              <Link
                href=""
                className=" text-slate-700 rounded-xl text-lg md:text-sm lg:text-medium xl:text-lg font-semibold underline underline-offset-8 hover:text-emerald-400"
              >
                Visit Store
              </Link>
            </div>
          </div>
          <div className="md:col-start-2 md:row-start-2 relative overflow-hidden">
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/promotion/img_3.jpg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 hidden md:block"
            />
            <div className="flex-col items-end absolute bottom-16 md:bottom-8 lg:bottom-10 right-6 hidden md:flex">
              <p className="text-2xl md:text-lg lg:text-text-xl xl:text-2xl font-semibold text-slate-700">
                Get Digital
              </p>
              <p className="text-2xl md:text-lg lg:text-text-xl xl:text-2xl font-semibold text-slate-700">
                Thermometer
              </p>
              <Link
                href="/products/product1"
                className=" text-slate-700 rounded-xl text-lg md:text-sm lg:text-medium xl:text-lg font-semibold pt-4 underline underline-offset-8 hover:text-emerald-400"
              >
                Visit Store
              </Link>
            </div>
          </div>
          <div className="md:col-start-3 md:row-start-2 relative overflow-hidden">
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/promotion/img_4.jpg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <div className="absolute px-7 top-2 py-8">
              <p className="text-emerald-400">Medical Supplies</p>
              <p className="text-2xl md:text-lg lg:text-xl xl:text-2xl font-semibold text-slate-700 pb-4">
                Coronavirus Medical Supplies
              </p>
              <Link
                href=""
                className=" text-slate-700 rounded-xl text-lg md:text-sm lg:text-medium xl:text-lg font-semibold underline underline-offset-8 hover:text-emerald-400"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
