"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaLongArrowAltDown } from "react-icons/fa";
import {  FaBriefcase } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

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
    
  ];

  const experiences = [
    {
      title: "Desenvolvedor Full-Stack",
      company: "DevStudio",
      date: "2024 - Atual",
      description: "Atuação em projetos web com React, Next.js e APIs Node.js, além de integração com bancos SQL.",
      image: "/assets/images/fullstack-job.png",
    },
    {
      title: "Desenvolvedor Front-End",
      company: "Freelancer",
      date: "2022 - 2024",
      description: "Criação de interfaces responsivas e intuitivas com foco em performance e SEO.",
      image: "/assets/images/frontend-job.png",
    },
  ];

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center text-center pt-20">
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
          <GrCertificate className="mr-2 text-[#05DB45]" /> Certificados
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
                  {cert.institution} — <span className="text-gray-400 text-sm">{cert.date}</span>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed pb-2">{cert.description}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#05DB45] font-semibold hover:underline transition-all duration-200"
                  >
                    Ver Certificação
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
                <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
        
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

