import { GiCurledTentacle } from "react-icons/gi";



export const Header = () => {
    return (
       <div>
    <header className="  mt-5 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">

  <nav className=" fixed max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
    <div className="flex flex-row hover:animate-bounce">
 <a className="font-press-start-2p text-[#05DB45] text-sm sm:text-sm mb-4 drop-shadow-[0_0_10px_#05DB45]" href="#" aria-label="Brand"><a>R&apos;lyeh</a></a>
 <GiCurledTentacle className=" text-2xl text-[#05DB45]  focus:outline-hidden focus:opacity-80 dark:text-white" aria-hidden="true" />
    </div>
   
    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
      <a className="font-mono text-gray-400 hover:text-[#05DB45]   focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 hover:animate-bounce" href="#">projetos</a>
      <a className="font-mono text-gray-400 hover:text-[#05DB45] focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 hover:animate-bounce" href="#">curiosidades</a>
      <a className="font-mono text-gray-400 hover:text-[#05DB45]  focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 hover:animate-bounce" href="#">Blog</a>
    </div>
  </nav>
</header>
       </div>
    );
};