import Image from "next/image";
import Link from "next/link";
import React from "react";
type projectTileProps = {
  id: string;
  title: string;
  imageLink: string;
  discription: string;
  technologies: string[];
  repositoryLink: string;
  demoLink: string;
  handlePreviewImage: React.MouseEventHandler;
};
const ProjectTile = ({
  id,
  demoLink,
  imageLink,
  discription,
  repositoryLink,
  technologies,
  title,
  handlePreviewImage,
}: projectTileProps) => {
  const imageScaleEffect = (tile: HTMLElement, state: boolean) => {
    const image = tile.firstElementChild?.firstElementChild;
    if (state === true) {
      image?.classList.add("scale-95");
    } else {
      image?.classList.remove("scale-95");
    }
  };
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
        imageScaleEffect(tile, true);
      }
    }
  };
  const handleHideTileDitails = (ev: React.MouseEvent) => {
    const tile = ev.target as HTMLElement;
    const children = tile?.children as HTMLCollection;
    const image = tile.firstElementChild?.firstElementChild;

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
        imageScaleEffect(tile, false);
      }
    }
  };

  return (
    <li
      className="project-tile "
      onMouseOver={(ev: React.MouseEvent) => handleShowTileDitails(ev)}
      onMouseLeave={(ev: React.MouseEvent) => handleHideTileDitails(ev)}
      onClick={handlePreviewImage}
    >
      <figure className="inline-block m-0 h-44 overflow-hidden pointer-events-none select-none">
        <Image
          unoptimized
          src={imageLink}
          alt="project-img"
          width={100}
          height={265}
          className="min-w-full object-cover object-center transition-transform duration-500"
        />
      </figure>
      <span className="flex items-start justify-end py-2 px-2 flex-col absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-900 text-white ">
        <small>{discription}</small>
      </span>
      <div className="absolute bottom-0 left-0 w-full px-2 py-4 flex flex-col gap-2 items-start bg-slate-600 transition-all duration-500 translate-y-full opacity-0 border-t-4 border-violet-500">
        <p className="text-white">{title}</p>

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
