import ComponentLabel from "../components/label";
import SearchBar from "./components/search-bar";
import { Suspense } from "react";
import ProductList from "./components/product-list";

export default async function Products({ searchParams }) {
  const params = await searchParams;
  const query = params?.query || "";
  return (
    <div className="border  p-2 m-2">
      <ComponentLabel text={"/products/page.js (products page)"} />
      <SearchBar />
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense key={query} fallback={<p>Loading products...</p>}>
          <ProductList query={query} />
        </Suspense>
      </div>
    </div>
  );
}
