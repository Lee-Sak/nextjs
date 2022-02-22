import Head from "next/head";

const Seo = ({ title }) => {
  return (
    <Head>
      <title>{title} | next movies</title>
    </Head>
  );
};

export { Seo };
