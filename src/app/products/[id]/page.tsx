"use client";
import React from "react";
import { useParams } from "next/navigation";
import products from "@/app/components/products";
import Image from "next/image";
import { Tabs, Tab } from "@heroui/tabs";
import Header from "@/app/pages/header";

const ProductPage: React.FC = () => {
  const { id } = useParams();

  const btnSize = ["XS", "S", "M", "L", "XL"];
  let tabs = [
    {
      id: "photos",
      label: "PRODUCTION INFORMARION",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "music",
      label: "SHIPPING & RETURNS",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  const selectedProduct = products.find((product) => product.id === id);

  return (
    <div>
      {selectedProduct ? (
        <>
          <div className="flex flex-col md:flex-row items-center h-screen text-slate-800 bg-slate-100">
            <div className="flex-1 py-8 px-32">
              {" "}
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="rounded-2xl"
                height={400}
                width={550}
              />
            </div>
            <div className="flex-1 px-8">
              <h1 className="text-5xl">{selectedProduct.title}</h1>
              <p className="flex justify-start py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, voluptatem?
              </p>
              <span className="font-bold text-xl">Select size</span>
              <div className="flex py-4 gap-4">
                {btnSize.map((size, id) => (
                  <button
                    key={id}
                    className="border p-4 hover:bg-white hover:text-black"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-2xl">{selectedProduct.price}</p>
              <button className="border mt-4 w-80 p-4 hover:bg-white hover:text-black">
                Add to card
              </button>
              <div className="py-2">
                <Tabs aria-label="Dynamic tabs" items={tabs}>
                  {(item) => (
                    <Tab key={item.id} title={item.label}>
                      <p className="p">{item.content}</p>
                    </Tab>
                  )}
                </Tabs>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ProductPage;
