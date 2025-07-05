import React from 'react'


import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: ['400'],
});

function MainText() {
  return (
    <section>
        <h1 className={`${michroma.className} text-center text-3xl md:text-6xl text-green-600`}>MENTOL STORE</h1>
        <p className='text-center'>
          <span className="md:text-lg text-shadow-emerald-100 mt-6 text-center block">Uygun fiyat ve kaliteli ürünlerimizle %100 memnuniyet sunmaya</span>
          <span className='block text-lg md:text-2xl font-bold mt-1'>DEVAM EDİYORUZ</span>
        </p>    
    </section>
  )
}

export default MainText