'use client';

import React from "react";
import { Card } from "@heroui/react";

const ResumePage = () => {
  return (
    <section className="min-h-screen py-16 px-6 text-[--color-text]">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center">Resume</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education */}
        <Card className="p-6 bg-[--color-bg] border-[--color-accent]/30">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <ul className="space-y-3">
            <li>
              <p className="font-bold">Math/Science</p>
              <p className="text-sm text-gray-500">2004 - 2010</p>
            </li>
            <li>
              <p className="font-bold">Bachelor ICT/Electronics Engineering - Artesis Antwerp</p>
              <p className="text-sm text-gray-500">2010 - 2011</p>
            </li>
            <li>
              <p className="font-bold">Bachelor Programming - KU Leuven</p>
              <p className="text-sm text-gray-500">2011 - 2012</p>
            </li>
            <li>
              <p className="font-bold">Graduaat Programming - Thomas More</p>
              <p className="text-sm text-gray-500">2022 - 2025</p>
            </li>
          </ul>
        </Card>

        {/* Basketball Career */}
        <Card className="p-6 bg-[--color-bg] border-[--color-accent]/30">
          <h3 className="text-2xl font-semibold mb-4">Basketball Career</h3>
          <ul className="space-y-3">
            <li>
              <p className="font-bold">Optima Ghent</p>
              <p className="text-sm text-gray-500">2011 - 2012</p>
            </li>
            <li>
              <p className="font-bold">Leuven Bears</p>
              <p className="text-sm text-gray-500">2012 - 2015</p>
            </li>
            <li>
              <p className="font-bold">Hubo Limburg United</p>
              <p className="text-sm text-gray-500">2015 - 2018</p>
            </li>
            <li>
              <p className="font-bold">BC Oostende</p>
              <p className="text-sm text-gray-500">2018 - 2020</p>
            </li>
            <li>
              <p className="font-bold">Hubo Limburg United</p>
              <p className="text-sm text-gray-500">2020 - 2023</p>
            </li>
            <li>
              <p className="font-bold">Brussels Basketball</p>
              <p className="text-sm text-gray-500">2023 - 2025</p>
            </li>
          </ul>
        </Card>
      </div>

        

        <Card className="p-6 bg-[--color-bg] border-[--color-accent]/30 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Coding Skills</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>C#</li>
                <li>React</li>
                <li>Next.js</li>
                <li>.NET</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Soft Skills</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Stress Management</li>
                <li>Perseverance</li>
                <li>Social & People Skills</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-[--color-bg] border-[--color-accent]/30 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>GitHub</li>
            <li>Docker</li>
            <li>Figma</li>
            <li>Visual Studio / VS Code</li>
            <li>WebStorm</li>
          </ul>
        </Card>

        <Card className="p-6 bg-[--color-bg] border-[--color-accent]/30 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Internship</h3>
          <p>Scheduled internship in June 2025 as part of the Graduaat Programming program.</p>
        </Card>
      </div>
    </section>
  );
};

export default ResumePage;
