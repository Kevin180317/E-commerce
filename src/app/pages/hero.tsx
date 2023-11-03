import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {

    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-32 bg-black">
            <div className="flex-1 m-4 flex md:flex-col">
                <Image
                    alt="Hero"
                    src="/hero.png"
                    width={750}
                    height={700}
                    className='rounded-xl'
                />
            </div>
            <div className="flex-1 m-4">
                <h1 className="text-4xl font-bold mb-4">¡Bienvenido a mi tienda en línea!</h1>
                <p className="text-lg mb-4">Encuentra los mejores productos al mejor precio.</p>        
                <Link href="/products">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Comprar ahora
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero
