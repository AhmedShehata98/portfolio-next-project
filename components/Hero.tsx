import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url(/profile-cover-1.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <span className="inline-block absolute inset-0 bg-gradient-to-tr from-slate-900 to-emerald-700 opacity-50"></span>
        <div className="hero-heading-wrapper">
          <h2 className="text-xl lg:text-4xl font-bold text-center lg:text-start uppercase mb-3">
            HELLO, I AM A FRONT-END WEB DEVELOPER
          </h2>
          <code className="text-sm mb-12">
            Experience with development by React.JS Library
          </code>
          <div className="w-full flex items-center justify-center lg:justify-start gap-3 mb-3">
            <Link
              href="https://www.upwork.com/freelancers/~01b20a553681d081b1"
              className="btn px-3 lg:px-10"
            >
              hire me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1dc4UP7cgg7GHZaVr83Li9GBF8t5Bv2SK/view"
              className="btn-outline"
            >
              download resume
            </Link>
          </div>
        </div>
      </div>
      <ul className="flex justify-between w-full flex-col lg:flex-row px-2 mt-3 z-10">
        <li className="flex items-center justify-between lg:justify-start basis-1/4 gap-1 uppercase">
          <b className="text-emerald-400 font-bold text-xl w-1/4">1 +</b>
          <small className="text-white">years of experience</small>
        </li>
        <li className="flex items-center justify-between lg:justify-start basis-1/4 gap-1 uppercase">
          <p className="text-emerald-400 font-bold text-xl w-1/4">10 +</p>
          <small className="text-white">completed projects</small>
        </li>
        <li className="flex items-center justify-between lg:justify-start basis-1/4 gap-1 uppercase">
          <p className="text-emerald-400 font-bold text-xl w-1/4">1 +</p>
          <small className="text-white">certifications</small>
        </li>
        <li className="flex items-center justify-between lg:justify-start basis-1/4 gap-1 uppercase">
          <p className="text-emerald-400 font-bold text-xl w-1/4">10 +</p>
          <small className="text-white">Hours learning</small>
        </li>
      </ul>
    </>
  );
};

export default Hero;
