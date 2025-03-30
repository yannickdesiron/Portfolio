'use client';

import React from 'react';
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiTailwindcss, SiDotnet, SiSharp, SiPostgresql, SiMysql } from 'react-icons/si';

const techIcons = [
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss3 />, name: 'CSS3' },
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTailwindcss />, name: 'TailwindCSS' },
  { icon: <SiDotnet />, name: '.NET' },
  { icon: <SiSharp />, name: 'C#' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiMysql />, name: 'MySQL' },
];

const LanguageSlider = () => {
  return (
    <div className="w-full overflow-hidden py-8 bg-[--color-sec]">
      <div className="animate-slide flex gap-12 whitespace-nowrap px-4">
        {techIcons.concat(techIcons).map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-[--color-text] text-4xl hover:text-[--color-accent] transition"
          >
            {tech.icon}
            <span className="text-sm mt-2">{tech.name}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LanguageSlider;
