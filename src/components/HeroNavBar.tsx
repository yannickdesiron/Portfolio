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
import ThemeToggle from "./ThemeToggle";
import ContactDrawer from "./ContactDrawer";
import SocialLinksMenu from "./SocialLinksMenu";

const menuItems = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg/30 text-[--color-text] px-4"
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Mobile Toggle */}
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* Brand Left */}
      <NavbarContent className="sm:flex gap-2" justify="start">
        <NavbarBrand className="flex items-center gap-2 text-[--color-text]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="text-[--color-text]"
          >
            <rect
              x="20"
              y="20"
              width="160"
              height="160"
              rx="20"
              ry="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
            />
            <g transform="translate(-15, 0)">
              <path d="M55 60 L80 105 L80 150 L92 150 L92 105 L117 60 L105 60 L86 95 L67 60 Z" />
              <path d="M125 60 L125 150 L155 150 Q175 150 175 105 Q175 60 155 60 Z M137 72 L150 72 Q163 72 163 105 Q163 138 150 138 L137 138 Z" />
            </g>
          </svg>
          <span className="hidden md:flex text-xl font-bold text-[--color-text]">Yannick Desiron</span>
        </NavbarBrand>
      </NavbarContent>

      {/* Navigation Center */}
      <NavbarContent className="hidden lg:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link href={item.href} className="text-[--color-text] hover:text-[--color-accent]">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Side: Socials + Theme + Say Hello */}
<NavbarContent justify="end" className="items-center gap-4">
  {/* Social Icons - Only on large screens */}
  <div className="hidden lg:flex items-center gap-3">
    <SocialLinksMenu />
  </div>

  {/* Say Hello - Always visible */}
  <div className="flex items-center">
    <ContactDrawer />
  </div>

  {/* Theme toggle stays separate */}
  <NavbarItem className="hidden md:flex">
    <ThemeToggle />
  </NavbarItem>
</NavbarContent>



      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.href}-${index}`}>
            <Link
              className="w-full text-[--color-text] hover:text-[--color-accent]"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
          
        ))}
        <NavbarMenuItem>
          <SocialLinksMenu />
        </NavbarMenuItem>

        <NavbarMenuItem>
          <ThemeToggle />
        </NavbarMenuItem>
        
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
