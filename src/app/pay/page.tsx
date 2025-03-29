"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
}

const PayPage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  // Cargar los productos desde localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Calcular el total del carrito
  const total = cart
    .reduce((sum, product) => sum + parseFloat(product.price), 0)
    .toFixed(2);

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-slate-700">
        Resumen de Compra
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">No tienes productos en tu carrito.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-lg font-semibold">
            <p className="text-slate-700">
              Total a pagar: <span className="text-green-600">${total}</span>
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={clearCart}
              className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Vaciar carrito
            </button>
            <button
              onClick={() => router.push("/")}
              className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayPage;
