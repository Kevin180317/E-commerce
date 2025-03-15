"use client";
import React from "react";
import Link from "next/link";
import products from "@/app/components/products";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

import { FaArrowRight } from "react-icons/fa";
import { div, section } from "motion/react-client";
const Products = () => {
  return (
    <section className="flex flex-col items-center justify-center p-8">
      <h1 className="text-slate-700 text-3xl font-bold pb-6">
        Popular Products
      </h1>
      <p className="text-slate-700">
        Shopping Over $59 or first purchase you will get 100% free shipping
      </p>
      <div className="grid grid-cols-4 px-8 py-4 gap-8">
        {products.map((product, id) =>
          product.popular ? (
            <div
              key={id}
              className="flex flex-col items-center justify-center gap-6"
            >
              <img
                src={product.image}
                alt=""
                className="w-[250] h-[250] object-cover"
              />
              <h2 className="text-slate-700 font-semibold">{product.title}</h2>
              <p className="text-emerald-400 font-semibold">{product.price}</p>
            </div>
          ) : null
        )}
      </div>
      <Link
        href=""
        className="p-4 bg-emerald-400 rounded-xl text-lg hover:bg-emerald-700"
      >
        View All
      </Link>
    </section>
  );
};

export default Products;

{
  /* <div className="py-4">
      <h1 className="text-center text-4xl">Productos</h1>
      <p className="text-2xl p-4 text-center">
        Our newest styles are here to help you look your best.
      </p>
      <Link className="underline text-center" href="/products/">
        <p className="text-base">
          Explore products
          <span>
            <FaArrowRight className="inline-block ml-2" />
          </span>
        </p>
      </Link>
      <div className="grid grid-cols-2 px-8 py-4 md:grid-cols-4 gap-8">
        {products.map((product, id) => (
          <Card className="py-4" key={id}>
            <CardBody className="overflow-visible py-2">
              <Link href={product.link}>
                <Image
                  isZoomed
                  alt={product.title}
                  src={product.image}
                  height={350}
                  width={350}
                />
              </Link>
            </CardBody>
            <CardFooter className="pb-0 pt-2 gap-4 px-6 flex flex-col items-start">
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div> */
}
