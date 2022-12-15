import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url("/profile-cover-1.webp")`,
        }}
      >
        <span className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-sky-700 opacity-70"></span>
        <div className="hero-heading-wrapper">
          <h3 className="text-xl lg:text-3xl font-bold uppercase text-white max-w-sm lg:max-w-xl text-center lg:text-start">
            Hello customers, i am a front-end web developer
          </h3>
          <p className="text-zinc-300">
            Experience with development by React.JS Library
          </p>
          <code className="text-sky-400 mb-8">
            React.JS | Redux.JS | Neext.JS
          </code>
          <span className="w-full lg:w-10/12 flex items-center justify-center lg:justify-start gap-3">
            <Link
              href="https://www.upwork.com/freelancers/~01b20a553681d081b1"
              target={"_blank"}
              referrerPolicy="no-referrer"
              className="btn w-[35%]"
            >
              hire me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1dc4UP7cgg7GHZaVr83Li9GBF8t5Bv2SK/view"
              target={"_blank"}
              referrerPolicy="no-referrer"
              className="btn-outline"
            >
              Resume
            </Link>
          </span>
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
