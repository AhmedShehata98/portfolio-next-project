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
  return (
    <li className="project-tile">
      <Image
        unoptimized={true}
        src={imageLink}
        alt="project-img"
        width={300}
        height={365}
        className="w-full aspect-square object-cover pointer-events-none select-none transition-all duration-500"
      />
      <span className="flex items-start justify-end py-2 px-2 flex-col absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-900 text-white ">
        <small>{discription}</small>
      </span>
      <button
        type="button"
        className="absolute grid place-items-center place-content-center top-5 left-5 p-2 rounded-md bg-slate-500 bg-opacity-30 hover:bg-opacity-80"
        onClick={handlePreviewImage}
      >
        <i className="fi fi-sr-expand leading-3 text-2xl"></i>
      </button>
      <div className="tile-details">
        <p className="text-white">{title}</p>

        <span className="flex justify-center gap-3">
          {/* <Link
            className="flex items-center justify-center gap-2 text-violet-300 uppercase text-sm"
            href={repositoryLink}
            target={"_blank"}
            rel="noreferrer"
          >
            <p>repository</p>
            <i className="fi fi-brands-github leading-3"></i>
          </Link> */}
          {demoLink !== "#" && (
            <Link
              className="flex items-center justify-center gap-2 text-violet-300 uppercase text-sm font-semibold"
              href={demoLink}
              target={"_blank"}
              rel="noreferrer"
            >
              <p>try demo</p>
              <i className="fi fi-sr-link"></i>
            </Link>
          )}
        </span>
      </div>
    </li>
  );
};

export default ProjectTile;
