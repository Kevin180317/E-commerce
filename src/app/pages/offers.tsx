import { div } from "motion/react-client";
import React from "react";

function Offers() {
  return (
    <div className="w-screen h-screen bg-slate-200">
      <div className="container mx-64 flex items-center justify-center">
        <div className="grid grid-cols-5 grid-rows-5 text-black gap-8 h-full w-full">
          <div className="row-span-2 relative">
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/promotion/img_1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0">
              <h1 className="text-5xl font-bold text-emerald-400">50% OFF</h1>
              <p className="text-4xl font-semibold text-slate-700">
                For First Purchase
              </p>
            </div>
          </div>
          <div className="col-span-2 relative">
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/promotion/img_2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0">
              <h1 className="text-5xl font-bold text-emerald-400">50% OFF</h1>
              <p className="text-4xl font-semibold text-slate-700">
                Digital Electronic Stethoscope
              </p>
            </div>
          </div>
          <div className="col-start-2 row-start-2 relative">
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/promotion/img_3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0">
              <p className="text-4xl font-semibold text-slate-700">
                Get Digital Thermometer
              </p>
            </div>
          </div>
          <div className="col-start-3 row-start-2 relative">
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/promotion/img_4.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0">
              <p className="text-emerald-400">Medical Supplies</p>
              <p className="text-4xl font-semibold text-slate-700">
                Coronavirus Medical Supplies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
