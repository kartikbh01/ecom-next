import ComponentLabel from "../components/label";

export default function Layout({ children }) {
  return (
    <div className="">
      <ComponentLabel text={"shared layout for auth group -> /layout.js inside (auth)"} />
      <div className="border  m-2 p-3 mx-auto h-170">{children}</div>
    </div>
  );
}
