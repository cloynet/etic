'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ProductDropdown() {
  useEffect(() => {
    import('flowbite').then(({ initDropdowns }) => initDropdowns());
  }, []);

  return (
    <div className="relative">
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="text-center inline-flex items-center text-red-100"
      >
        Ürünler
      </button>

      <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
        <ul className="py-2 text-sm text-gray-700">
            <li>
                <Link
                href={'/products'}
                className='block px-4 py-2 hover:bg-gray-100'
                >
                Tüm Ürünler
                </Link>
            </li>
          <li>
            <Link 
            href="/sport" 
            className="block px-4 py-2 hover:bg-gray-100"
            >
              Spor Ayakkabılar
            </Link>
          </li>
          <li>
            <Link 
            href="/boot" 
            className="block px-4 py-2 hover:bg-gray-100"
            >
              Bot
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}