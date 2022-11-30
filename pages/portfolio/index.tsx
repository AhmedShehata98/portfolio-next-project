import Head from "next/head";
import ProjectTile from "../../components/ProjectTile";
import { IProjectsList, PortfolioProps } from "../../types/types";

const Prortfolio = ({ projects }: PortfolioProps) => {
  return (
    <section className="portfolio-section">
      <Head>
        <title>Portfolio</title>
      </Head>
      <h3 className="text-2xl uppercase z-10 text-white mt-2 mb-6">
        portfolio
      </h3>
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-6 z-10">
        {projects &&
          Array.isArray(projects) &&
          projects.map((project) => (
            <ProjectTile
              key={project.id}
              title={project?.title}
              imageLink={project.mediaUrl}
              technologies={project?.technologies}
              repositoryLink={project.repositoryUrl}
              demoLink={project?.demoUrl}
            />
          ))}
      </ul>
    </section>
  );
};
export default Prortfolio;

export const getServerSideProps = async () => {
  const res = await fetch(
    `http://https://portfolio-next-api-alpha.vercel.app/api/portfolio`
  );
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};
