"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import ContactDrawer from "./ContactDrawer";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg/30 text-[--color-text] px-4"
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Mobile Toggle */}
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="p-2"
        />
      </NavbarContent>

      {/* Brand Left */}
      <NavbarContent className="sm:flex gap-2" justify="start">
        <Link
          href="/"
          className="flex items-center gap-2 text-[--color-text] hover:text-[--color-accent] transition"
          aria-label="Home"
        >
          <NavbarBrand className="flex items-center gap-2 text-[--color-text]">
            <Image
              src="/logo2.png"
              alt="Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="hidden md:flex text-xl font-bold text-[--color-text]">
              Yannick Desiron
            </span>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      {/* Navigation Center */}
      <NavbarContent className="hidden lg:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              className={`text-[--color-text] hover:text-[--color-accent] transition ${
                pathname === item.href ? "font-bold underline underline-offset-4" : ""
              }`}
              aria-label={`Go to ${item.label}`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Side: Socials + Say Hello + Theme */}
      <NavbarContent justify="end" className="items-center gap-4">
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://linkedin.com/in/yannick-desiron-612b8a256"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[--color-text] hover:text-[--color-accent] hover:scale-110 transition-transform"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href="https://github.com/yannickdesiron"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[--color-text] hover:text-[--color-accent] hover:scale-110 transition-transform"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://facebook.com/yannick.desiron"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[--color-text] hover:text-[--color-accent] hover:scale-110 transition-transform"
          >
            <FaFacebook size={20} />
          </Link>
        </div>

        <div className="flex items-center">
          <ContactDrawer />
        </div>

        <NavbarItem className="hidden md:flex">
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.href}-${index}`}>
            <Link
              href={item.href}
              size="lg"
              className="w-full text-[--color-text] hover:text-[--color-accent]"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
          <Link
            href="https://linkedin.com/in/yannick-desiron-612b8a256"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-text] hover:text-[--color-accent]"
          >
            LinkedIn
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="https://github.com/yannickdesiron"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-text] hover:text-[--color-accent]"
          >
            GitHub
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="https://facebook.com/yannick.desiron"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-text] hover:text-[--color-accent]"
          >
            Facebook
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <ThemeToggle />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
