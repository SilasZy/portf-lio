

import  BackgroundAnimate  from "./layouts/animated/backgroundAnimate";
import { Cvinfo } from "./layouts/cvInfo";

// Projects from "./routes/projects/page";
import { Header } from "./layouts/header";
import { Footer } from "./layouts/footer";
import Skills from "./routes/skills/page";

import Projects from "./routes/projects/page";
import Education from "./routes/education/page";
import Services from "./routes/services/page";
import ContatoPage from "./routes/contato/page";




export default function Home() {
  return (
    
  
   
    <>
    
    <Header /><Cvinfo /><BackgroundAnimate /><Skills /><BackgroundAnimate /><Services /><BackgroundAnimate /><Projects /><Education /><BackgroundAnimate /><BackgroundAnimate /><ContatoPage /><Footer /></>
   
  
  );
}
