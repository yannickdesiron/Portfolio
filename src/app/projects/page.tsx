'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@heroui/react';

const projects = [
  {
    title: 'Portfolio Website',
    year: '2025',
    image: '/project1.png',
    languages: 'React, Next.js, Tailwind CSS',
    description:
      'A modern and responsive portfolio website built with Next.js and HeroUI to showcase my projects and skills.',
  },
  {
    title: 'Portfolio First Version',
    year: '2024',
    image: '/project2.png',
    languages: 'HTML, CSS, JavaScript',
    description:
      'My very first attempt at building a personal website using only vanilla web technologies.',
  },
  {
    title: 'Dashboard Project',
    year: '2024',
    image: '/project3.png',
    languages: 'ASP.NET, SQL, Agile',
    description:
      'A web dashboard developed during my programming training to practice Agile methodology and backend technologies.',
  },
  {
    title: 'IMDB Clone',
    year: '2024',
    image: '/project4-1.png',
    languages: 'React',
    description:
      'A clone of the IMDB website using React. It fetches and displays movie data with clean and responsive UI.',
  },
  {
    title: 'Food Schedule App',
    year: '2024',
    image: '/project6-1.png',
    languages: 'React Native, TypeScript',
    description:
      'A mobile app to schedule meals and track your weekly food plans. Built with React Native and TypeScript.',
  },
  {
    title: 'Mellog Blog App',
    year: '2025',
    image: '/project5.png',
    languages: 'React Native',
    description:
      'My current project: a mobile companion app for the Mellog blogging platform with full social features and post management.',
  },
];

const ProjectsPage = () => {
  return (
    <section className="min-h-screen py-16 px-6 bg-[--color-sec] text-[--color-text]">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col lg:flex-row items-center gap-6 bg-[--color-bg] shadow-lg p-6 rounded-xl"
            >
              <div className="w-full lg:w-1/3">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-2/3 flex flex-col gap-2">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-sm text-[--color-accent]">{project.year} • {project.languages}</p>
                <p className="text-base leading-relaxed mt-2">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
