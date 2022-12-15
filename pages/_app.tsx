import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoaderModule from "../components/LoaderModule";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidePannel from "../components/SidePannel";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => setIsLoading(true));
    router.events.on("routeChangeComplete", (url) => setIsLoading(false));
    router.events.on("routeChangeError", (url) => setIsLoading(false));
  }, [router]);

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
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <Layout>
        <section className="flex flex-col lg:flex-row gap-3 container mx-auto">
          {router?.pathname !== "/404" && <SidePannel />}
          <Component {...pageProps} />
        </section>
        <Footer />
      </Layout>
      {isLoading && <LoaderModule />}
    </>
  );
}
