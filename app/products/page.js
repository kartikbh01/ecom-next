import Link from "next/link";
import Label from "../components/label";

export default async function Products() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  return (
    <div className="border border-dashed p-2 m-2">
      <Label text={"/products/page.js (products page)"} />
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg border-grey p-4">
            <Link href={`/products/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-48 w-full rounded-md object-cover"
              />
              <h2 className="mt-3 font-semibold">{product.title}</h2>
              <p className="mt-1 text-gray-600">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
