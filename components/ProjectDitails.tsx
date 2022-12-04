import React, { useRef, useState } from "react";
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
  const [targetIndex, setTargetIndex] = useState<number>(currentProjectIndex);
  const [projectTarget, setProjectTarget] = useState<IProjectsList>(
    projects[targetIndex]
  );
  const [isZooming, setIsZooming] = useState(true);
  const ImageRef = useRef<HTMLImageElement | null>(null);

  const handleZoomImage = (isZooming: boolean) => {
    setIsZooming((prev) => !prev);
    if (isZooming) {
      ImageRef.current?.classList.add("scale-150");
    } else {
      ImageRef.current?.classList.remove("scale-150");
    }
  };

  const handleGoNext = (isGoTo: "back" | "next") => {
    console.log(targetIndex, projects.length);
    if (targetIndex >= projects.length - 1) {
      // do nothing
    } else {
      setTargetIndex((prev) => {
        setProjectTarget(projects[prev + 1]);
        return prev + 1;
      });
    }
  };
  const handleGoBack = (isGoTo: "back" | "next") => {
    if (targetIndex <= 0) {
      // do nothing
    } else {
      setTargetIndex((prev) => {
        setProjectTarget(projects[prev - 1]);
        return prev - 1;
      });
    }
  };

  return (
    <div className="poject-details-preview">
      <section className="container mx-auto flex flex-col justify-between items-center">
        <header className="flex items-center justify-between w-full h-14 px-3 text-white">
          <div>
            <b>
              {targetIndex + 1} / {projects?.length} images
            </b>
          </div>
          <div className="flex items-center justify-center gap-3 px-2">
            <button
              type="button"
              className="grid place-items-center p-3 text-xl hover:text-zinc-400"
              onClick={() => handleZoomImage(isZooming)}
            >
              {isZooming && (
                <i className="fi fi-sr-zoom-in leading-3 pointer-events-none"></i>
              )}
              {!isZooming && (
                <i className="fi fi-sr-zoom-out leading-3 pointer-events-none"></i>
              )}
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
        <div className="flex w-full min-h-[60vh] lg:min-h-full items-center justify-evenly">
          <button
            type="button"
            className="flex items-center justify-center gap-3 text-xl text-white hover:text-zinc-400"
            onClick={() => handleGoBack("back")}
          >
            <i className="fi fi-sr-angle-left"></i>
          </button>
          <figure className="h-1/2 w-9/12 aspect-video overflow-hidden">
            <img
              ref={ImageRef}
              src={projectTarget?.mediaUrl}
              alt="preview-img"
              className="max-w-full object-cover transition-transform duration-500 "
            />
          </figure>
          <button
            type="button"
            className="flex items-center justify-center gap-3 text-xl text-white hover:text-zinc-400"
            onClick={() => handleGoNext("next")}
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
