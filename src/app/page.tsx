

import  BackgroundAnimate  from "./layouts/animated/backgroundAnimate";
import { Cvinfo } from "./layouts/cvInfo";

// Projects from "./routes/projects/page";
import { Header } from "./layouts/header";
import { Footer } from "./layouts/footer";
import Skills from "./routes/skills/page";

import Projects from "./routes/projects/page";
import Education from "./routes/education/page";
import Services from "./routes/services/page";




export default function Home() {
  return (
   <div>
    <Header/>
<Cvinfo />
<BackgroundAnimate />
<Skills />
<Services />
  <Projects />
  <Education/>
<Footer />
   </div>
  );
}
