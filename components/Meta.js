import React, { useEffect, useState } from "react";
import Head from "next/head";

const Meta = (props) => {
  const title = props.title ?? "LOADED";
  const description =
    props.description ?? "the sport & style of personal defense.";
  const image = props.image ?? "https://loaded.com/preview.jpg";
  const url = props.url ?? "https://loaded.com";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} key="title" />
        <meta name="og:title" content={title} key="og:title" />
        <meta property="og:site_name" content={title} />
        <meta name="description" content={description} key="description" />
        <meta
          name="og:description"
          content={description}
          key="og:description"
        />
        <meta property="og:url" content={url} key="url" />
        <meta property="og:image" content={image} key="image" />
        <meta
          property="twitter:card"
          content="summary_large_image"
          key="card"
        />
        <meta property="twitter:title" content={title} key="twitter:title" />
        <meta property="twitter:image" content={image} key="twitter:image" />
        <meta
          property="twitter:description"
          content={description}
          key="twitter:description"
        />
        <meta
          property="twitter:creator"
          content="@capitalxyz"
          key="twitter:creator"
        />

        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      {props.children}
    </>
  );
};

export default Meta;
