"use client";

import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = ["Home", "Products", "Offers", "Shipping"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-slate-700"
          }`}
        >
          Logo
        </h1>

        {/* Botón de menú móvil */}
        <button
          className="text-2xl md:hidden transition-colors duration-300 text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

        {/* Menú de navegación (solo en desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`text-lg font-semibold transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-blue-600"
                  : "text-slate-700 hover:text-slate-400"
              }`}
            >
              {item}
            </a>
          ))}
          {/* Carrito en desktop */}
          <div className="relative hidden md:block">
            <FaShoppingCart
              className="text-2xl cursor-pointer text-slate-700"
              onClick={() => setCartCount(cartCount + 1)}
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </nav>
      </div>

      {/* Menú móvil (incluye carrito de compras) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-lg shadow-md md:hidden"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-xl font-semibold text-black hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* Carrito dentro del menú móvil */}
            <div className="relative mt-4">
              <FaShoppingCart
                className="text-3xl cursor-pointer text-black"
                onClick={() => setCartCount(cartCount + 1)}
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>

            <button
              className="mt-6 text-gray-600 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Cerrar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
