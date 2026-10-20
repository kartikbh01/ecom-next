"use client";

import { useDebouncedCallback } from "use-debounce";
import ComponentLabel from "../../components/label";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams(); // A client component hook that lets you read the current URL's search parameters
  const pathname = usePathname(); // A client component hook that lets you read the current URL's pathname (returns /dashboard when on /dashboard?q="something"&sort="something")
  const { replace } = useRouter(); // Allows you to programmatically change routes inside Client components

  const search = searchParams.get("query");

  const handleSearch = useDebouncedCallback((searchTerm) => {
    console.log(searchTerm)
    const params = new URLSearchParams(searchParams);
    // a web API that provied utility methods for manipulat9ing the URL query parameters.
    // Instead of creating complex string lieteral, you can use it oget the params string like ?page=1?query=a
    if (searchTerm) {
      params.set("query", searchTerm);
      // /products -> /products?query=searchTerm
      // searchTerm : "green shirt" -> /products?query=green+shirt
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`); // params.toString() translates the input into url-friendly format
  }, 500);

  return (
    <div className="mx-auto max-w-md">
      <ComponentLabel text={"client component"} />
      <input
        type="search"
        placeholder="Search products..."
        defaultValue={search}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded-xl border p-2"
      />
    </div>
  );
}
