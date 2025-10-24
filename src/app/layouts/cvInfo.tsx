"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { FaGithub, FaLinkedin, FaSun } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaRegFlag } from "react-icons/fa6";
import Swal from "sweetalert2";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"




export const Cvinfo = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  function handleClickPhoto() {
    if (!isAnimated) {
      setIsFlipped(!isFlipped);
      setIsAnimated(true);
    }
  
  }


function handleChangeLanguage(lang: string) {
  setShowLanguageModal(false);
  const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event("change"));
     Swal.fire({
      position: "center",
      icon: "success",
      title: "Lingua alterada com sucesso!",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true, 
      width: 600,
      background: "#0A0A0A",
      color: "#9CA3AF",
      backdrop: "rgba(10, 10, 10, 0.5)",
      didOpen: () => {
        Swal.showLoading();
      },
    } )
  } else {
    setTimeout(handleChangeLanguage, 500);
  }
 
}

const imagesLanguage = [
  {
    src: "/brasilz.png",
    alt: "Português",
    onClick: () => handleChangeLanguage("pt"),
  },
  {
    src: "/england.jpg",
    alt: "Inglês",
    onClick: () => handleChangeLanguage("en"),
  },
  {
    src: "/espanha.png",
    alt: "Español",
    onClick: () => handleChangeLanguage("es"),
  },
   {
    src: "/franca.jpg",
    alt: "Français",
    onClick: () => handleChangeLanguage("fr"),
  },
  {
    src: "/alemanha.jpg",
    alt: "Deutsch",
    onClick: () => handleChangeLanguage("de"),
  },

  {
    src: "/italia.png",
    alt: "Italiano",
    onClick: () => handleChangeLanguage("it"),
  },
  {
    src: "/japan.jpg",
    alt: "日本語",
    onClick: () => handleChangeLanguage("ja"),
  },
  {
    src: "/coreia.jpg",
    alt: "한국어",
    onClick: () => handleChangeLanguage("ko"),
  },



  
]
  return (
    <div className="mt-20 flex flex-col lg:flex-row items-center lg:items-start gap-8 p-4 sm:p-6 relative">

      <div className="flex-1 flex flex-col items-center lg:items-start gap-6 lg:ms-40">
        <div className="rounded-lg shadow-lg shadow-black/50 animate-pulse text-center lg:text-left">
          <span className="font-press-start-2p text-[#05DB45] text-3xl sm:text-4xl mb-4 drop-shadow-[0_0_10px_#05DB45]">
            Silas Gabriel
          </span>
        </div>

        <div className="text-gray-300 text-lg text-center lg:text-left">
          <span className="font-mono text-2xl sm:text-4xl">Desenvolvedor Full-Stack</span>
        </div>

        <div className="mt-6 sm:mt-3 flex flex-col md:flex-row gap-4 w-full sm:w-auto">
          <Button
            className="w-full sm:w-auto ps-3 rounded-none rounded-br-lg rounded-bl-lg 
                       px-6 sm:px-8 py-6 sm:py-10 bg-[#05DB45] text-black font-mono font-bold italic 
                       shadow-[3px_3px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
                       transition text-xl sm:text-sm"
            variant="secondary"
            size="lg"
            asChild
          >
            <a
              href="#projects"
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-press-start-2p"
            >
              Meus Projetos
            </a>
          </Button>

          <Button
            className="w-full sm:w-auto ps-3 rounded-none rounded-br-lg rounded-bl-lg 
                       px-6 sm:px-8 py-6 sm:py-10 bg-[#05DB45] text-black font-mono font-bold italic 
                       shadow-[3px_3px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
                       transition text-xl sm:text-sm"
            variant="secondary"
            size="lg"
            asChild
          >
            <a
              href="/CV Silas simoes.pdf"
              rel="noopener noreferrer"
              className="font-press-start-2p"
              download
            >
             Baixar CV
            </a>
          </Button>
        </div>

        {/* Ícones sociais */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10">
          <a href="https://github.com/SilasZy" target="_blank" rel="noopener noreferrer">
            <div className="w-20 aspect-square bg-[#333333] flex items-center justify-center
                            rounded-none rounded-br-lg rounded-bl-lg shadow-[4px_4px_0_#000]
                            hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
                            transition-all duration-150 cursor-pointer">
              <FaGithub size={40} className="text-white" />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/silas-gabriel-7316bb30b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-20 aspect-square bg-[#333333] flex items-center justify-center
                            rounded-none rounded-br-lg rounded-bl-lg shadow-[4px_4px_0_#000]
                            hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
                            transition-all duration-150 cursor-pointer">
              <FaLinkedin size={40} className="text-white" />
            </div>
          </a>

          <a href="mailto:silasgabrielx10@gmail.com?subject=Contato%20do%20Portfólio">
            <div className="w-20 aspect-square bg-[#333333] flex items-center justify-center
                            rounded-none rounded-br-lg rounded-bl-lg shadow-[4px_4px_0_#000]
                            hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
                            transition-all duration-150 cursor-pointer">
              <TfiEmail size={40} className="text-white" />
            </div>
          </a>

          {/* 🌎 Botão bandeira */}
          <div
            onClick={() => setShowLanguageModal(true)}
            className="w-20 aspect-square bg-[#333333] flex items-center justify-center
                        rounded-none rounded-br-lg rounded-bl-lg shadow-[4px_4px_0_#000]
                        hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
                        transition-all duration-150 cursor-pointer"
          >
            <FaRegFlag size={40} className="text-white" />
          </div>
        </div>
      </div>

      {/* Foto */}
      <div>
        <div
          className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 
                      border-4 border-[#05DB45] rounded-full shadow-[4px_4px_0_#000]
                      hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
                      transition-all duration-150 cursor-pointer flip-card"
          onClick={handleClickPhoto}
        >
          <motion.div
            className="flip-card-inner w-full h-full rounded-full relative"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={() => setIsAnimated(false)}
          >
            <div className="flip-card-front absolute inset-0">
              <Image src="/cvphoto.jpg" alt="Frente" fill className="object-cover rounded-full" />
            </div>
            <div className="flip-card-back absolute inset-0 rotate-y-180">
              <Image src="/call_of.png" alt="Verso" fill className="object-cover rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/*mudar o idioma*/}
      <AnimatePresence>
        {showLanguageModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#111] border-2 border-[#05DB45] p-8 rounded-xl text-center shadow-[0_0_20px_#05DB45]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-press-start-2p text-[#05DB45] mb-6 text-xl drop-shadow-[0_0_10px_#05DB45]">
                Escolha o idioma
              </h2>

              <div className="flex justify-center gap-8">
                {/* <button
                  onClick={() => handleChangeLanguage("pt")}
                  className="text-gray-300 font-mono hover:text-[#05DB45] transition cursor-pointer"
                >
                  🇧🇷 Português
                </button>
                <button
                  onClick={() => handleChangeLanguage("en")}
                  className="text-gray-300 font-mono hover:text-[#05DB45] transition cursor-pointer"
                >
                  🇺🇸 English
                </button> */}
                              </div>


                              



 
  <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
  <CarouselContent className="-ml-1">
    {imagesLanguage.map((pais, index) => (
      <CarouselItem key={index} className="pl-1 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
        <div className="p-1">
          <Card 
            className="h-full relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#05DB45]/20"
            onClick={pais.onClick}
          >
            {/* 🔹 Imagem do slide */}
            <div className="relative w-full aspect-square">
              <Image
                src={pais.src || "/placeholder-image.jpg"}
                alt={pais.alt || `Bandeira ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>

            {/* 🔹 Nome do país sobre a imagem */}
            <CardContent className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-center p-2">
              <span className="font-mono text-xs sm:text-sm">{pais.alt}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  
  {/* Controles de navegação */}
  <div className="flex justify-center gap-4 mt-10">
    <CarouselPrevious className=" static transform-none mt-0 bg-[#05DB45] text-black hover:bg-[#05DB45]/80 border-none cursor-pointer" />
    <CarouselNext className="static transform-none mt-0 bg-[#05DB45] text-black hover:bg-[#05DB45]/80 border-none cursor-pointer" />
  </div>
</Carousel>


              <button
                onClick={() => setShowLanguageModal(false)}
                className="mt-8 font-mono text-sm text-gray-500 hover:text-[#ec0b0b] cursor-pointer"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
