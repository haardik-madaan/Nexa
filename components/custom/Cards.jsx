"use client";
import React from "react";
import CardSwap, { Card } from "../reactBits/CardSwap";
import Image from "next/image";
import first from "@/public/first.png";
import second from "@/public/second.png";
import deploy from "@/public/deploy.png";
import { Lock, Rocket, ShieldCheck, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <section className="relative z-10 py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        
       
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-nata font-bold text-white mb-3">
            Why Choose Nexa?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powerful, <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">secure</span>, 
            and easy-to-use features designed to help you build and launch faster.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
         
          <motion.div
            className="text-white font-nata"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
          
            <p className="text-2xl font-semibold mb-8 leading-relaxed text-gray-200">
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
                visible: {
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              {[
                { icon: Users, text: "Customer-first always: Build and launch faster with a simple, intuitive workflow." },
                { icon: Lock, text: "No spam or gimmicks: Secure, scalable, and efficient by design." },
                { icon: Rocket, text: "The Nexa universe: One-click deployment and tailored services for your needs." },
                { icon: ShieldCheck, text: "Do better with money: Reliable support for creators and businesses." }
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <item.icon className="w-7 h-7 flex-shrink-0 text-blue-400" />
                  <span className="text-gray-300 leading-relaxed">{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

         
          <div className="h-[400px] relative">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
        
              <Card className="p-2 bg-zinc-900 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-2 bg-gray-800 rounded-2xl px-3 py-2">
                  <Lock className="w-6 h-6 text-white" />
                  <p className="text-xl font-nata font-semibold text-white">
                    Secure
                  </p>
                </div>
                <hr className="border-t-4 border-white/80" />
                <div className="mt-2 w-full h-80 relative">
                  <Image
                    src={second}
                    alt="secure"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Card>

       
              <Card className="p-2 bg-zinc-900 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-2 bg-gray-800 rounded-2xl px-3 py-2">
                  <Rocket className="w-6 h-6 text-white" />
                  <p className="text-xl font-nata font-semibold text-white">
                    One Click Deployment
                  </p>
                </div>
                <hr className="border-t-4 border-white/80" />
                <div className="mt-2 w-full h-80 relative">
                  <Image
                    src={deploy}
                    alt="deployment"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Card>
             <Card className="p-2 bg-zinc-900 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-2 bg-gray-800 rounded-2xl px-3 py-2">
                  <ShieldCheck className="w-6 h-6 text-white" />
                  <p className="text-xl font-nata font-semibold text-white">
                    Reliable
                  </p>
                </div>
                <hr className="border-t-4 border-white/80" />
                <div className="mt-2 w-full h-80 relative">
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

        </div>
      </div>
    </section>
  );
};

export default Cards;
