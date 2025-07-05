import 'flowbite';
import "@/styles/globals.css";

import { CartProvider } from "@/context/CartContext"
import { Inter } from "next/font/google";

import Header from "@/components/Header"
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-orange-100`}>
        <CartProvider>
          <Header/>
        <main className='flex-grow'>
          {children}
        </main>
        <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
