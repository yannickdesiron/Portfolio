// components/SocialLinksMenu.tsx
"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialLinksMenu = () => {
  return (
    <div className="flex gap-6 justify-center items-center mt-4 text-[--color-text]">
      <a
        href="https://www.facebook.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[--color-accent] transition"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[--color-accent] transition"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[--color-accent] transition"
      >
        <FaLinkedinIn size={20} />
      </a>
    </div>
  );
};

export default SocialLinksMenu;
