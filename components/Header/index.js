'use client';

import React from 'react'
import Link from 'next/link'
import { useCart } from "@/context/CartContext"
import ProductDropdown from '../ProductsDropdown'

function Header() {
  const { cartItems } = useCart();

  return (
    <div className='flex w-full items-center justify-center p-3 md:justify-between md:py-6 md:px-32 bg-orange-400 md:items-center'>
        <div className='hidden md:block'>
            <Link
            href="/"
            className='md:text-3xl'
            >
              MENTOL
            </Link>
        </div>
        <nav>
            <ul className='flex space-x-5 md:space-x-10 md:text-xl md:items-center'>
                <li className='text-red-100'>
                    <Link
                    href="/"
                    >
                    Anasayfa
                    </Link>
                </li>
                <ProductDropdown/>
                <li className='text-red-100 relative'>
                    <Link
                    href={'/cart'}
                    >
                    <div className='flex items-center gap-4'>
                      <svg 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"
                      >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" 
                    />
                    </svg>
                      <span className={`absolute top-0 left-10 w-5 :h-5 bg-red-500 rounded-full text-sm flex items-center justify-center border-2 border-white shadow-lg ${cartItems.length === 0 ? 'hidden': ''}`}>
                      {cartItems.length}
                      </span>
                    </div>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header



