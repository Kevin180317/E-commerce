"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
}

const ModalCart = ({
  cart,
  setCart,
  onClose,
}: {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  onClose: () => void;
}) => {
  const handleRemove = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-96 p-6 rounded-lg shadow-lg text-black"
      >
        <div className="flex justify-between items-center mb-4 text-black">
          <h2 className="text-2xl font-bold text-slate-700">Tu Carrito</h2>
          <FaTimes
            className="cursor-pointer text-slate-700 text-xl"
            onClick={onClose}
          />
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">El carrito está vacío.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((product, index) => (
              <div
                key={index}
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
                    <p className="text-gray-600">{product.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Cerrar
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ModalCart;
