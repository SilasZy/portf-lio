"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Swal from "sweetalert2";
import { FaLongArrowAltDown } from "react-icons/fa";
import BackgroundAnimate from "@/app/layouts/animated/backgroundAnimate";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    emailjs
      .send(
        "service_dy3uh5a", 
        "template_6ut723v", 
        formData,
        "xtvY8XPrt_RC3vDu_" 
      )
        .then(() => {
        setTimeout(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Mensagem enviada com sucesso!",
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
          });
          
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Erro ao enviar",
          text: "Tente novamente mais tarde.",
          background: "#0A0A0A",
          color: "#ef4444",
          confirmButtonColor: "#ef4444",
        });
      });
  }

  return (
    <div
    
      id="contact"
      className="min-h-[100vh] flex flex-col items-center justify-center text-center pt-20"
      
    >
       
      <div className="flex flex-row items-center">
        
        <h2 className="font-press-start-2p text-[#05DB45] text-2xl sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_10px_#05DB45]">
          Contato
        </h2>
        <FaLongArrowAltDown className="animate-bounce text-[#05DB45] text-2xl sm:text-3xl md:text-4xl mb-4 ml-2 drop-shadow-[0_0_10px_#05DB45]" />
      </div>

      <Card
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="bg-[#0e0e0e] border border-[#05DB45]/40 rounded-2xl shadow-[0_0_15px_#05DB45]/30 w-full max-w-lg mt-12 p-6"
      >
        <CardHeader>
          <CardTitle className="text-[#05DB45] text-xl font-bold font-press-start-2p">
            Fale comigo
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
            <div>
              <label className="block text-gray-300 font-mono text-sm mb-2">Nome</label>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[#111] border border-[#05DB45]/30 text-white focus:outline-none focus:border-[#05DB45] font-mono"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-mono text-sm mb-2">Email</label>
              <input
              
                type="email"
                name="email"
                placeholder="youremail@example.com"

                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[#111] border border-[#05DB45]/30 text-white focus:outline-none focus:border-[#05DB45] font-mono"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-mono text-sm mb-2">Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                placeholder="digite uma mensagem..."
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 rounded-md bg-[#111] border border-[#05DB45]/30 text-white focus:outline-none focus:border-[#05DB45] font-mono resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="bg-[#05DB45] text-black font-mono font-bold rounded-md py-3 hover:bg-[#05DB45]/80 transition-all cursor-pointer"
            >
              Enviar Mensagem
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
