'use client';

import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className=" py-16 px-6 bg-[--color-sec] text-center">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1200px] mx-auto mb-12">
        <h2  className="text-3xl font-bold text-[--color-text]">My Projects</h2>
        <Button
          as={Link}
          href="/projects"
          className="mt-4 sm:mt-0 bg-[--color-accent] text-[#ECECEC] rounded-full px-6 py-2 hover:bg-opacity-80 transition"
        >
          See All Projects
        </Button>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Portfolio Website"
          languages="React, Next.js, Tailwind CSS"
          image="/project1.png"
          link="/projects/portfolio"
          extraInfo="This is a project that goes together with finishing my internship. The assignment was creating a website to showcase yourself and your projects. I used React, Next.js, tailwindCSS and HeroUI."
        />
        <ProjectCard
          title="Portfolio first version"
          languages="HTML, CSS, javascript"
          image="/project2.png"
          link="/projects/weather"
          extraInfo="This was my first project to get to know more about HTML, CSS and javascript."
        />
        <ProjectCard
          title="Dashboard"
          languages="ASP.NET, SQL, Agile"
          image="/project3.png"
          link="/projects/dashboard"
          extraInfo="This project was for us to learn how to use ASP.NET and the Agile way of working in a team."
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
