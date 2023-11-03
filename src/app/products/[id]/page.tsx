"use client";
import React from "react";
import { useParams } from "next/navigation";
import products from "@/app/components/products";
import Image from "next/image";

const ProductPage: React.FC = () => {
  const { id } = useParams();

  // Buscar el producto correspondiente al id en la URL
  const selectedProduct = products.find((product) => product.id === id);

  return (
    <div>
      {selectedProduct ? (
        <>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 px-32 py-8">
              {" "}
              <Image src={selectedProduct.image} alt={selectedProduct.title} height={400} width={550} />
            </div>
            <div className="flex-1">
              <h1>Detalles del producto</h1>
              <p>ID del producto: {selectedProduct.id}</p>
              <h2>Título: {selectedProduct.title}</h2>
              <p>Precio: {selectedProduct.price}</p>
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
