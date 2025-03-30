'use client'

import React from "react";
import { Button } from '@heroui/react';
import { FaWrench } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[--color-bg] text-[--color-text]">
      <div className="animate-bounce mb-6 text-[--color-accent] text-5xl">
        <FaWrench />
      </div>
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg mb-8 max-w-md">
        I&apos;m still working on this page — stay tuned, it&apos;ll be live soon!
      </p>
      <Button
        variant="flat"
        href="/"
        className="bg-[--color-accent] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition"
      >
        Back to Home
      </Button>
    </section>
  );
};