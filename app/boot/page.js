import React from 'react'
import ProductsClient from './ProductsClient'

import { promises as fs } from "fs";
import path from 'path';

async function BootPage() {
    const file = await fs.readFile(
        path.join(process.cwd(), "public", "products.json"),
        "utf-8"
    );

    const products = JSON.parse(file);

    return <ProductsClient products={products} /> 
}

export default BootPage