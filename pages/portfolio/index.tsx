import { nanoid } from "nanoid";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import CopyRights from "../../components/CopyRights";
import ProjectDitails from "../../components/ProjectDitails";
import ProjectTile from "../../components/ProjectTile";
import { IProjectsList, PortfolioProps } from "../../types/types";

const Prortfolio = ({ projects }: PortfolioProps) => {
  const router = useRouter();
  const [showProjectDetails, setShowProjectDetails] = useState<boolean>(false);
  const porjectsListRef = useRef<HTMLUListElement | null>(null);
  const currentProjectIndexRef = useRef<number>(-1);
  const portfolioSectionRef = useRef<HTMLElement>(null);

  const handlePreviewImage = (currentProjectIndex: number) => {
    setShowProjectDetails(true);
    currentProjectIndexRef.current = currentProjectIndex;
  };
  function handleClose() {
    setShowProjectDetails(false);
    console.log("close");
  }

  const showTileDetails = (ev: Event) => {
    const tile = ev.target as HTMLElement;
    if (tile.classList.contains("project-tile")) {
      if (tile.lastElementChild?.classList.contains("tile-details")) {
        tile.lastElementChild?.classList.contains("tile-details") &&
          tile.lastElementChild?.classList.add("project-tile-show");
      }
    }
  };
  const hideTileDetails = (ev: Event) => {
    const tile = ev.target as HTMLElement;
    if (tile.classList.contains("project-tile")) {
      tile.lastElementChild?.classList.contains("tile-details") &&
        tile.lastElementChild?.classList.remove("project-tile-show");
    }
  };
  const imageScaleEffect = (ev: Event, state: boolean) => {
    const tile = ev.target as HTMLElement;

    if (tile.classList.contains("project-tile")) {
      const image = tile.firstElementChild as HTMLImageElement;
      if (state) {
        image.classList.add("scale-95");
      } else {
        image.classList.remove("scale-95");
      }
    }
  };

  function manipulationTileVisibility(
    Ulref: React.MutableRefObject<HTMLUListElement | null>
  ) {
    const listItem = Ulref.current?.children as HTMLCollection;
    Array.from(listItem).forEach((li) => {
      li.addEventListener("mouseleave", (ev) => {
        hideTileDetails(ev);
        imageScaleEffect(ev, false);
      });
      li.addEventListener("mouseover", (ev) => {
        showTileDetails(ev);
        imageScaleEffect(ev, true);
      });
    });
  }

  useEffect(() => {
    manipulationTileVisibility(porjectsListRef);

    return () => {
      removeEventListener("mouseleave", () => {
        showTileDetails;
        imageScaleEffect;
      });
      removeEventListener("mouseover", () => {
        showTileDetails;
        imageScaleEffect;
      });
    };
  }, [manipulationTileVisibility]);

  useEffect(() => {
    let timeout: number;
    if (portfolioSectionRef.current?.classList.contains("hide-section")) {
      timeout = +setTimeout(() => {
        portfolioSectionRef.current?.classList.remove("hide-section");
      }, 100);
    }
    return () => {
      clearTimeout(timeout);
      portfolioSectionRef.current?.classList.add("hide-section");
    };
  }, [portfolioSectionRef.current?.classList.contains("hide-section")]);
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <section
        ref={portfolioSectionRef}
        className="portfolio-section hide-section"
        id="/portfolio"
      >
        <div className="projects-wrapper">
          <h3 className="text-2xl uppercase z-10 text-white mt-2 mb-6">
            portfolio
          </h3>
          <ul
            ref={porjectsListRef}
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {projects &&
              Array.isArray(projects) &&
              projects.map((project) => (
                <ProjectTile
                  key={nanoid(6)}
                  id={project?.id}
                  title={project?.title}
                  imageLink={project.mediaUrl}
                  discription={project?.discription}
                  technologies={project?.technologies}
                  repositoryLink={project.repositoryUrl}
                  demoLink={project?.demoUrl}
                  handlePreviewImage={() =>
                    handlePreviewImage(
                      projects.findIndex((p) => p.id === project.id)
                    )
                  }
                />
              ))}
          </ul>
        </div>

        <CopyRights />
      </section>
      {/* {showProjectDetails && (
        <ProjectDitails
          projects={projects}
          handleClose={() => handleClose()}
          currentProjectIndex={currentProjectIndexRef.current}
        />
      )} */}
    </>
  );
};
export default Prortfolio;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://portfolio-next-api-alpha.vercel.app/api/portfolio`
  );
  const projects = await res.json();

  return {
    props: {
      projects,
    },
    revalidate: 30,
  };
};
