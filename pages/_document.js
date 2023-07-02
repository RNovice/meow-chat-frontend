import { cx } from "@emotion/css";
import Document, { Html, Head, NextScript, Main } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        className={cx(css`
          overflow-y: scroll;
          overscroll-behavior-y: none;
        `)}
      >
        <Head></Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
