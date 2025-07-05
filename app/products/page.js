import ProductsClient from "./ProductsClient";


export default async function Products() {
  const res = await fetch('http://localhost:3000/products.json');
  const products = await res.json();

  return <ProductsClient products={products} />
}
