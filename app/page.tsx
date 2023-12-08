import About from "@/components/main/About";
import ContactMe from "@/components/main/ContactMe";
import Encryption from "@/components/main/Encryption";
import EarthCanvas from "@/components/sub/Earth";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import MouseParticleTrail from "@/components/sub/MouseParticleTrail";
import Image from "next/image";
import Hero from "@/components/main/Hero";
import Contact from '../components/main/Contact'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <MouseParticleTrail>
          <Hero/>
          <Contact/>
        </MouseParticleTrail>
      </div>
    </main>
  );
}
