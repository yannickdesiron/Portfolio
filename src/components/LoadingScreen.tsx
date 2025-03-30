"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // start fade out after 2s

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-[--color-bg] transition-opacity duration-1000",
        fadeOut && "opacity-0 pointer-events-none"
      )}
    >
      <h1
        className={clsx(
          "text-[--color-text] font-bold text-5xl sm:text-6xl md:text-7xl",
          "mix-blend-difference animate-growAndFade"
        )}
      >
        YANNICK<br />DESIRON
      </h1>

      <style jsx>{`
        @keyframes growAndFade {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(10);
            opacity: 0;
          }
        }

        .animate-growAndFade {
          animation: growAndFade 2s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
