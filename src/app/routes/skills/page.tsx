"use client";

import { Button } from "@/components/ui/button";
import {  useState } from "react";
import {  FaLongArrowAltDown } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3, FaFlutter, FaReact } from "react-icons/fa6";
import { SiBootstrap, SiDbeaver, SiDocker, SiFirebase, SiGit, SiGithub, SiHtml5, SiInsomnia,  SiLaravel, SiMariadb, SiMysql, SiNextdotjs, SiNotion, SiPostgresql, SiRender, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
export default function Skills() {
  const [clickSkillsWeb, setClickSkillsWeb] = useState(false);
  const [clickSkillsDataBase, setClickSkillsDataBase] = useState(false);
  const [clickSkillsTools, setClickSkillsTools] = useState(false);
  const [clickSkillsMobile, setClickSkillsMobile] = useState(false);
  const handleclickWeb = () => {
    setClickSkillsWeb(!clickSkillsWeb);
    setClickSkillsDataBase(false);
    setClickSkillsTools(false);
    setClickSkillsMobile(false);
  };

  const handleclickDataBase = () => {
    setClickSkillsDataBase(!clickSkillsDataBase);
    setClickSkillsWeb(false);
    setClickSkillsTools(false);
    setClickSkillsMobile(false);
  };
  const handleclickTools = () => {
    setClickSkillsTools(!clickSkillsTools);
    setClickSkillsDataBase(false);
    setClickSkillsWeb(false);
    setClickSkillsMobile(false);
  };
  const handleclickMobile = () => {
    setClickSkillsMobile(!clickSkillsMobile);
    setClickSkillsDataBase(false);
    setClickSkillsTools(false);
    setClickSkillsWeb(false);
  };


  

  const skillWeb = [
    {
      techs: [
        { icon: <FaReact />, name: "React", link: "https://react.dev/" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
          { icon: <SiLaravel />, name: "Laravel" },
               { icon: <SiHtml5 />, name: "HTML" },
                    { icon: <FaCss3 />, name: "Css" },
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
    {icon: <SiMariadb />, name: "Mariadb"},
  ],
}
  ];
  const skillMobile = [
    {
      techs: [
        { icon: <FaFlutter />, name: "Flutter" },
        { icon: <SiFirebase />, name: "Firebase" },

      ],
    },
  ];

  const skillTools = [
    {
      techs: [
        { icon: <SiDbeaver />, name: "Dbeaver" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiInsomnia />, name: "Insomnia"},
        { icon: <SiVercel />, name: "Vercel"},
        { icon: <SiRender />, name: "Render"},
        { icon: <SiGit />, name: "Git"},
        { icon: <SiGithub />, name: "Github"},
        { icon: <SiNotion />, name: "Notion"},
        
    ]}
  ];

  return (
    <div id="skills" className="min-h-[50vh] flex items-center justify-center pt-20 flex-col text-center">
      <div className="flex flex-row items-center">
        <h2 className="font-press-start-2p text-[#05DB45] text-2xl sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_10px_#05DB45]">
          Skills
        </h2>
        <FaLongArrowAltDown className="animate-bounce text-[#05DB45] text-2xl sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_10px_#05DB45] ml-2" />
      </div>

      <div className="flex flex-col lg:flex-row mt-10 gap-5">
        <Button
          className="font-mono text-gray-400 bg-transparent cursor-pointer  focus:outline-hidden"
          onClick={handleclickWeb}
        >
          <span className="hover:text-[#05DB45] font-mono ml-2">Desenvolvimento Web</span>
        </Button>


        <Button className="font-mono hover:text-[#05DB45] text-gray-400 bg-transparent cursor-pointer  focus:outline-hidden" onClick={handleclickDataBase}>
          <span className="font-mono ml-2">Banco de Dados</span>
        </Button>

   <Button className="font-mono hover:text-[#05DB45] text-gray-400 bg-transparent cursor-pointer  focus:outline-hidden" onClick={handleclickMobile}>
          <span className="font-mono ml-2">Mobile</span>
        </Button>

        <Button className="font-mono hover:text-[#05DB45] text-gray-400 bg-transparent cursor-pointer  focus:outline-hidden" onClick={handleclickTools}>
          <span className="font-mono ml-2">Outros</span>
        </Button>
      </div>

   {/* separação de skills para não me perder */}
      <div   className="mt-10 flex flex-wrap justify-center gap-8">
        {clickSkillsWeb &&
          skillWeb.map((skills) =>
            skills.techs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
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
                className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
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
        {clickSkillsTools &&
          skillTools.map((skills) =>
            skills.techs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
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
        {clickSkillsMobile &&
          skillMobile.map((skills) =>
            skills.techs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center  hover:scale-110 transition-transform duration-300"
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
