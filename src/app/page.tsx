import { Intro } from "@/components/sections/Intro";
import { Research } from "@/components/sections/Research";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Intro />
      <Experience />
      <Research />
      <Contact />
    </>
  );
}
