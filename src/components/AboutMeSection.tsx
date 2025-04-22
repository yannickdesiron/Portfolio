'use client';

import React from "react";

const AboutMeSection = () => {
  return (
    <section id="about" className="py-16 px-6 bg-[--color-sec] text-center">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1200px] mx-auto mb-12">
        <h2 className="text-3xl font-bold text-[--color-text]">About Me</h2>

      </div>

      <div className="max-w-[1000px] mx-auto text-[--color-text] text-lg leading-relaxed text-left">
        <p className="mb-4">
          Hey! I&apos;m Yannick Desiron, a former professional basketball player turned software developer.
          I’m currently finishing my final year in a 3-year programming track at Thomas More, while
          building out real-world web applications with modern frameworks like React and Next.js.
        </p>
        <p className="mb-4">
          My background in high-level sports has shaped me to work well under pressure, communicate effectively,
          and continuously strive to improve. I'm passionate about clean, accessible UI and love building
          modern, dynamic applications that people enjoy using.
        </p>
        <p>
          Whether it&apos;s creating a sleek portfolio site, crafting reusable components, or learning new tech,
          I’m always eager to learn and grow as a developer.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
