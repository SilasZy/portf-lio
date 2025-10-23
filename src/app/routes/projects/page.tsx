"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundAnimate } from "@/app/layouts/animated/backgroundAnimate";
import { FaCss3, FaHtml5, FaJs, FaLaptop, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiSass, SiTailwindcss, SiVite } from "react-icons/si";
import { FaLongArrowAltDown } from "react-icons/fa";


import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";



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
      title: "Busca-Cep",
      description:
        "Aplicação web consumida pelo viacep, buscando pelo cep o endereço completo, bairro, cidade e estado e muito mais!",
      image: "/buscarcep.png",
      techs: [  <FaReact key="react" />, <SiNextdotjs key="next" />, <SiSass key="sass" />, ],
      aos: "fade-right",
      demo:"https://busca-cepnext.vercel.app/ ",
      git: "https://github.com/SilasZy/BuscaCep-"
    },
    {
      title: "Prime-Flix",
      description:
        " Aplicação web inspirada no Prime-vídeo, consumi a api do tmdb, nele consiste em mostrar os dados dos filmes do momento, Séries por gênero, filmes por gênero e muito mais!",
      image: "/flix.png",
      techs: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />, <SiVite key="Vite" />],
      aos: "fade-left",
      demo: "https://prime-flix-fus3.vercel.app/",
      git: "https://github.com/SilasZy/Prime-Flix"
    },
  {
    title: "Pixel-Port",
    description:
      "Aplicação web inspirada no pinterest, utilizei a api do unsplash para consumir os dados. quando o usuário pesquisa, retorna cada imagem pesquisada.",
    image: "/pixel.png",
    techs: [  <FaHtml5 key="html" />, <FaCss3 key="css" />, <FaJs key="js" />, ],
    aos: "fade-right",
    demo:"https://pixel-port1-qtd5.vercel.app/ ",
    git: "https://github.com/SilasZy/PixelPort1"
  },
  {
      title: "check-Shop",
    description:
      "Aplicação web pensando em uma loja de roupas fictícias do johnPiter, onde o usuário pode ver os produtos fakes e Excluir os mesmos, treinando assim lógica de programação. projeto Desenvolvido no ínicio dos meus estudos de lógica de programação.",
    image: "/checkshop.png",
    techs: [  <FaHtml5 key="html" />, <FaCss3 key="css" />, <FaJs key="js" />, ],
    aos: "fade-left",
    demo:"https://check-shop.vercel.app/# ",
    git: "https://github.com/SilasZy/checkShop"
  }
  ];

  return (
    <div id="projects" className="min-h-screen text-white relative overflow-hidden ">
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

   
      <div className="flex flex-col items-center justify-center py-10 md:py-20 space-y-16 md:space-y-10">
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
                <p className="text-gray-300  font-mono text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex gap-3 md:gap-4 mt-4 md:mt-6 text-xl md:text-2xl lg:text-3xl">
                  {project.techs.map((icon, i) => (
                 
                    <span key={i} className="drop-shadow-[0_0_4px_#05DB45] md:drop-shadow-[0_0_6px_#05DB45]">
                      {icon}
                    </span>
              
                 
                  ))}
  
                </div>
       
         <div className="mt-5 flex flex-row">
        <Link
          href={project.demo || ""}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button className="font-mono text-gray-400 bg-transparent cursor-pointer hover:text-[#05DB45] focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">
            <FaLaptop className="text-2xl text-[#05DB45] dark:text-white" />
            <span className="font-mono ml-2">Ver Demo</span>
          </Button>
        </Link>

            <Link
          href={project.git || ""}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button className="font-mono text-gray-400 bg-transparent cursor-pointer hover:text-[#05DB45] focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">
            <FaGithub className="text-2xl text-[#05DB45] dark:text-white" />
            <span className="font-mono ml-2">github</span>
          </Button>
        </Link>
      </div>
     
              </CardContent>
              
            </Card>
       
{/* entendendo a parte de hovercard ou seja o que ele faz primeiro crio o corpo depois oq tem la tipo um quadrado */}
           {/* <HoverCard>

          <HoverCardTrigger>

            <p>testando meu hover</p>
          </HoverCardTrigger>
        <HoverCardContent className="aspect-square bg-red-500">
<p>sou um quadrado</p>
       
        </HoverCardContent>
           </HoverCard> */}
 
          </div>
        ))}
      </div>
    </div>
  );
}