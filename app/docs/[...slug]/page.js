import ComponentLabel from "../../components/label";

export default async function Docs({ params }) {
  const { slug } = await params;
  // docs/anything1/anything2 -> params -> {slug : ['anyting1', 'anything2']}
  // slug -> ['anything1', 'anything2]
  console.log(await params) 
  return <ComponentLabel text={`Docs page ${slug.join("/")}`} />;
}
