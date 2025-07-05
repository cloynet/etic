import React from 'react'
import ProductClient from './ProductClient';
import { notFound } from 'next/navigation';

async function ProductDetail({ params }) {
const { id } = params;


const res = await fetch(`http://localhost:3000/products.json`);
const products = await res.json();

const product = products.find(p => p.id.toString() === id);

if (!product) {
    notFound();
}

return <ProductClient product={product}/>
}

export default ProductDetail