import Image from "next/image";
import React from "react";
import { ISkillsProps } from "../types/types";

function Skills({ skills, isVisiale }: ISkillsProps) {
  return (
    <div className="skills">
      <h4 className="mt-2 mb-4 uppercase text-white text-lg font-bold">
        skills
      </h4>
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills &&
          Array.isArray(skills) &&
          skills.map((skill) => (
            <li
              key={skill.id}
              className="flex flex-col justify-center items-center gap-2 rounded shadow-md p-3 bg-slate-600 border-t-4 border-emerald-400"
            >
              <figure className="w-24">
                <Image
                  src={skill.image}
                  alt="skill-img"
                  width="128"
                  height="128"
                />
              </figure>
              <p className="w-fit text-white uppercase">{skill.skillName}</p>
              <span className="w-full h-2 rounded-md flex items-center justify-start bg-slate-900">
                <span
                  style={
                    isVisiale
                      ? {
                          width: `${skill.skillLevel}%`,
                        }
                      : {
                          width: `0%`,
                        }
                  }
                  className={`inline-block h-2 bg-emerald-500 transition-all duration-700 ease-out`}
                ></span>
              </span>
              <b className="w-fit text-white uppercase">
                {skill.skillLevel + "%"}
              </b>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Skills;
