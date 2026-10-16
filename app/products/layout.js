import Label from "../components/label";

export default function Layout({ children }) {
  return (
    <div className="p-4">
      <Label text={" /products/layout.js (products layout)"} />
      
      {children}
    </div>
  );
}
