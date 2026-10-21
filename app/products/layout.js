import ComponentLabel from "../components/label";
export const metadata = {
  title: "products",
  description: "Yes, It's all about products"
}

export default function Layout({ children }) {
  return (
    <div className="p-4">
      <ComponentLabel text={" /products/layout.js (products layout)"} />
      {children}
    </div>
  );
}
