"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md px-8 py-4 flex items-center justify-between text-white">
      {/* Left: Logo */}
      <div className="text-xl font-bold flex items-center gap-2">
        <Link href="/">
          <Image src="/logo2.png" alt="Logo" width={32} height={32} />
        </Link>
        <Link href="/">Yannick Desiron</Link>
      </div>

      {/* Center: Menu */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        <Link href="/about-me" className="hover:text-[var(--color-accent)] transition">About Me</Link>
        <Link href="/projects" className="hover:text-[var(--color-accent)] transition">Projects</Link>
        <Link href="/skills" className="hover:text-[var(--color-accent)] transition">Skills</Link>
        <Link href="/resume" className="hover:text-[var(--color-accent)] transition">Resume</Link>
        <Link href="/contact" className="hover:text-[var(--color-accent)] transition">Contact</Link>
      </div>

      {/* Right: Social icons + theme + CTA */}
      <div className="flex items-center gap-4">
        {/* Facebook */}
        <a href="https://facebook.com/yannick.desiron" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/yannick-desiron-612b8a256" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)]">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.54a2.06 2.06 0 1 1 .02-4.12 2.06 2.06 0 0 1-.02 4.12zm15.11 12.91h-3.55v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.68h-3.55V9h3.41v1.56h.05c.47-.89 1.6-1.84 3.3-1.84 3.53 0 4.18 2.32 4.18 5.33v6.4z" />
          </svg>
        </a>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="hover:text-[var(--color-accent)] transition">
          {theme === "light" ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 2v2m6.364.636l-1.414 1.414M22 12h-2m-1.636 5.364l-1.414-1.414M12 22v-2m-6.364-.636l1.414-1.414M2 12h2m1.636-5.364L5.05 7.05M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          )}
        </button>

        {/* Contact Me Button */}
        <Link
          href="/contact"
          className="bg-[var(--color-accent)] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#009e7a] transition"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  ); 
};

export default NavBar;
