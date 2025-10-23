"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaLongArrowAltDown } from "react-icons/fa";
import {  FaBriefcase } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import { link } from "fs";

export default function Education() {
  const [showCertificates, setShowCertificates] = useState(false);
  const [showExperience, setShowExperience] = useState(false);


 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);



  const handleCertificates = () => {
    setShowCertificates(!showCertificates);
    setShowExperience(false);
  };

  const handleExperience = () => {
    setShowExperience(!showExperience);
    setShowCertificates(false);
  };




  const certificates = [
    {
      title: "Criação de apps Android/Ios/web com Flutter",
      institution: "Udemy",
      date: "2025",
      description: "certificação voltada em desenvolvimento de Apps com Flutter",
      image: "certificateFlutter.jpg",
      link: "https://www.udemy.com/certificate/UC-0679a6ca-0598-4c7b-9eb0-126f75fee0f8/",
      Aos: "flip-left",
    },

    {
      title: "Tec. em análise e desenvolvimento de sistemas",
      institution: "Escola Técnica Estadual José Humberto de Moura Cavalcanti",
      date: "2023-2025",
      description: "Desenvolvedor de Sistemas",
      image: "certificadoEte.jpeg",
      link: "https://www.escolatecnicalimoeiro.com.br/",
      Aos: "flip-left",
    },

       {
      title: "Informática Básica e avançada",
      institution: "IPLC - Instituto Padre Luís Cecchin",
      date: "2023-2024",
      description: "Word, Excel, PowerPoint, CorelDRAW e redes de computador", 
      image: "padreLuiz.jpg",
      link: "https://www.iplclimoeiro.org.br/",
      Aos: "flip-left",
    },
    
  ];

  const experiences = [
    {
      title: "Bolsista de Desenvolvimento pela FACEPE",
      company: "FACEPE",
      date: "2024 - 2025",
      description: `Desenvolvimento e ciclo de vida do Software, com as linguagens: Flutter & Laravel. 
      Com a linguagem Flutter, utilizei DIO para consumir API Laravel
      Com Laravel, construi Apis Rest juntamente com Mysql.
      `,
  
      image: "FACEPE.png",
      link: "https://www.facepe.br/",
    },
    {
      title: "Estágio em Analista de Suporte Técnico",
      company: "OnGold",
      date: "2025 - março",
      description: "Suporte técnico em TI, correção de bugs, testes de software, emissão de notas fiscais e atendimento ao cliente (PDV). Foco na resolução de problemas e melhoria contínua dos sistemas",
      image: "suporte.jpg",
      link: "https://ongoldtech.com/"
    },
  ];

  return (
    <div id="education" className="min-h-[100vh] flex flex-col items-center justify-center text-center pt-20">
      <div className="flex flex-row items-center">
        <h2 className="font-press-start-2p text-[#05DB45] text-2xl sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_10px_#05DB45]">
          Educação
        </h2>
        <FaLongArrowAltDown className="animate-bounce text-[#05DB45] text-2xl sm:text-3xl md:text-4xl mb-4 ml-2 drop-shadow-[0_0_10px_#05DB45]" />
      </div>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row mt-10 gap-5">
        <Button
          onClick={handleCertificates}
          className="font-mono text-gray-400 bg-transparent hover:text-[#05DB45] transition-all duration-200 cursor-pointer"
        >
          <GrCertificate className="mr-2 text-[#05DB45]" /> Certificados & Cursos
        </Button>

        <Button
          onClick={handleExperience}
          className="font-mono text-gray-400 bg-transparent hover:text-[#05DB45] transition-all duration-200 cursor-pointer"
        >
          <FaBriefcase className="mr-2 text-[#05DB45]" /> Experiência Profissional
        </Button>
      </div>

      {/* Cards de Certificados */}
      {showCertificates && (
        <div data-aos="zoom-in-down" data-aos-duration="2000"  data-aos-easing="ease-out-cubic" className="  mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="bg-[#0e0e0e] border  border-[#05DB45]/40 rounded-2xl shadow-[0_0_15px_#05DB45]/30 hover:shadow-[0_0_25px_#05DB45]/50 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {cert.image && (
                <img
                  src={cert.image || "nenhuma imagem informada"}
                  alt={cert.title}
                  className="w-full h-40  border-b border-[#05DB45]/30 hover:opacity-90 transition-opacity "
                />
              )}

              <CardHeader>
                <CardTitle className="text-[#05DB45] text-xl font-bold">{cert.title}</CardTitle>
                <CardDescription className="text-gray-300 font-semibold">
                  {cert.institution} — <span className="text-gray-400 text-sm font-mono">{cert.date}</span>
                </CardDescription>
              </CardHeader>

              <CardContent>
               <p className="text-gray-300 text-sm leading-relaxed font-mono mb-5">{cert.description}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#05DB45] font-semibold hover:underline transition-all duration-200 "
                  >
                    Ver Certificação ou instituição
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Cards de Experiência */}
      {showExperience && (
        <div data-aos="zoom-in-down" data-aos-duration="2000"  data-aos-easing="ease-out-cubic" className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-[#0e0e0e] border border-[#05DB45]/40 rounded-2xl shadow-[0_0_15px_#05DB45]/30 hover:shadow-[0_0_25px_#05DB45]/50 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {exp.image && (
                <img
                  src={exp.image || "nenhuma imagem informada"}
                  alt={exp.title}
                  className="w-full h-40 object-cover border-b border-[#05DB45]/30 hover:opacity-90 transition-opacity"
                />
              )}

              <CardHeader>
                <CardTitle className="text-[#05DB45] text-xl font-bold">{exp.title}</CardTitle>
                <CardDescription className="text-gray-300 font-semibold">
                  {exp.company} — <span className="text-gray-400 text-sm">{exp.date}</span>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed font-mono mb-5">{exp.description}</p>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#05DB45] font-semibold hover:underline transition-all duration-200 "
                  >
                    Ver Empresa
                  </a>
                )}
        
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

