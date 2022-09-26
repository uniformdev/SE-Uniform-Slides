/* eslint-disable import/no-relative-packages */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - this is a relative import
import type { Context } from "netlify:edge";
import manifest from "../../src/lib/uniform/contextManifest.json" assert { type: "json" };

import {
  createEdgeContext,
  createUniformEdgeHandler,
  buildNetlifyQuirks,
} from "../../src/lib/uniform/index.deno.js";

const IGNORED_PATHS = /\/.*\.(ico|png|jpg|jpeg|svg|css|js|json)(?:\?.*|$)$/g;

export default async (request: Request, netlifyContext: Context) => {
  if (
    request.method.toUpperCase() !== "GET" ||
    request.url.match(IGNORED_PATHS) ||
    request.url.includes("/api/emails") //remove /api/emails route as it generates CORS error when "pushing to hubspot" ib Netlify with Edge enabled
  ) {
    return netlifyContext.next({ sendConditionalRequest: true });
  }

  const context = createEdgeContext({
    manifest,
    request,
  });

  const originResponse = await netlifyContext.next();

  const handler = createUniformEdgeHandler();

  const { processed, response } = await handler({
    context,
    request,
    response: originResponse,
    quirks: buildNetlifyQuirks(netlifyContext),
  });

  if (!processed) {
    return response;
  }

  console.info("Edge Function:", { url: request.url, processed });

  return new Response(response.body, {
    ...response,
    headers: {
      ...response.headers,
      "Cache-Control": "no-store, must-revalidate",
      Expires: "0",
    },
  });
};
// //@ ts-ignore
// import type { Context } from "netlify:edge";
// //@ ts-ignore
// import {
//   createEdgeContext,
//   createUniformEdgeHandler,
//   buildNetlifyQuirks,
// } from "../../lib/uniform/index.deno.js";

// import manifest from "../../lib/uniform/contextManifest.json" assert { type: "json" };
// const IGNORED_PATHS = /\/.*\.(ico|png|jpg|jpeg|svg|css|js|json)(?:\?.*|$)$/g;

// export default async (request: Request, netlifyContext: Context) => {
//   if (
//     request.method.toUpperCase() !== "GET" ||
//     request.url.match(IGNORED_PATHS)
//   ) {
//     return await netlifyContext.next({ sendConditionalRequest: true });
//   }

//   const context = createEdgeContext({
//     manifest,
//     request,
//   });

//   const originResponse = await netlifyContext.next();

//   const handler = createUniformEdgeHandler();

//   const { processed, response } = await handler({
//     context,
//     request,
//     response: originResponse,
//     quirks: buildNetlifyQuirks(netlifyContext),
//   });

//   if (!processed) {
//     return response;
//   }

//   return new Response(response.body, {
//     ...response,
//     headers: {
//       ...response.headers,
//       "Cache-Control": "no-store, must-revalidate",
//       Expires: "0",
//     },
//   });
// };
