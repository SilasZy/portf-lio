"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DiPostgresql } from "react-icons/di";
import {  FaLongArrowAltDown } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiBootstrap, SiCss3, SiHtml5, SiJsdelivr, SiLaravel, SiMysql, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Skills() {
  const [clickSkillsWeb, setClickSkillsWeb] = useState(false);
  const [clickSkillsDataBase, setClickSkillsDataBase] = useState(false);

  const handleClick = () => setClickSkillsWeb(!clickSkillsWeb);
const handleClickDatabase = () => setClickSkillsDataBase(!clickSkillsDataBase);

  const skillWeb = [
    {
      techs: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
          { icon: <SiLaravel />, name: "Laravel" },
               { icon: <SiHtml5 />, name: "HTML" },
                    { icon: <SiCss3 />, name: "Css" },
                         { icon: <FaJsSquare />, name: "Javascript" },
                              { icon: <SiBootstrap />, name: "Bootstrap" },
                               { icon: <SiTypescript />, name: "Typescript" },
      ],
    },
  ];
    const skillDatabase = [

{
  techs: [
    { icon: <SiMysql />, name: "Mysql" },
    {icon: <SiPostgresql />, name: "Postgresql"},
  ],
}
  ];
  const skillBackend = [];

  const skillTools = [];

  return (
    <div className="min-h-[50vh] flex items-center justify-center pt-20 flex-col text-center">
      <div className="flex flex-row items-center">
        <h2 className="font-press-start-2p text-[#05DB45] text-2xl sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_10px_#05DB45]">
          Skills
        </h2>
        <FaLongArrowAltDown className="animate-bounce text-[#05DB45] text-2xl sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_10px_#05DB45] ml-2" />
      </div>

      <div className="flex flex-col lg:flex-row mt-5 gap-5">
        <Button
          className="font-mono text-gray-400 bg-transparent cursor-pointer hover:text-[#05DB45] focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          onClick={handleClick}
        >
          <span className="font-mono ml-2">Desenvolvimento Web</span>
        </Button>


        <Button className="font-mono text-gray-400 bg-transparent cursor-pointer hover:text-[#05DB45] focus:outline-hidden" onClick={handleClickDatabase}>
          <span className="font-mono ml-2">Databases</span>
        </Button>

        <Button className="font-mono text-gray-400 bg-transparent cursor-pointer hover:text-[#05DB45] focus:outline-hidden">
          <span className="font-mono ml-2">Tools</span>
        </Button>
      </div>

   
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {clickSkillsWeb &&
          skillWeb.map((skills) =>
            skills.techs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-[#05DB45] hover:scale-110 transition-transform duration-300"
              >
                <span className="text-4xl sm:text-5xl md:text-6xl drop-shadow-[0_0_10px_#05DB45]">
                  {tech.icon}
                </span>
                <span className="mt-2 text-sm sm:text-base md:text-lg font-mono text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))
          )}
      </div>


      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {clickSkillsDataBase &&
          skillDatabase.map((skills) =>
            skills.techs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-[#05DB45] hover:scale-110 transition-transform duration-300"
              >
                <span className="text-4xl sm:text-5xl md:text-6xl drop-shadow-[0_0_10px_#05DB45]">
                  {tech.icon}
                </span>
                <span className="mt-2 text-sm sm:text-base md:text-lg font-mono text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))
          )}
      </div>

    </div>
  );
}
