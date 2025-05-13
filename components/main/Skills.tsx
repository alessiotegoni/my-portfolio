import { backendSkills, frontendSkills, tools } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 mt-48 sm:mt-0"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-col items-center justify-center gap-5">
        <div>
          <h2 className="text-2xl text-white font-medium mt-[10px] text-center mb-[15px]">
            Frontend
          </h2>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {frontendSkills.map((skill, i) => (
              <SkillDataProvider
                key={i}
                src={skill.image}
                index={i}
                {...skill}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-white font-medium mt-[10px] text-center mb-[15px]">
            Backend
          </h2>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {backendSkills.map((skill, i) => (
              <SkillDataProvider
                key={i}
                src={skill.image}
                index={i}
                {...skill}
              />
            ))}
          </div>
        </div>
        <h2 className="text-2xl text-white font-medium mt-[10px] text-center mb-[15px]">
          Tools
        </h2>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {tools.map((skill, i) => (
            <SkillDataProvider key={i} src={skill.image} index={i} {...skill} />
          ))}
        </div>
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
