"use client";

import React, { useState, useRef, useEffect } from "react";

function Header() {
  const [isInView, setIsInView] = useState(false);
  const targetRef = useRef(null);

  // Función para manejar el scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  };

  // useEffect para agregar y eliminar el event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup: eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="fixed top-0 z-50 p-4" ref={targetRef}>
      <div
        className={`w-full h-16 flex items-center justify-between ${
          isInView ? "bg-white" : "bg-transparent"
        }`}
      >
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav className="flex items-center gap-8">
          <a href="" className="text-lg font-semibold">
            Home
          </a>
          <a href="" className="text-lg font-semibold">
            Products
          </a>
          <a href="" className="text-lg font-semibold">
            Offers
          </a>
          <a href="" className="text-lg font-semibold">
            Shipping
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Header;
