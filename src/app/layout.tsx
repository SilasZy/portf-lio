import type { Metadata } from "next";
import { Press_Start_2P, Creepster, Geist, Geist_Mono, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const creepster = Creepster({
  subsets: ["latin"],
  variable: "--font-creepster",
  weight: "400",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-press-start-2p",
  weight: "400",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfólio - Silas Gabriel",
  description: "Portfólio pessoal de Silas Gabriel",
icons: {
    icon: "/data.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${creepster.variable} ${pressStart2P.variable} ${robotoMono.variable} antialiased`}
      >
     
        <div id="google_translate_element" style={{ display: "none" }}></div>

       
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'pt',
            includedLanguages: 'pt,en,es,fr,ru,de,it,ja,ko,zh-CN,zh-TW',
     

                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>

        {/* 🔹 Script externo do Google */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        {/* 🔹 Conteúdo do site */}
        {children}
      </body>
    </html>
  );
}
