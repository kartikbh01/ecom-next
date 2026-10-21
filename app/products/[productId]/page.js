import { notFound } from "next/navigation";
import Image from "next/image";
import ComponentLabel from "../../components/label";

export const generateMetadata = async ({ params }) => {
  const id = (await params).productId
  return {
    title: "product-" + id
  } // you can also fetch the product name  the id and set it as title
}

export default async function Product({ params }) {
  const { productId } = await params;

  // Validate product ID
  const id = Number(productId);

  if (!Number.isInteger(id) || id < 1 || id > 194) {
    notFound();
  }

  // Fetch product
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  const {
    title,
    description,
    brand,
    price,
    discountPercentage,
    rating,
    availabilityStatus,
    thumbnail,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
  } = product;

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );

  return (
    <main className="mx-auto max-w-6xl p-5">
      <ComponentLabel text={`/products/${productId}`} />

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        {/* Product image */}
        <div className="flex items-center justify-center rounded-xl bg-gray-100 p-6">
          <Image
            src={thumbnail}
            alt={title}
            width={500}
            height={500}
            className="h-[400px] w-full object-contain"
          />
        </div>

        {/* Product details */}
        <div className="space-y-5">
          <div>
            <p className="text-sm capitalize text-gray-300">
              {brand}
            </p>
            <h1 className="mt-2 text-3xl font-semibold">{title}</h1>

            <p className="mt-3 text-sm text-gray-400">{description}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★</span>
            <span className="font-medium">{rating}</span>
            <span className="text-sm text-gray-500">Product rating</span>
          </div>

          {/* Pricing */}
          <div className="border-y py-5">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">${discountedPrice}</span>

              <span className="text-lg text-gray-400 line-through">
                ${price}
              </span>

              <span className="rounded bg-green-100 px-2 py-1 text-sm text-green-700">
                {discountPercentage.toFixed(0)}% OFF
              </span>
            </div>
          </div>

          {/* Availability */}
          <div>
            <p className="font-medium">
              Availability:{" "}
              <span className="text-green-600">{availabilityStatus}</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {/* <button className="flex-1 rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-800">
              Add to cart
            </button> */}
          </div>

          {/* Additional information */}
          <div className="space-y-3 border-t pt-5 text-sm">
            <p>
              <span className="font-medium">Warranty:</span>{" "}
              {warrantyInformation}
            </p>

            <p>
              <span className="font-medium">Shipping:</span>{" "}
              {shippingInformation}
            </p>

            <p>
              <span className="font-medium">Returns:</span> {returnPolicy}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
