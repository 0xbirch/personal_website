import { Intro } from "@/components/sections/Intro";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Intro />
      <Experience />
      <Research />
      <Projects />
      <Contact />
    </>
  );
}
