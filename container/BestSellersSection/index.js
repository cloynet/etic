'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function BestSellersSection() {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error ,setError] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 4,
    slideToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slideTsoShow: 2,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/products.json');
        if (!res.ok) throw new Error('Veri alınamadı');
        const data = await res.json();
        setBestSellers(data.filter(product => product.bestseller));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className='p-4 text-center'>Yükleniyor</div>
  if (error) return <div className='p-4 text-red-500'>{error}</div>
  if (!bestSellers.length) return <div className='p-4'>Çok satan ürün bulunamadı</div>

  return (
    <section className='p-8 text-center'>
        <h2 className='md:text-2xl font-bold mb-4'>En Çok Satanlar</h2>


        <div className='max-w-[300]'>
          <Slider {...settings}>
          
            {bestSellers.map((product) => (
              <div key={product.id} className='border rounded-lg p-4 hover:shadow-md transition-shadow'>

              <div className='relative h-48'>
                <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-cover rounded'
                />
              </div>
                <h3 className='font-semibold line-clamp-2'>{product.name}</h3>
                <p className='text-gray-500 test-sm'>{product.category}</p>
                <p className='font-bold text-red-600 mt-2'>
                    {product.price.toLocaleString('tr-TR')} TL
                </p>
              </div>
            ))}
        
        </Slider>
        </div>
    </section>
  )
}

export default BestSellersSection;