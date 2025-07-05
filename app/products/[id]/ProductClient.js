'use client';

import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function ProductClient({ product }) {
    const { addToCart } = useCart();


return (
    <div className="flex items-center justify-center min-h-[1000px]">
        <div className="max-w-[340] md:max-w-4xl w-full border-l-4 border-b-4 border-gray-500 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <div className="relative w-full md:w-1/2 h-96">
            <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            />
        </div>
        <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
            <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
                {product.name}
            </h1>
            <p className="text-gray-500 mb-4">{product.category}</p>
            <p className="text-lg text-gray-700 mb-6">
                {product.description}
            </p>
            </div>
            <div>
            <p className="text-2xl font-semibold text-red-600 mb-4">
                {product.price} ₺
            </p>
            <button 
            onClick={() => addToCart(product)}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition">
                Sepete Ekle
            </button>
            </div>
        </div>
        </div>
    </div>
    );
}