import Document, { Head, Main, NextScript, Html } from "next/document";

import { getSiteMetaData } from "utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();

    return (
      <Html lang={siteMetadata.language}>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </body>
      </Html>
    );
  }
}
