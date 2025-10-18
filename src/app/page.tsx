
import Head from "next/head";
import { BackgroundAnimate } from "./layouts/animated/backgroundAnimate";
import { Cvinfo } from "./layouts/cvInfo";

import Projects from "./routes/projects/page";
import { Header } from "./layouts/header";




export default function Home() {
  return (
   <div>
    <Header/>
<Cvinfo />
<BackgroundAnimate />
  <Projects />

   </div>
  );
}
