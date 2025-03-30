'use client';

import React from 'react';
import { Card } from '@heroui/react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaDatabase, FaCogs, FaTools } from 'react-icons/fa';
import { SiTailwindcss, SiDotnet, SiNextdotjs, SiTypescript } from 'react-icons/si';

const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact size={28} />, level: 4 },
      { name: 'Next.js', icon: <SiNextdotjs size={28} />, level: 4 },
      { name: 'JavaScript', icon: <FaJsSquare size={28} />, level: 3 },
      { name: 'TypeScript', icon: <SiTypescript size={28} />, level: 3 },
      { name: 'HTML5', icon: <FaHtml5 size={28} />, level: 4 },
      { name: 'CSS3', icon: <FaCss3Alt size={28} />, level: 4 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} />, level: 3 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'ASP.NET', icon: <SiDotnet size={28} />, level: 4 },
      { name: 'SQL', icon: <FaDatabase size={28} />, level: 3 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git & GitHub', icon: <FaGithub size={28} />, level: 4 },
      { name: 'DevTools', icon: <FaTools size={28} />, level: 2 },
      { name: 'Visual Studio', icon: <FaCogs size={28} />, level: 4 },
    ],
  },
];

const learning = [
  'Docker',
  'GraphQL',
  'Unit Testing',
  'UI/UX best practices',
];

const renderStars = (level: number) => {
  return (
    <div className="flex text-yellow-400">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < level ? '★' : '☆'}</span>
      ))}
    </div>
  );
};

const SkillsPage = () => {
  return (
    <section className="min-h-screen py-16 px-6 text-[--color-text]">
      <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category) => (
          <Card key={category.title} className="p-6 bg-[--color-bg] rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[--color-accent]">{category.title}</h3>
            <ul className="space-y-4">
              {category.items.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                  {renderStars(skill.level)}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Currently Learning</h3>
        <ul className="flex flex-wrap justify-center gap-4 text-[--color-text]">
          {learning.map((item, index) => (
            <li
              key={index}
              className="bg-[--color-bg] px-4 py-2 rounded-full shadow text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsPage;
