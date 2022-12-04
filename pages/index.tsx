import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/Services";
import background from "../assets/background.png";

export default function Home() {
  return (
    <section
      id="/"
      className="home-section"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <Head>
        <title>Ahmed Shehata Portfolio | Home</title>
      </Head>
      <Hero />
      <Services />
    </section>
  );
}
