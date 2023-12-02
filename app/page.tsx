/* eslint-disable react/jsx-key */
import About from "@/components/main/About";
import ContactMe from "@/components/main/ContactMe";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import MouseParticleTrail from "@/components/sub/MouseParticleTrail";
import Image from "next/image";
import Particles from 'react-particles-js';

console.log('NEXT_PUBLIC_SANITY_DATASET:', process.env.NEXT_PUBLIC_SANITY_DATASET);

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <MouseParticleTrail>
          <Hero />
          <About />
          <Skills />
          <Encryption />
          <Projects />
          <ContactMe />
        </MouseParticleTrail>
      </div>
    </main>
  );
}
