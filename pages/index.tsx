import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { useEffect, useRef } from "react";

const Home = () => {
  const homeSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let timeout: number;

    if (homeSectionRef.current?.classList.contains("hide-section")) {
      timeout = +setTimeout(() => {
        homeSectionRef.current?.classList.remove("hide-section");
      }, 100);
    }
    return () => {
      clearTimeout(timeout);
      homeSectionRef.current?.classList.add("hide-section");
    };
  }, [homeSectionRef.current?.classList.contains("hide-section")]);
  return (
    <>
      <Head>
        <title>Ahmed Shehata Portfolio | Home</title>
      </Head>
      <section
        ref={homeSectionRef}
        id="/"
        className="home-section hide-section"
        style={{ backgroundImage: `url(/background.png)` }}
      >
        <Hero />
        <Services />
      </section>
    </>
  );
};
export default Home;
