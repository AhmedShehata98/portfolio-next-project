import React, { useState } from "react";
import { IProjectsList } from "../types/types";
type ProjectDitailsProps = {
  projects: IProjectsList[];
  currentProjectIndex: number;
  handleClose: React.MouseEventHandler;
};
function ProjectDitails({
  handleClose,
  currentProjectIndex,
  projects,
}: ProjectDitailsProps) {
  const [projectTarget, setProjectTarget] = useState<IProjectsList>(
    projects[currentProjectIndex]
  );
  return (
    <div className="absolute z-20 top-0 left-0 w-full h-screen bg-zinc-700 bg-opacity-60">
      <section className="container mx-auto flex flex-col justify-between items-center">
        <header className="flex items-center justify-between w-full h-14 px-3 text-white ">
          <div>
            <b>
              {currentProjectIndex + 1} / {projects?.length} images
            </b>
          </div>
          <div className="flex items-center justify-center gap-3 px-2">
            <button
              type="button"
              className="grid place-items-center p-3 text-xl hover:text-zinc-400"
            >
              <i className="fi fi-sr-zoom-in leading-3 pointer-events-none"></i>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-3 text-xl hover:text-zinc-400"
              onClick={handleClose}
            >
              <i className="fi fi-sr-cross leading-3 pointer-events-none"></i>
            </button>
          </div>
        </header>
        <div className="flex w-full items-center justify-evenly">
          <button
            type="button"
            className="flex items-center justify-center gap-3 text-xl text-white hover:text-zinc-400"
          >
            <i className="fi fi-sr-angle-left"></i>
          </button>
          <figure className="h-1/2 w-9/12 aspect-video overflow-hidden">
            <img
              src={projectTarget?.mediaUrl}
              alt="preview-img"
              className="max-w-full object-cover transition-transform duration-500 "
            />
          </figure>
          <button
            type="button"
            className="flex items-center justify-center gap-3 text-xl text-white hover:text-zinc-400"
          >
            <i className="fi fi-sr-angle-right"></i>
          </button>
        </div>
        <span className="w-full py-6 px-3 grid place-items-center">
          <p className="text-white font-bold text-lg">{projectTarget?.title}</p>
        </span>
      </section>
    </div>
  );
}

export default ProjectDitails;
