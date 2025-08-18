"use client";
import React from "react";
import CardSwap, { Card } from "../reactBits/CardSwap";
import Image from "next/image";
import first from "@/public/first.png";
import second from "@/public/second.png";
import deploy from "@/public/deploy.png";
import { Lock, Rocket, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import LightRays from "../reactBits/LightRays";

const Cards = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background LightRays */}
      <LightRays
        raysOrigin="left"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />

      {/* Foreground content centered like Hero */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "1200px",
          padding: "0 20px",
          zIndex: 10,
        }}
      >
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
          {/* Left Content */}
          <motion.div
            className="font-nata"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
              Why Choose Nexa?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed text-center md:text-left">
              Trust with confidence. Nexa empowers{" "}
              <span className="text-blue-400">creators</span>,{" "}
              <span className="text-purple-400">developers</span>, and{" "}
              <span className="text-pink-400">businesses</span> with a modern,
              reliable platform that makes{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">
                innovation effortless.
              </span>
            </p>

            <motion.ul
              className="space-y-6 text-lg font-medium"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {[
                {
                  icon: Users,
                  text: "Customer-first always: Build and launch faster with a simple, intuitive workflow.",
                },
                {
                  icon: Lock,
                  text: "No spam or gimmicks: Secure, scalable, and efficient by design.",
                },
                {
                  icon: Rocket,
                  text: "The Nexa universe: One-click deployment and tailored services for your needs.",
                },
                {
                  icon: ShieldCheck,
                  text: "Do better with money: Reliable support for creators and businesses.",
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <item.icon className="w-7 h-7 flex-shrink-0 text-blue-400" />
                  <span className="text-gray-300 leading-relaxed">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Content: Card Swap */}
          <div className="relative h-[420px] w-full">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              {/* Secure Card */}
              <Card className="p-2 bg-zinc-900 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-2 bg-gray-800 rounded-2xl px-3 py-2">
                  <Lock className="w-6 h-6 text-white" />
                  <p className="text-xl font-nata font-semibold text-white">
                    Secure
                  </p>
                </div>
                <hr className="border-t-4 border-white/80" />
                <div className="mt-2 relative w-full h-80">
                  <Image
                    src={second}
                    alt="secure"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Card>

              {/* Deployment Card */}
              <Card className="p-2 bg-zinc-900 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-2 bg-gray-800 rounded-2xl px-3 py-2">
                  <Rocket className="w-6 h-6 text-white" />
                  <p className="text-xl font-nata font-semibold text-white">
                    One Click Deployment
                  </p>
                </div>
                <hr className="border-t-4 border-white/80" />
                <div className="mt-2 relative w-full h-80">
                  <Image
                    src={deploy}
                    alt="deployment"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Card>

              {/* Reliable Card */}
              <Card className="p-2 bg-zinc-900 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-2 bg-gray-800 rounded-2xl px-3 py-2">
                  <ShieldCheck className="w-6 h-6 text-white" />
                  <p className="text-xl font-nata font-semibold text-white">
                    Reliable
                  </p>
                </div>
                <hr className="border-t-4 border-white/80" />
                <div className="mt-2 relative w-full h-80">
                  <Image
                    src={first}
                    alt="reliable"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Card>
            </CardSwap>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cards;
