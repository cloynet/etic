import ProductsClient from "./ProductsClient";

import { promises as fs } from "fs";
import path from 'path';

export default async function Products() {
  const file = await fs.readFile(
          path.join(process.cwd(), "public", "products.json"),
          "utf-8"
      );

      const products = JSON.parse(file);

  return <ProductsClient products={products} />
}
