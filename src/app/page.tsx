'use client'

import AboutMeSection from "@/components/AboutMeSection";
import LanguageSlider from "@/components/LanguageSlider";
import ProjectsSection from "@/components/ProjectSection";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.slice(1); // Remove '#'
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);
  
  return (
    <div className="flex flex-col">
      {/* Landing Section - takes full viewport height */}
      <section className="min-h-screen grid place-items-center px-8 max-w-[1200px] mx-auto py-8">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-[var(--color-text)]">
          {/* Left side: Welcome text */}
          <div className="max-w-[500px] justify-self-center">
            <h1 className="text-3xl font-bold mb-4">WELCOME.</h1>
            <p className="text-lg leading-relaxed">
              I am Yannick Desiron. <br />
              Once a professional basketball player, now I code. <br />
              I channel the passion, discipline, and creativity of the court into every digital creation.
              <br />
              Scroll down to discover my journey, my projects, and my skills.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="flex justify-center items-center max-w-[500px] justify-self-center">
            <Image
              src="/landing2.png"
              alt="Landing Image"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </main>
      </section>

      <LanguageSlider />

      {/* Projects Section */}

      <ProjectsSection />

      <AboutMeSection />
    </div>
  );
}
