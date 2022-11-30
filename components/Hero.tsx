import Link from "next/link";
import React from "react";
import profileCover from "../assets/profile-cover.jpg";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${profileCover.src})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <span className="inline-block absolute inset-0 bg-gradient-to-tr from-slate-800 to-cyan-800 opacity-50"></span>
        <div className="hero-heading-wrapper">
          <h2 className="text-xl lg:text-4xl font-bold uppercase mb-8">
            hello , I am Front-end web Developer
          </h2>
          <code className="text-sm mb-5">
            Experiance with development by React.JS Library
          </code>
          <div className="flex items-center justify-center gap-3 mb-3">
            <Link
              href="https://www.upwork.com/freelancers/~01b20a553681d081b1"
              className="btn px-10"
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
        <li className="flex items-center basis-1/4 gap-4 uppercase">
          <b className="text-cyan-400 font-bold text-xl w-1/6">1 +</b>
          <small className="text-white">years of experience</small>
        </li>
        <li className="flex items-center basis-1/4 gap-4 uppercase">
          <p className="text-cyan-400 font-bold text-xl w-1/6">10 +</p>
          <small className="text-white">completed projects</small>
        </li>
        <li className="flex items-center basis-1/4 gap-4 uppercase">
          <p className="text-cyan-400 font-bold text-xl w-1/6">1 +</p>
          <small className="text-white">certifications</small>
        </li>
        <li className="flex items-center basis-1/4 gap-4 uppercase">
          <p className="text-cyan-400 font-bold text-xl w-1/6">10 +</p>
          <small className="text-white">Hours learning</small>
        </li>
      </ul>
    </>
  );
};

export default Hero;
