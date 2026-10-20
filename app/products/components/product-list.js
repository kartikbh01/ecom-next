import Link from "next/link";
import Image from "next/image";

export default async function ProductList({ query }) {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
  );

  const { products } = await res.json();

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="rounded-lg border-grey p-4">
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={500}
              height={500}
              className="h-48 w-full rounded-md object-cover"
            />
            <h2 className="mt-3 font-semibold">{product.title}</h2>
            <p className="mt-1 text-gray-600">${product.price}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
