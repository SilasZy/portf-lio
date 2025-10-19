"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundAnimate } from "@/app/layouts/animated/backgroundAnimate";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiSass } from "react-icons/si";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  const projects = [
    {
      title: "Zakład Aktywności Zawodowej",
      description:
        "zawiera dedykowane podstrony, formularze kontaktowe i lekką animację interfejsu.",
      image: "/images/project1.png",
      techs: [<FaReact key="react" />, <SiNextdotjs key="next" />, <SiSass key="sass" />],
      aos: "fade-right",
    },
    {
      title: "Projeto 2",
      description:
        "Descrição do segundo projeto, moderno e com foco em experiência de usuário.",
      image: "/images/project2.png",
      techs: [<FaReact key="react" />, <SiNextdotjs key="next" />],
      aos: "fade-left",
    },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <BackgroundAnimate />

      {/* Título principal */}
      <div className="h-50 flex items-center justify-center pt-20">
        <div className="flex flex-row items-center">
          <h2 className="font-press-start-2p text-[#05DB45] text-2xl sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_10px_#05DB45]">
            Projetos
          </h2>
          <FaLongArrowAltDown className="animate-bounce text-[#05DB45] text-2xl sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_10px_#05DB45] ml-2" />
        </div>
      </div>

   
      <div className="flex flex-col items-center justify-center py-10 md:py-20 space-y-16 md:space-y-24">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos={project.aos}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 md:px-6 w-full max-w-6xl mx-auto"
          >
        
            <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute -inset-1 bg-[#05DB45] rounded-2xl md:rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-all"></div>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={240}
                className="rounded-2xl md:rounded-3xl border border-[#05DB45]/50 shadow-[0_0_20px_#05DB45]/20 md:shadow-[0_0_30px_#05DB45]/30 w-full"
              />
            </div>

          
            <Card className="bg-transparent border-none shadow-none w-full max-w-xs sm:max-w-md md:max-w-lg text-left">
              <CardContent className="p-4 md:p-6">
                <h3 className="font-press-start-2p text-[#05DB45] text-lg sm:text-xl md:text-2xl drop-shadow-[0_0_10px_#05DB45] mb-3 md:mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300  text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex gap-3 md:gap-4 mt-4 md:mt-6 text-xl md:text-2xl lg:text-3xl text-[#05DB45]">
                  {project.techs.map((icon, i) => (
                    <span key={i} className="drop-shadow-[0_0_4px_#05DB45] md:drop-shadow-[0_0_6px_#05DB45]">
                      {icon}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}