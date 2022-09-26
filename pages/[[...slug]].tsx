import { GetStaticPropsContext } from "next";
import {
  getCompositionBySlug,
  getCompositionPaths,
} from "@/lib/uniform/canvasClient";
import { enhanceUmbraco } from "@/lib/enhancers/umbraco/enhancer";
import BaseComposition from "@/components/BaseComposition";

const CanvasPage = (props) => BaseComposition(props);
export default CanvasPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context?.params || {};
  const slugString = Array.isArray(slug) ? slug.join("/") : "/";
  const compositionSlug = slugString.startsWith("/")
    ? slugString
    : `/${slugString}`;

  const composition = await getCompositionBySlug({
    slug: compositionSlug,
    preview: false,
  });

  await enhanceUmbraco(composition);

  return {
    props: {
      composition,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getCompositionPaths();
  return {
    paths: paths,
    fallback: true,
  };
}
