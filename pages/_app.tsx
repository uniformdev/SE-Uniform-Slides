import { UniformContext } from "@uniformdev/context-react";
import { UniformAppProps } from "@uniformdev/context-next";
import createUniformContext from "@/lib/uniform/uniformContext";
import getConfig from "next/config";
import "../styles/globals.css";

const clientContext = createUniformContext();
const { serverRuntimeConfig } = getConfig();
const { outputType } = serverRuntimeConfig;

function MyApp({
  Component,
  pageProps,
  serverUniformContext,
}: UniformAppProps) {
  return (
    <UniformContext
      context={serverUniformContext ?? clientContext}
      outputType={outputType}
    >
      <Component {...pageProps} />
    </UniformContext>
  );
}

export default MyApp;
