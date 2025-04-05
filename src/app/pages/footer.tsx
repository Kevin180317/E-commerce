import { section } from "motion/react-client";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <section className="flex flex-col items-center justify-center px-16 lg:px-32 xl:px-64 py-8 gap-16 text-slate-700 bg-slate-200">
      <div className="md:flex items-start justify-between w-full gap-4">
        <div className="flex flex-col max-w-sm gap-4">
          <img
            src="https://www.marveltheme.com/tf/html/medicia/assets/images/logo/medicia_2.png"
            alt="logo"
            className="w-32 h-auto"
          />
          <p className="text-sm">
            Medicia is an online medical service and medicinewooCommerce
            Template for your ultimate online store and medical service.
          </p>
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-map"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
              <path d="M9 4v13" />
              <path d="M15 7v13" />
            </svg>
            <p className="text-sm mb-8 md:mb-0">
              16122 Collins Street West Victoria 8007 Australia
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm gap-4">
          <h1 className="font-semibold text-lg">Payments</h1>
          <p className="text-sm">Secure Payments</p>
          <div className="flex gap-2">
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/payment_card/card_1.png"
              alt=""
            />
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/payment_card/card_2.png"
              alt=""
            />
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/payment_card/card_3.png"
              alt=""
            />
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/payment_card/card_4.png"
              alt=""
            />
            <img
              src="https://www.marveltheme.com/tf/html/medicia/assets/images/payment_card/card_5.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <p className="mr-1">© 2025 Medica Medical Service, Developed by</p>
        <Link
          href="https://prometheustij.com/"
          className="text-slate-700 hover:text-emerald-400"
          target="_blank"
        >
          Prometheus R&D Tijuana
        </Link>
      </div>
    </section>
  );
}

export default Footer;
