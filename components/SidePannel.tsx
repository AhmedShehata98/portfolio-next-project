import egyFlag from "../assets/egypt.png";
import upworkIco from "../assets/upwork.svg";
import profilePicture from "../assets/profile-picture.webp";
import Image from "next/image";
import { useState } from "react";

const SidePannel = () => {
  const [avaliable, setavaliable] = useState<boolean>(true);
  return (
    <aside className="side-pannel">
      <div
        className={`w-full h-56 bg-gradient-to-t from-slate-700 to-slate-700 flex justify-center items-center flex-col gap-3 500`}
      >
        <figure className="relative w-28 lg:w-28">
          <Image
            src={profilePicture.src}
            alt="profile-img"
            className="max-w-full aspect-square rounded-full border-4 border-slate-100"
            width={100}
            height={100}
          />
          <span
            className={`active-idicator absolute bottom-2 right-3 lg:right-1 ${
              avaliable ? "bg-emerald-400" : "bg-orange-300"
            } w-4 h-4 rounded-full shadow-lg animate-ping`}
          ></span>
          <span
            className={`active-idicator absolute bottom-2 right-3 lg:right-1 ${
              avaliable ? "bg-emerald-400" : "bg-yellow-400"
            } w-4 h-4 rounded-full shadow-lg `}
          ></span>
        </figure>
        <span className="grid place-content-center place-items-center text-white">
          <p className="mb-1 font-semibold">Ahmed Shehata</p>
          <p className="text-sm text-emerald-400 capitalize">
            Front-end Web Development - (REACT.JS)
          </p>
        </span>
      </div>
      <div className="w-full flex flex-col gap-2 px-6 py-3 bg-slate-900 text-white uppercase !border-0">
        <b>information</b>
        <span className="flex justify-between items-end">
          <small>country :</small>
          <span className="flex justify-center gap-2 ">
            EGY
            <img
              src={egyFlag.src}
              alt="country-flag"
              className="object-cover w-10 aspect-video"
            />
          </span>
        </span>
        <span className="flex justify-between items-center">
          <small>city :</small>
          <small>alexandria</small>
        </span>
        <span className="flex justify-between items-center">
          <small>age :</small>
          <small>{new Date().getFullYear() - 1998}</small>
        </span>
      </div>
      <div className="w-full flex flex-col px-6 py-5 items-center justify-between text-white">
        <h5 className="self-start mb-2 mt-1 font-semibold uppercase">
          languages
        </h5>
        <div className="w-full flex flex-col justify-between items-start">
          <div className="w-full flex items-center justify-start gap-2">
            <small className="w-1/4 capitalize">arabic :</small>
            <div className="w-3/5 h-3 flex items-center">
              <span
                className="inline-block bg-cyan-500 h-3 rounded-full shadow-md"
                style={{ width: "100%" }}
              ></span>
            </div>
            <small>Native</small>
          </div>
          <div className="w-full flex items-center justify-start gap-2">
            <small className="w-1/4 capitalize">english :</small>
            <div className="w-3/5 h-3 flex items-center">
              <span
                className="inline-block bg-cyan-500 h-3 rounded-full shadow-md"
                style={{ width: "45%" }}
              ></span>
            </div>
            <small>Basics</small>
          </div>
        </div>
      </div>
      <div className="w-full h-12 flex items-center justify-center gap-7 bg-slate-700">
        <a
          className="text-gray-400 text-xl hover:text-white"
          href="https://www.upwork.com/freelancers/~01b20a553681d081b1"
        >
          <img src={upworkIco.src} width={35} height={35} alt="upwork" />
        </a>
        <a
          className="text-gray-400 text-xl hover:text-white"
          href="https://www.facebook.com/MidoEsquire"
        >
          <i className="fi fi-brands-facebook"></i>
        </a>
        <a
          className="text-gray-400 text-xl hover:text-white"
          href="https://github.com/AhmedShehata98"
        >
          <i className="fi fi-brands-github"></i>
        </a>
        <a
          className="text-gray-400 text-xl hover:text-white"
          href="https://www.linkedin.com/in/ahmed-shehata98/"
        >
          <i className="fi fi-brands-linkedin"></i>
        </a>
      </div>
    </aside>
  );
};

export default SidePannel;
