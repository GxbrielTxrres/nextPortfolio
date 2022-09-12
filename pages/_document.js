import Document, { NextScript, Head, Main, Html } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="/fonts/Silkscreen-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            href="/fonts/Silkscreen-SemiBold.ttf"
            as="font"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
