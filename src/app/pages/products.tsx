"use client";

import React, { useState } from "react";
import listProducts from "@/app/components/products"; // Importamos la lista de productos

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  link: string;
  popular: boolean;
}

const Products = ({
  onAddToCart,
}: {
  onAddToCart: (product: Product, quantity: number) => void;
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Producto seleccionado
  const [quantity, setQuantity] = useState(1); // Cantidad seleccionada

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product); // Establecer el producto seleccionado para mostrar detalles
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value)); // Actualizamos la cantidad seleccionada
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      onAddToCart(selectedProduct, quantity); // Agregamos el producto con la cantidad seleccionada al carrito
      setSelectedProduct(null); // Cerramos el detalle del producto
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-64 py-8">
      <h1 className="text-slate-700 text-3xl font-bold pb-6">
        Popular Products
      </h1>
      <p className="text-slate-700 mb-8">
        Shopping Over $59 or first purchase you will get 100% free shipping
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 py-4 gap-10 w-full h-auto">
        {listProducts.map((product) =>
          product.popular ? (
            <div
              key={product.id}
              className="flex flex-col items-center justify-center gap-6 overflow-hidden relative cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[250px] h-[250px] object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
              <h2 className="text-slate-700 font-semibold">{product.title}</h2>
              <p className="text-emerald-400 font-semibold">${product.price}</p>
              {/* Botón para seleccionar el producto */}
              <button
                onClick={() => handleSelectProduct(product)}
                className="mt-4 bg-emerald-500 text-white py-2 px-6 rounded-md hover:bg-emerald-600 transition"
              >
                Select Product
              </button>
            </div>
          ) : null
        )}
      </div>

      {/* Si un producto está seleccionado, mostramos los detalles */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-slate-700 text-xl font-bold">
              {selectedProduct.title}
            </h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-[250px] object-cover mt-4"
            />
            <p className="text-emerald-400 font-semibold mt-4">
              ${selectedProduct.price}
            </p>

            {/* Select para elegir cantidad */}
            <div className="mt-4">
              <label htmlFor="quantity" className="block text-slate-700">
                Quantity
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="mt-2 w-full bg-slate-100 text-black py-2 px-4 rounded-md border border-slate-300"
              >
                {[1, 2, 3, 4, 5].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-4 items-center">
              <button
                onClick={handleAddToCart}
                className="mt-6 bg-emerald-500 text-white py-2 px-6 rounded-md hover:bg-emerald-600 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => setSelectedProduct(null)}
                className="mt-6 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
