import React from 'react'

function CustomerReviews() {
  return (
    <section className='mt-16 max-w-3xl px-4 rounded-2xl p-3'>
        <h3 className='text-3xl mb-6'>
            Sizlerden gelenler
        </h3>

        <div className='space-y-6'>

            <blockquote className='bg-white border-l-4 border-green-500 p-5 rounded-lg shadow transition hover:shadow-md'>
                <p className='italic text-gray-700'>
                    Hızlı bir şekilde elime geldi memnun kaldım
                </p>
                <footer className='mt-2 text-sm text-gray-500'>
                    - Eren E.
                </footer>
            </blockquote>

            <blockquote className='bg-white border-l-4 border-green-500 p-5 rounded-lg shadow transition hover:shadow-md'>
                <p className='italic text-gray-700'>
                    Kargo ve faturada bir sorun yoktu fazlasıyla memnunum
                </p>
                <footer className='mt-2 text-sm text-gray-500'>
                    - Yigit E.
                </footer>
            </blockquote>

            <blockquote className='bg-white border-l-4 border-green-500 p-5 rounded-lg shadow transition hover:shadow-md'>
                <p className='italic text-gray-700'>
                    Ürünün kalitesi harika, müşteri temsilcileri işlerini başarıyla yapıyorlar
                </p>
                <footer className='mt-2 text-sm text-gray-500'>
                    - Mehmet E.
                </footer>
            </blockquote>

        </div>

    </section>
  )
}

export default CustomerReviews