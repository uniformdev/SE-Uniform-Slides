import {
  CanvasClient,
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
  CompositionGetListResponse,
  CompositionListAPIResponse,
} from "@uniformdev/canvas";
import getConfig from "next/config";
import { enhanceUmbraco } from "@/lib/enhancers/umbraco/enhancer";

const {
  serverRuntimeConfig: { apiKey, apiHost, projectId },
} = getConfig();

export const canvasClient = new CanvasClient({
  apiKey,
  apiHost,
  projectId,
});

export async function getCompositionBySlug(params: {
  slug: string;
  preview: boolean;
}) {
  const { slug, preview } = params;
  const { composition } = await canvasClient.getCompositionBySlug({
    slug,
    state:
      process.env.NODE_ENV === "development" || preview
        ? CANVAS_DRAFT_STATE
        : CANVAS_PUBLISHED_STATE,
  });
  return composition;
}

export const getComposition = async (
  compositionSlug: string,
  preview: boolean
) => {
  if (!compositionSlug) {
    console.error("composition slug is not provided");
    return null;
  }

  const pageCompositionResult = await canvasClient.getCompositionBySlug({
    slug: compositionSlug,
    state: getState(preview),
    skipEnhance: true,
  });

  await enhanceUmbraco(pageCompositionResult.composition);

  return {
    pageComposition: pageCompositionResult.composition,
  };
};

export const getEmailCompositions = () =>
  canvasClient
    .getCompositionList({
      skipEnhance: true,
      type: "email",
      state: getState(false),
    })
    .then((c) => c.compositions);

export async function getCompositionList(
  compositionType: string,
  preview: boolean
) {
  const { compositions }: CompositionGetListResponse =
    await canvasClient.getCompositionList({
      type: compositionType,
      state:
        process.env.NODE_ENV === "development" || preview
          ? CANVAS_DRAFT_STATE
          : CANVAS_PUBLISHED_STATE,
    });
  return compositions;
}

export const getState = (preview: boolean) =>
  preview ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE;

export const getCompositionPaths = async () => {
  const pages = await canvasClient.getCompositionList({
    skipEnhance: true,
    state: getState(undefined),
    type: "page",
  });

  return (
    pages.compositions
      // .filter(
      //   (c) =>
      //     c.composition._slug &&
      //     c.composition._slug !== "/" &&
      //     c.composition._slug?.split("/").length === 2
      // )
      .map((c) => c.composition._slug)
  );
};
