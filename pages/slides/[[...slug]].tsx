import { GetStaticPropsContext } from "next";
import { getCompositionBySlug } from "@/lib/uniform/canvasClient";
import SlideComposition from "@/components/SlideComponents/SlideComposition";
import { enhanceUmbraco } from "@/lib/enhancers/umbraco/enhancer";

const CanvasPage = (props) => SlideComposition(props);

export default CanvasPage;

export async function getServerSideProps(context: GetStaticPropsContext) {
  const { slug } = context?.params || {};
  const slugString = Array.isArray(slug) ? slug.join("/") : slug;
  const slashedSlug = slugString.startsWith("/")
    ? "/slides/" + slugString
    : `/slides/${slugString}`;

  const composition = await getCompositionBySlug({
    slug: slashedSlug,
    preview: false,
  });

  await enhanceUmbraco(composition);

  return {
    props: {
      composition,
    },
  };
}
