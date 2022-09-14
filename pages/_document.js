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
          <script
            src="https://kit.fontawesome.com/8dc4ebdb8d.js"
            crossorigin="anonymous"
          ></script>
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
