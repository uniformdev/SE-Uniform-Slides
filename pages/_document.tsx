import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { enableNextSsr } from "@uniformdev/context-next";
import createUniformContext from "../src/lib/uniform/uniformContext";
import { HtmlContext } from "next/dist/shared/lib/html-context";
import { useContext } from "react";

function CustomMain() {
  const { docComponentsRendered } = useContext(HtmlContext);
  docComponentsRendered.Main = true;
  const NextStuff = () => {
    // @ts-ignore
    return <next-js-internal-body-render-target />;
  };

  return (
    <div className="reveal">
      <NextStuff />
    </div>
  );
}
type CustomDocumentProps = DocumentInitialProps & {};

class MyDocument extends Document<CustomDocumentProps> {
  // required to enable SSR personalization
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const serverTracker = createUniformContext(ctx);
    enableNextSsr(ctx, serverTracker);
    return await Document.getInitialProps(ctx);
  }

  readonly slideBody = (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/reveal.css" />
      </Head>
      <body>
        <CustomMain />
        <NextScript />
      </body>
    </Html>
  );

  readonly standardBody = (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );

  render(): React.ReactElement {
    if (this.props.__NEXT_DATA__.page.startsWith("/slides/")) {
      return this.slideBody;
    }
    return this.standardBody;
  }
}

export default MyDocument;
