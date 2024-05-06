import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        {/* <script
          src="https://static.soulmachines.com/widget-snippet-1.12.0.min.js"
          data-sm-api-key="eyJzb3VsSWQiOiJkZG5hLWxwZmxleDk4MWQtLWV4cGxvcmVyIiwiYXV0aFNlcnZlciI6Imh0dHBzOi8vZGguc291bG1hY2hpbmVzLmNsb3VkL2FwaS9qd3QiLCJhdXRoVG9rZW4iOiJhcGlrZXlfdjFfNDE5ZTNjYjEtMDRmOS00ZGZmLWFkYjItM2FlY2VjZmY3ODMxIn0="
        ></script> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
