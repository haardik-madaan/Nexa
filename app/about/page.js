"use client";
import React from "react";
import LightRays from "@/components/reactBits/LightRays";
import SplashCursor from "../../components/reactBits/SplashCursor";

function AboutUs() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden px-6 md:px-12 flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <SplashCursor />
      {/* Background effect */}
      <LightRays className="fixed inset-0 z-0 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl flex flex-col gap-12 text-center md:text-left">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          About Nexa
        </h2>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          <span className="font-semibold text-white">Nexa</span> is an advanced AI-powered chatbot designed to help users build fully functional websites effortlessly. It leverages state-of-the-art technologies in <span className="text-indigo-400">Natural Language Processing (NLP)</span> and <span className="text-indigo-400">Generative AI</span> to understand user requirements and automatically generate clean, responsive, and production-ready code.
        </p>

        {/* Technical Features */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Nexa supports <span className="text-indigo-400">React.js</span>, <span className="text-indigo-400">Next.js</span>, <span className="text-indigo-400">Tailwind CSS</span>, and <span className="text-indigo-400">TypeScript</span>, allowing users to create modern, scalable web applications. Its intelligent prompts and code generation capabilities reduce development time while maintaining high-quality, maintainable code.
        </p>

        {/* Vision & Impact */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Nexa not only generates code but also provides best-practice suggestions, integrates APIs, and structures pages dynamically based on user inputs. The goal is to empower developers, startups, and businesses to transform ideas into interactive web experiences quickly, without deep coding expertise.
        </p>

        {/* Optional CTA */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/haardik-madaan-2040ba25b/"
            className="inline-block px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-600 transition-all"
          >
            Get in touch
          </a>
          <button
            onClick={() => window.history.back()}
            className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
