"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
}

const PayPage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isPurchased, setIsPurchased] = useState(false);
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

  // Manejar el proceso de pago
  const handlePayment = () => {
    setIsPurchased(true);
  };

  return (
    <main className="bg-white">
      <div className="container mx-auto  px-8 py-12  text-black">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">
          Resumen de Compra
        </h1>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Resumen de los productos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-slate-700">
              Productos en tu carrito
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">
                No tienes productos en tu carrito.
              </p>
            ) : (
              <ul className="space-y-4">
                {cart.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

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
            </div>
          </motion.div>

          {/* Formulario de Pago */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-slate-700 mb-4">
              Método de Pago
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre del titular
                </label>
                <input
                  type="text"
                  placeholder="Nombre del titular"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Número de tarjeta
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Fecha de vencimiento
                  </label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    CVC
                  </label>
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handlePayment}
                  className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Pagar
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {isPurchased && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-xl w-96"
            >
              <h3 className="text-xl font-semibold text-green-600">
                ¡Compra realizada con éxito!
              </h3>
              <p className="text-gray-600 mt-4">Gracias por tu compra.</p>

              <div className="mt-4">
                <h4 className="text-lg font-semibold text-slate-800">
                  Detalles de la compra
                </h4>
                <ul className="mt-4 space-y-4">
                  {cart.map((product) => (
                    <li key={product.id} className="flex justify-between">
                      <span className="text-gray-700">{product.title}</span>
                      <span className="text-gray-600">${product.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex justify-between font-semibold">
                  <span>Total:</span>
                  <span className="text-green-600">${total}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => router.push("/")}
                  className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Volver al inicio
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
};

export default PayPage;
