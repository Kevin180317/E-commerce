"use client";

import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Header({
  cartCount,
  onCartClick,
}: {
  cartCount: number;
  onCartClick: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
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
        <h1
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-slate-700"
          }`}
        >
          Logo
        </h1>

        {/* Menú hamburguesa */}
        <button
          className="text-2xl md:hidden transition-colors duration-300 text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú en desktop */}
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
          <div className="relative hidden md:block">
            <FaShoppingCart
              className="text-2xl cursor-pointer text-slate-700"
              onClick={onCartClick}
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </nav>
      </div>

      {/* Menú desplegable en mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-md p-6 flex flex-col gap-6 z-50"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-lg font-semibold text-black hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="relative">
              <FaShoppingCart
                className="text-2xl cursor-pointer text-slate-700"
                onClick={() => {
                  setMenuOpen(false);
                  onCartClick();
                }}
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
