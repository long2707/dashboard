import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  description: string;
};

const Meta: React.FC<Props> = (props) => {
  const { title, description } = props;
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <title>{title} | Admin</title>
      <link ref={`icon`} type="image/png" href="favicon-32x32.png" />
      <link ref={`icon`} type="image/png" href="favicon-16x16.png" />
      <meta name="description" content={description} />
    </Head>
  );
};

export default Meta;
