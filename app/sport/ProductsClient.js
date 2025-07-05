'use client'

import React, { useState } from 'react'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'

function ProductsClient({ products }) {

    const { addToCart } = useCart();
    const [search, setSearch] = useState("");

    const filteredProducts = products
        .filter(product => product.category === "Sport")
        .filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );


    return (
    <div className='p-6'>

        <div className='max-w-md mt-6 ml-6 -mb-6'>
            <input
                type='text'
                placeholder='Ürün ara...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-full border rounded-lg px-4 py-2'
            />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mt-10'>

            {filteredProducts.length === 0 && (
                <p className='text-center col-span-full text-gray-500'>Ürün bulunamadı</p>
            )}


            {filteredProducts.map(product => (
            <div key={product.id} className='max-w-[450px] h-full flex flex-col justify-between border rounded-lg p-4 shadow hover:shadow-md transition'>  
                    {product.image && (
            <div className='relative h-96'>
                <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded"
            />
            </div>
            )}
            <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>
            <p className='text-gray-500 text-sm'>{product.category}</p>

            <div className='flex items-center justify-between'>
            <p className="mt-1 text-red-600 font-bold">{product.price} ₺</p>
            <button 
            onClick={() => addToCart(product)}
            className='bg-red-100 rounded-xl px-10 py-3 cursor-pointer'>
            Sepete Ekle
            </button>
            </div>

            <Link
            className='mt-4 bg-red-100 text-red-700 rounded-xl py-2 px-4 text-center text-sm font-semibold'
            href={`/products/${product.id}`}
            >
            Detayları gör
            </Link>
                </div>
            ))}
    </div>
    </div>
    )
}

export default ProductsClient