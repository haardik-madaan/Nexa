"use client";

import React from "react";
import LightRays from "@/components/reactBits/LightRays";
import SplashCursor from "@/components/reactBits/SplashCursor";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Samples() {
  const projects = [
    {
      title: "Coursify",
      desc: "A responsive course marketplace with payments and progress tracking.",
      href: "https://coursify-mmed5pgdf-haardiks-projects-f2daa254.vercel.app/",
    },
    { title: "PetAdopt", desc: "A compassionate platform connecting loving families with pets in need adopt, foster, or support with ease.", href: "https://pet-adoption-platform-ek4qjdrlk-haardiks-projects-f2daa254.vercel.app/" },
    { title: "SneakerVerse", desc: "A vibrant hub for sneaker lovers discover, trade, and collect the hottest drops from around the globe.", href: "https://sneaker-store-k0dh4v3oa-haardiks-projects-f2daa254.vercel.app/" },
    { title: "Estate Pro", desc: "A modern real estate platform to explore, buy, rent, or sell properties with smart search and seamless experience.", href: "https://property-selling-website-iyuclz9z3-haardiks-projects-f2daa254.vercel.app/" },
    { title: "Trendoc", desc: "A chic rental marketplace for women’s outfits swap, rent, and style premium looks without breaking the bank.", href: "https://trendoc-rentals-n2sltvwn3-haardiks-projects-f2daa254.vercel.app/" },
    { title: "VetConnect", desc: "A trusted platform connecting pet owners with licensed veterinarians — get expert advice, consultations, and care anytime.", href: "https://vet-appointment-platform-k7wxihddj-haardiks-projects-f2daa254.vercel.app/" },
    { title: "FocusPlay Extension", desc: "Chrome extension to manage YouTube focus.", href: "#" },
    { title: "Learnify", desc: "An interactive learning platform designed to make education engaging, personalized, and fun — anytime, anywhere.", href: "https://leanify-nj60zakn1-haardiks-projects-f2daa254.vercel.app/" },
    { title: "Fashion Store", desc: "A stylish online destination bringing curated fashion collections to your fingertips shop trends, classics, and statement pieces effortlessly.", href: "https://fashion-store-69hi2gepa-haardiks-projects-f2daa254.vercel.app/" },
    { title: "Vercel Clone", desc: "A lightning-fast deployment platform for modern web apps build, preview, and ship instantly with zero DevOps.", href: "https://vercel-clone-gnghb19uk-haardiks-projects-f2daa254.vercel.app/" },
    { title: "SkillBridge", desc: "A platform conecting learners and creators, offering beautifully designed lessons with an engaging experience.", href: "https://skillbridge-gaxgrr3k1-haardiks-projects-f2daa254.vercel.app/" },
    { title: "RentStyle", desc: "A premium rental marketplace offering designer outfits for women easy, affordable, and sustainable fashion on demand.", href: "https://girls-clothes-rental-l1to0u0fv-haardiks-projects-f2daa254.vercel.app/" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden px-6 md:px-12 flex items-center justify-center bg-gradient-to-b from-gray-900 via-zinc-900 to-black text-white">
      {/* Subtle animated background cursor effect */}
      {/* <SplashCursor /> */}
      <LightRays className="fixed inset-0 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto py-24">
        {/* Animated header */}
        <header className="mb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-400 to-orange-600 drop-shadow-lg animate-pulse"
          >
            ✨ Projects ✨
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed italic tracking-wide"
          >
            A curated selection of <span className="text-indigo-300 font-semibold">experiments</span> and <span className="text-pink-300 font-semibold">production demos</span> — click any card to explore.
          </motion.p>
        </header>

     

        {/* Animated project cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group transform hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6 bg-gradient-to-br from-zinc-800/60 to-zinc-900/40 border border-zinc-700 backdrop-blur-md shadow-lg hover:shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold group-hover:text-indigo-300 transition">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-300">{p.desc}</p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-600/30 to-pink-600/20 border border-zinc-700 text-indigo-200">
                    {"Project " + (idx + 1)}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-gray-300">
                <span className="inline-flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M10 14L21 3" />
                    <path d="M21 3h-6v6" />
                    <path d="M21 21H3V3h7" />
                  </svg>
                  Live demo
                </span>
              
              </div>
            </motion.a>
          ))}
        </section>

        {/* Call-to-action footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm mb-3">Have a project idea?</p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-transform shadow-md font-medium"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Subtle vignette */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent to-black/60 mix-blend-multiply" />
    </div>
  );
}
