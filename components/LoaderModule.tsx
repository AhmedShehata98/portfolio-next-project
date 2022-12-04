import React from "react";

function LoaderModule() {
  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-full flex flex-col items-center justify-center bg-slate-900">
      <span className="flex items-center justify-center flex-col gap-4 h-5/6 mb-auto ">
        <figure className="w-40">
          <img src="./logo.png" alt="logo" className="w-full object-cover" />
        </figure>
        <span className="w-10 h-10 rounded-full border-r-transparent border-4 border-emerald-400 animate-spin"></span>
      </span>
    </div>
  );
}

export default LoaderModule;
