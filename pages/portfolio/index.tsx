import { nanoid } from "nanoid";
import Head from "next/head";
import React, { useRef, useState } from "react";
import CopyRights from "../../components/CopyRights";
import ProjectDitails from "../../components/ProjectDitails";
import ProjectTile from "../../components/ProjectTile";
import { IProjectsList, PortfolioProps } from "../../types/types";

const Prortfolio = ({ projects }: PortfolioProps) => {
  const [showProjectDetails, setShowProjectDetails] = useState<boolean>(false);
  const currentProjectIndexRef = useRef<number>(-1);

  const handlePreviewImage = (currentProjectIndex: number) => {
    setShowProjectDetails(true);
    currentProjectIndexRef.current = currentProjectIndex;
  };
  function handleClose() {
    setShowProjectDetails(false);
    console.log("close");
  }

  return (
    <section className="portfolio-section">
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="min-w-full min-h-full flex flex-col overflow-hidden mb-4">
        <h3 className="text-2xl uppercase z-10 text-white mt-2 mb-6">
          portfolio
        </h3>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-4 z-10">
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
      {showProjectDetails && (
        <ProjectDitails
          projects={projects}
          handleClose={(ev) => handleClose()}
          currentProjectIndex={currentProjectIndexRef.current}
        />
      )}
      <CopyRights />
    </section>
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
