import React from 'react';

export default function Footer() {
  return (
    <div>
      <a
        href="https://wa.me/905010363271"  
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center space-x-2 z-50"
        aria-label="Teknik Destek için WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.36 11.36 0 0012 0C5.372 0 0 5.372 0 12a11.32 11.32 0 001.672 6.027L0 24l5.986-1.568A11.94 11.94 0 0012 24c6.628 0 12-5.372 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.963 0-3.81-.608-5.345-1.645l-.383-.24-3.55.93.94-3.466-.24-.38A9.985 9.985 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.545-7.32l-1.45-.68a.632.632 0 00-.642.157l-.64.65a7.548 7.548 0 01-3.476-3.477l.65-.642a.63.63 0 00.156-.64l-.682-1.449a.627.627 0 00-.64-.368c-.35.04-1.72.8-2.64 2.048-.79 1.044-1.1 2.163-1 2.582a2.625 2.625 0 001.992 1.992c.42.1 1.538-.215 2.581-1 .992-.795 1.627-1.81 1.685-1.91a.62.62 0 00-.366-.64z" />
        </svg>
        <span className="hidden sm:inline font-semibold">Teknik Destek</span>
      </a>

      
      <footer className="py-6 mt-16 text-center text-gray-600 text-sm select-none bg-orange-300">
        © {new Date().getFullYear()} Mentol Store. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
