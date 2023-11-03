import Link from "next/link";
import React from "react";

export const metadata = {
    title: "Error 404",
};

const Error404 = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl">Página no encontrada</h1>
                <p className="text-2xl py-4">La página que estás buscando no existe.</p>
                <Link href="/" className="text-blue-500 underline">Volver a la página de inicio</Link>
            </div>
        </div>
    );
};

export default Error404;
