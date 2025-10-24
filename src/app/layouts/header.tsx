
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

import { GiCurledTentacle } from "react-icons/gi";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Swal from "sweetalert2";



export const Header = () => {

   const [handleclickSwals, sethandleclickSwal] = useState(false);
   const [toggleMenu, setToggleMenu] = useState(false);
   

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
    })
  }
 
    return (
       <div>
  <header className="mt-5 w-full bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] flex flex-wrap sm:flex-nowrap sm:justify-start">
 

        
  <nav className=" fixed max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
    <div className="flex flex-row hover:animate-bounce">
        <Button 
    onClick={() => setToggleMenu(!toggleMenu)} 
    className="flex items-center space-x-2 sm:hidden"
  >
    <RxHamburgerMenu size={28} className="text-white hover:text-gray-300" />
  </Button>
<a
  className="font-press-start-2p text-[#05DB45] text-sm sm:text-sm mb-4 drop-shadow-[0_0_10px_#05DB45] hidden sm:block"
  href="#"
  aria-label="Brand"
>
  R&apos;lyeh
</a>

 <GiCurledTentacle className=" hidden sm:block text-2xl text-[#05DB45]  focus:outline-hidden focus:opacity-80 dark:text-white" aria-hidden="true" />
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
onClick={(e) =>{
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
 
{toggleMenu && (
  <div className=" fixed top-0 left-0 w-full h-full bg-[#0A0A0A] flex flex-col items-center gap-5 mt-5 sm:mt-0 sm:ps-5">
<Link
  href="#projects"
  onClick={(e) => {
    e.preventDefault(); 
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="font-mono text-gray-400 hover:text-[#05DB45]"
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
  className="font-mono text-gray-400 hover:text-[#05DB45]"
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
  className="font-mono text-gray-400 hover:text-[#05DB45]"
>
Educação
</Link>

<Link
onClick={(e) =>{
  e.preventDefault();
  handleClick();
}}

href={"#about"}


  className="font-mono text-gray-400 hover:text-[#05DB45]"
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
  className="font-mono text-gray-400 hover:text-[#05DB45]"
>
Serviços
</Link>
  </div>
)}


    </div>
  </nav>
</header>
       </div>
    );
};