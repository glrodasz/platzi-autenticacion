import React, { Fragment } from "react";
import Head from "next/head";

const HtmlHead = () => (
  <Fragment>
    <Head>
      <title>Felida Music | Admin</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="32x32" href="/static/favicon.png" />

      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro|Open+Sans:400,700"
      />
    </Head>
  </Fragment>
);

export default HtmlHead;
