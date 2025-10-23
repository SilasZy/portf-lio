"use client";
import { Button } from "@/components/ui/button";

import Image from "next/image";

import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion"
import { FaRegFlag } from "react-icons/fa6";

import { useState } from "react";

export const Cvinfo = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

function handleClickPhoto() {
   if(!isAnimated) {
   setIsFlipped(!isFlipped);
   setIsAnimated(true);
    
   }
  }

  return (
  
    <div className="mt-20 flex flex-col lg:flex-row items-center lg:items-start gap-8 p-4 sm:p-6">
      
      {/* Container do conteúdo (lado esquerdo) */}
      <div className="flex-1 flex flex-col items-center lg:items-start gap-6 lg:ms-40">
        
        {/* Nome */}
        <div className="rounded-lg shadow-lg shadow-black/50 animate-pulse text-center lg:text-left">
          <span className="font-press-start-2p text-[#05DB45] text-3xl sm:text-4xl mb-4 drop-shadow-[0_0_10px_#05DB45]">
            Silas Gabriel
          </span>
        </div>

        {/* Titulo */}
        <div className="text-gray-300 text-lg text-center lg:text-left">
          <span className="font-mono text-2xl sm:text-4xl">Desenvolvedor Full-Stack</span>
        </div>

        {/* Botões de resume// */}
        {/* mudar exemplo de git e colocar pra scrolar para baixo em projetos */}
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
            <a href="https://github.com/silasgabriel"   rel="noopener noreferrer" className="font-press-start-2p text-sm">My Projects</a>
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
            <a href="/CV Silas simoes.pdf"   rel="noopener noreferrer" className="font-press-start-2p" download>Download CV</a>
          </Button>
        </div>

        {/* Ícones sociais */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10">
          <a
            href="https://github.com/SilasZy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-20 aspect-square bg-[#333333] flex items-center justify-center
                            rounded-none rounded-br-lg rounded-bl-lg 
                            shadow-[4px_4px_0_#000] 
                            hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
                            transition-all duration-150 cursor-pointer">
              <FaGithub size={40} className="text-white" />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/silas-gabriel-7316bb30b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-20 aspect-square bg-[#333333] flex items-center justify-center
                            rounded-none rounded-br-lg rounded-bl-lg 
                            shadow-[4px_4px_0_#000] 
                            hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
                            transition-all duration-150 cursor-pointer">
              <FaLinkedin size={40} className="text-white" />
            </div>
            
          </a>

          

          <a
            href="mailto:silasgabrielx10@gmail.com?subject=Contato%20do%20Portfólio&body=Olá%20Silas,%20tudo%20bem?"
          >
            <div className="w-20 aspect-square bg-[#333333] flex items-center justify-center
                            rounded-none rounded-br-lg rounded-bl-lg 
                            shadow-[4px_4px_0_#000] 
                            hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
                            transition-all duration-150 cursor-pointer">
              <TfiEmail size={40} className="text-white" />
            </div>


          </a>
               <div className="w-20 aspect-square bg-[#333333] flex items-center justify-center
                            rounded-none rounded-br-lg rounded-bl-lg 
                            shadow-[4px_4px_0_#000] 
                            hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
                            transition-all duration-150 cursor-pointer">
              <FaRegFlag size={40} className="text-white" />
            </div>
        </div>
      </div>

      {/* Container da foto (lado direito) */}

<div>
 
      <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 
                      border-4 border-[#05DB45] 
                      rounded-full 
                      shadow-[4px_4px_0_#000] 
                      hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
                      transition-all duration-150 cursor-pointer flip-card" onClick={handleClickPhoto}>
  <motion.div
  className="flip-card-inner w-full h-full rounded-full"
  initial={{ rotateY: 0 }}
  animate={{ rotateY: isFlipped ? 180 : 360 }}
  transition={{ duration: 0.8 }}
  onAnimationComplete={() => setIsAnimated(false)}
  
>
  {/* card pela frente logic img */}
  <div className="flip-card-front">
    <Image
      src="/cvphoto.jpg"
      alt="Frente da carta"
      fill
      className="object-center"
    />
  </div>

  {/* card por trás logic img */}
  <div className="flip-card-back">
    <Image
      src="/call_of.png"
      alt="Verso da carta"
      fill
      className="object-center"
    />
  </div>
</motion.div>

      </div>
   
</div>

    </div>
    
  );
};