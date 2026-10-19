import ComponentLabel from "../../components/label";

export default async function Docs({ params }) {
  const { slug } = await params;

  return <ComponentLabel text={`Docs page ${slug.join("/")}`} />;
}
