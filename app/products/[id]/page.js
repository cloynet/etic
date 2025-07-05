import React from 'react'
import ProductClient from './ProductClient';
import { notFound } from 'next/navigation';

import { promises as fs } from "fs";
import path from 'path';

async function ProductDetail({ params }) {
const { id } = params;


const file = await fs.readFile(
        path.join(process.cwd(), "public", "products.json"),
        "utf-8"
    );

    const products = JSON.parse(file);

const product = products.find(p => p.id.toString() === id);



return <ProductClient product={product}/>
}

export default ProductDetail