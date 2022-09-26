import React, { useEffect, useState } from "react";
import {
  getComposition,
  getEmailCompositions,
} from "@/lib/uniform/canvasClient";
interface Props {
  templateLink: string;
  pageComposition: Type.UniformComponentProps<any>;
}

const EmailPreview: React.FC<Props> = ({ templateLink, pageComposition }) => {
  const [updatedAt, setUpdatedAt] = useState(Date.now());
  useEffect(() => {
    setUpdatedAt(Date.now());
  }, [pageComposition]);

  return (
    <iframe
      key={updatedAt}
      style={{ width: "100wv", height: "100vh" }}
      title="Email preview"
      src={templateLink}
    />
  );
};

export const getStaticProps = async (
  context: Type.GetStaticPropsContext
): Promise<Type.GetStaticPropsResult<any>> => {
  const slug = context?.params?.emailSlug as string;
  const { preview = false } = context;
  const compositionSlug = `/emails/${slug}`;
  return getComposition(compositionSlug, preview)
    .then(({ pageComposition }) => ({
      props: {
        pageComposition,
        templateLink: `/api/emails?slug=${compositionSlug}`,
        preview,
      },
    }))
    .catch(() => ({ notFound: true }));
};

export const getStaticPaths = async () => {
  const compositions = await getEmailCompositions();

  return {
    paths: compositions.map((c) =>
      c.composition._slug.startsWith("/")
        ? `${c.composition._slug}`
        : `/${c.composition._slug}`
    ),
    fallback: false,
  };
};

export default EmailPreview;
