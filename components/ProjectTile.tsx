import Image from "next/image";
import Link from "next/link";
import React from "react";
type projectTileProps = {
  title: string;
  imageLink: string;
  discription: string;
  technologies: string[];
  repositoryLink: string;
  demoLink: string;
};
const ProjectTile = ({
  demoLink,
  imageLink,
  discription,
  repositoryLink,
  technologies,
  title,
}: projectTileProps) => {
  const handleShowTileDitails = (ev: React.MouseEvent) => {
    const tile = ev.target as HTMLElement;
    const children = tile?.children as HTMLCollection;

    if (tile.classList.contains("project-tile")) {
      if (
        children[children?.length - 1]?.classList.contains(
          "translate-y-full"
        ) ||
        children[children?.length - 1]?.classList.contains("opacity-0")
      ) {
        children[children?.length - 1]?.classList.remove(
          ...["translate-y-full", "opacity-0"]
        );
      } else {
      }
    }
  };
  const handleHideTileDitails = (ev: React.MouseEvent) => {
    const tile = ev.target as HTMLElement;
    const children = tile?.children as HTMLCollection;
    if (tile.classList.contains("project-tile")) {
      if (
        !children[children.length - 1]?.classList.contains(
          "translate-y-full"
        ) ||
        !children[children.length - 1]?.classList.contains("opacity-0")
      ) {
        children[children.length - 1]?.classList.add(
          ...["translate-y-full", "opacity-0"]
        );
      }
    }
  };
  return (
    <li
      className="project-tile"
      onMouseOver={(ev: React.MouseEvent) => handleShowTileDitails(ev)}
      onMouseLeave={(ev: React.MouseEvent) => handleHideTileDitails(ev)}
    >
      <figure className="inline-block m-0 h-64 overflow-hidden pointer-events-none select-none">
        <Image
          src={imageLink}
          alt="project-img"
          width={265}
          height={265}
          className="min-w-full object-cover "
        />
      </figure>
      <span className="flex items-start justify-end py-2 px-2 flex-col absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-900 text-white">
        {discription}
      </span>
      <div className="absolute bottom-0 left-0 w-full px-2 py-4 flex flex-col gap-2 items-start bg-slate-600 transition-all duration-500 translate-y-full opacity-0 border-t-4 border-violet-500">
        <p className="text-white">{title}</p>
        <ul className="w-fill px-1 flex flex-wrap gap-2 mb-3">
          {technologies &&
            Array.isArray(technologies) &&
            technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full bg-slate-400 border border-slate-500 shadow px-4 py-1 text-xs"
              >
                {technology}
              </li>
            ))}
        </ul>
        <span className="flex justify-center gap-3">
          <Link
            className="btn text-white px-3 "
            href={repositoryLink}
            target={"_blank"}
            rel="noreferrer"
          >
            <p className="underline">repository</p>
            <i className="fi fi-brands-github leading-3"></i>
          </Link>
          {demoLink !== "#" && (
            <Link
              className="btn-outline text-white px-3 leading-3"
              href={demoLink}
              target={"_blank"}
              rel="noreferrer"
            >
              <p className="underline">demo</p>
              <i className="fi fi-sr-link"></i>
            </Link>
          )}
        </span>
      </div>
    </li>
  );
};

export default ProjectTile;
