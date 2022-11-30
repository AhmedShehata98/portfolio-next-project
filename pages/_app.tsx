import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ahmed shehata portfolio</title>
        <meta
          name="description"
          content="i am ahmed shehata front-end developer its an my portfolio website have my contacts info and news"
        />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css"
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
