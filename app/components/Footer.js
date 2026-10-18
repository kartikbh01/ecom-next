import ComponentLabel from "./label";
import Label from "./label";

export default function Footer() {
  return (
    <footer className="px-8 py-6 border border-t ">
      <div className="text-center">
        Footer <ComponentLabel text={" /layout.js (root layout) "}/>
      </div>
    </footer>
  );
}
