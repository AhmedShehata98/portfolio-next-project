import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { useEffect, useRef, useState } from "react";
import Skills from "../components/Skills";
import { IHomeProps, ISkillsList } from "../types/types";
import { useRouter } from "next/router";

const Home = ({ skills }: IHomeProps) => {
  const router = useRouter();
  const homeSectionRef = useRef<HTMLElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const [skillsIsVisible, setSkillsIsVisible] = useState(false);
  const observerOptions = {
    root: homeSectionRef.current,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const ObserverCallback = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setSkillsIsVisible(true);
    } else {
      setSkillsIsVisible(false);
    }
  };
  useEffect(() => {
    observer.current = new IntersectionObserver(
      ObserverCallback,
      observerOptions
    );
    const skillsSection = homeSectionRef.current
      ?.children?.[3] as HTMLDivElement;
    if (homeSectionRef.current !== undefined) {
      observer.current?.observe(skillsSection);
    }
    return () => {
      observer.current?.unobserve(skillsSection);
    };
  }, [homeSectionRef.current, observerOptions]);

  useEffect(() => {
    let timeout: number;

    router.events.on("routeChangeComplete", () => {
      if (homeSectionRef.current?.classList.contains("hide-section")) {
        timeout = +setTimeout(() => {
          homeSectionRef.current?.classList.remove("hide-section");
        }, 100);
      }
    });
    return () => {
      clearTimeout(timeout);

      router.events.off("routeChangeComplete", () => {
        if (homeSectionRef.current?.classList.contains("hide-section")) {
          timeout = +setTimeout(() => {
            homeSectionRef.current?.classList.remove("hide-section");
          }, 100);
        }
      });
    };
  }, [router]);
  useEffect(() => {
    window.addEventListener("load", () => {
      if (homeSectionRef.current?.classList.contains("hide-section")) {
        homeSectionRef.current?.classList.remove("hide-section");
      }
    });
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
        <Skills skills={skills} isVisiale={skillsIsVisible} />
      </section>
    </>
  );
};
export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://portfolio-next-api-alpha.vercel.app/api/skills"
  );
  const skills: ISkillsList = await res.json();

  return {
    props: {
      skills,
    },
    revalidate: 30,
  };
};
