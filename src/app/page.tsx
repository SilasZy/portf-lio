

import { BackgroundAnimate } from "./layouts/animated/backgroundAnimate";
import { Cvinfo } from "./layouts/cvInfo";

import Projects from "./routes/projects/page";
import { Header } from "./layouts/header";
import { Footer } from "./layouts/footer";
import Skills from "./routes/skills/page";




export default function Home() {
  return (
   <div>
    <Header/>
<Cvinfo />
<BackgroundAnimate />
<Skills />
  <Projects />
<Footer />
   </div>
  );
}
