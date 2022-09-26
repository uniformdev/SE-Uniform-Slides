import React from "react";
import { NextApiHandler } from "next";
import { Composition, Slot } from "@uniformdev/canvas-react";
import ReactDOMServer from "react-dom/server";
import { getComposition } from "@/lib/uniform/canvasClient";
import emailResolver from "@/lib/resolvers/emailResolver";

const handler: NextApiHandler = async ({ query }, res) => {
  const { slug } = query;
  const { pageComposition: emailComposition } = await getComposition(
    slug as string,
    true
  );
  const markup = ReactDOMServer.renderToStaticMarkup(
    <Composition data={emailComposition} resolveRenderer={emailResolver}>
      <Slot name="body" />
    </Composition>
  );
  // <div>${markup}</div>
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
          <meta charset="UTF-8">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">    </head>
      <body style="margin: 0">
      <div>${markup}</div>
      </body>
    </html>
  `;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/html");
  res.send(html);
};

export default handler;
