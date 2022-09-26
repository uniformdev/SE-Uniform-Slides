import { EnhancerBuilder, enhance, compose } from "@uniformdev/canvas";
import { Client } from "@umbraco/headless-client";
import {
  createEnhancer,
  HEARTCORE_CANVAS_PARAMETER_TYPES,
} from "@uniformdev/canvas-umbraco-heartcore";
import { umbracoModelConverter } from "./umbracoModelConverter";

const umbracoEnhancer = createEnhancer({
  client: new Client({
    apiKey: process.env.UMBRACO_HEARTCORE_API_KEY,
    projectAlias: process.env.UMBRACO_HEARTCORE_PROJECT_ALIAS,
  }),
});

export async function enhanceUmbraco(composition, context = {}) {
  return await enhance({
    composition,
    enhancers: new EnhancerBuilder().parameterType(
      HEARTCORE_CANVAS_PARAMETER_TYPES,
      compose(umbracoEnhancer, umbracoModelConverter)
    ),
    context: context,
  });
}
