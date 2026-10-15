import Label from "./label";

export default function Footer() {
  return (
    <footer className="px-8 py-6 border border-t border-dashed">
      <div className="text-center">
        Footer <Label text={" /layout.js (root layout) "}/>
      </div>
    </footer>
  );
}
