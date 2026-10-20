"use client";

import { usePathname } from "next/navigation";
import ComponentLabel from "./components/label";

export default function NotFound() {
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-center h-100">
      <ComponentLabel text={`${pathName} NOT FOUND`} />
    </div>
  );
}
