"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

import { GiCurledTentacle } from "react-icons/gi";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Swal from "sweetalert2";

export const Header = () => {
  const [handleclickSwals, sethandleclickSwal] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const messages = [
    "Acessar Projetos",
    "Acessar Habilidades", 
    "Acessar Educação",
    "Acessar Blog",
    "Acessar Serviços"
  ];

  useEffect(() => {
    if (toggleMenu) {
      const interval = setInterval(() => {
        setShowMessage(false);
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          setShowMessage(true);
        }, 500);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [toggleMenu, messages.length]);

  function handleClick() {
    sethandleclickSwal(!handleclickSwals);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Desculpe, ainda estamos trabalhando, aguarde um pouco...",
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      width: 600,
      background: "#0A0A0A",
      color: "#9CA3AF",
      backdrop: "rgba(10, 10, 10, 0.5)",
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  return (
    <div>
      <header className="mt-5 w-full bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] flex flex-wrap sm:flex-nowrap sm:justify-between">
        <nav className="fixed max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-row items-center gap-2">
            <Button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="flex items-center space-x-2"
            >
              <RxHamburgerMenu size={28} className="text-white hover:text-gray-300 sm:hidden" />
            </Button>
            
            {/* Div com fade left */}
            {toggleMenu && (
              <div className="ml-4">
                <div
                  className={`font-mono text-[#05DB45] text-sm transition-all duration-500 transform ${
                    showMessage 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  {messages[currentMessageIndex]}
                </div>
              </div>
            )}

            <a
              className="font-press-start-2p text-[#05DB45] text-sm sm:text-sm mb-4 drop-shadow-[0_0_10px_#05DB45] hidden sm:block"
              href="#"
              aria-label="Brand"
            >
              R&apos;lyeh
            </a>

            <GiCurledTentacle className="hidden sm:block text-2xl text-[#05DB45] focus:outline-hidden focus:opacity-80 dark:text-white" aria-hidden="true" />
          </div>

          <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="font-mono text-gray-400 hover:text-[#05DB45] hidden sm:block"
            >
              Projetos
            </Link>
            <Link
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("skills");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="font-mono text-gray-400 hover:text-[#05DB45] hidden sm:block"
            >
              Habilidades
            </Link>

            <Link
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("education");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="font-mono text-gray-400 hover:text-[#05DB45] hidden sm:block"
            >
              Educação
            </Link>

            <Link
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
              href={"#about"}
              className="font-mono text-gray-400 hover:text-[#05DB45] hidden sm:block"
            >
              Blog
            </Link>

            <Link
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="font-mono text-gray-400 hover:text-[#05DB45] hidden sm:block"
            >
              Serviços
            </Link>
          </div>
        </nav>

        {/* Menu Mobile */}
        {toggleMenu && (
          <div className="z-50 fixed top-0 left-0 w-full h-full bg-[#0A0A0A] flex flex-col items-center justify-center gap-6">
            {/* Botão Fechar */}
            <button
              onClick={() => setToggleMenu(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-[#05DB45] text-3xl font-mono cursor-pointer"
              aria-label="Fechar menu"
            >
              x
            </button>

            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                if (element) {
                  element.scrollIntoView({ behavior: "instant" });
                }
                setToggleMenu(false);
              }}
              className="font-mono text-gray-400 hover:text-[#05DB45] transition-colors duration-300 text-xl"
            >
              Projetos
            </Link>
            <Link
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("skills");
                if (element) {
                  element.scrollIntoView({ behavior: "instant" });
                }
                setToggleMenu(false);
              }}
              className="font-mono text-gray-400 hover:text-[#05DB45] transition-colors duration-300 text-xl"
            >
              Habilidades
            </Link>

            <Link
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("education");
                if (element) {
                  element.scrollIntoView({ behavior: "instant" });
                }
                setToggleMenu(false);
              }}
              className="font-mono text-gray-400 hover:text-[#05DB45] transition-colors duration-300 text-xl"
            >
              Educação
            </Link>

            <Link
              onClick={(e) => {
                e.preventDefault();
                handleClick();
                setToggleMenu(false);
              }}
              href={"#about"}
              className="font-mono text-gray-400 hover:text-[#05DB45] transition-colors duration-300 text-xl"
            >
              Blog
            </Link>

            <Link
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("services");
                if (element) {
                  element.scrollIntoView({ behavior: "instant" });
                }
                setToggleMenu(false);
              }}
              className="font-mono text-gray-400 hover:text-[#05DB45] transition-colors duration-300 text-xl"
            >
              Serviços
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};