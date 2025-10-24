import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sub } from "motion/react-client";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function Services() {
 
    
 const Services = [
  {
    title: "Desenvolvimento Web",
    subtitle: "Transformo sua ideia em algo novo!",
    description:
      "Criação de sites modernos, rápidos e responsivos, desde landing pages até sistemas completos com painéis administrativos.",
    image: "website.jpg",
    Aos: "fade-up",
  },
  {
    title: "Desenvolvimento de Aplicativos",
    subtitle: "Transformo sua ideia em algo novo!",
    description:
      "Aplicativos híbridos para Android e iOS com Flutter, interfaces intuitivas e conexão com APIs.",
    image: "mobile.jpg",
    Aos: "zoom-in-up",
  },
  {
    title: "APIs e Back-End",
    subtitle: "Transformo sua ideia em algo novo!",
    description:
      "Desenvolvimento de APIs REST e integrações com bancos de dados seguindo as melhores práticas de segurança e performance.",
    image: "back.jpg",
    Aos: "flip-left",
  },
  {
    title: "UI/UX Design",
    subtitle: "Transformo sua ideia em algo novo!",
    description:
      "Prototipagem e design de interfaces modernas com foco em usabilidade e experiência do usuário.",
    image: "webde.jpg",
    Aos: "fade-right",
  },
  {
    title: "Manutenção e Suporte",
    subtitle: "Transformo sua ideia em algo novo!",
    description:
      "Correção de bugs, otimização de performance e atualização de sistemas existentes. Suporte técnico a Clientes.",
    image: "support.jpg",
    Aos: "fade-up",
  },
  {
    title: "Deploy e Hospedagem",
    description:
      "Configuração de servidores, deploy com Docker, Vercel, Render e bancos de dados em nuvem.",
    image: "deploy.jpg",
    Aos: "zoom-in",
  },
];


    
    return (


        
     
             <div id="services" className="min-h-[50vh] flex items-center justify-center pt-20 flex-col text-center">
                  <div className="flex flex-row items-center">
                    <h2 className="font-press-start-2p text-[#05DB45] text-2xl sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_10px_#05DB45]">
                    Serviços
                    </h2>
                    <FaLongArrowAltDown className="animate-bounce text-[#05DB45] text-2xl sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_10px_#05DB45] ml-2" />
                  </div>
                


                       <div data-aos="zoom-in-down" data-aos-duration="2000"  data-aos-easing="ease-out-cubic" className="  mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl">
          {Services.map((Services, index) => (
            <Card
              key={index}
              className="bg-[#0e0e0e] border  border-[#05DB45]/40 rounded-2xl shadow-[0_0_15px_#05DB45]/30 hover:shadow-[0_0_25px_#05DB45]/50 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {Services.image && (
                <img
                  src={Services.image || "nenhuma imagem informada"}
                  alt={Services.title}
                  className="w-full h-40  border-b border-[#05DB45]/30 hover:opacity-90 transition-opacity "
                />
              )}

              <CardHeader>
                <CardTitle className="text-[#05DB45] text-xl font-bold">{Services.title}</CardTitle>

                <CardDescription className="text-gray-300 font-semibold">
                 
                </CardDescription>
              </CardHeader>

              <CardContent>
               <p className="text-gray-300 text-sm leading-relaxed font-mono mb-5">{Services.description}</p>

              </CardContent>
            </Card>
          ))}
        </div>
        </div>
    );
}