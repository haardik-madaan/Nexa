'use client'

import React from 'react'
import ScrollStack, { ScrollStackItem } from '../reactBits/ScrollStack'
import { Play, Type, Sparkles } from 'lucide-react' 
import LightRays from '../reactBits/LightRays'

const Scroll = () => {
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
        raysOrigin="right"
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

      {/* Foreground content centered */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "1500px",
          zIndex: 10,
        }}
      >
        <div className="flex flex-col md:flex-row w-full h-screen text-white">

          {/* LEFT SECTION */}
          <div className="w-full md:w-1/2 h-screen overflow-y-auto">
            <ScrollStack>

              {/* Card 1 */}
              <ScrollStackItem>
                <div className="flex items-center justify-between w-full max-w-3xl mx-auto rounded-3xl bg-pink-500 shadow-2xl">
                  <h2 className="text-4xl font-bold m-6">Build</h2>
                  <div className="flex items-center justify-center w-32 h-20 border-4 border-white rounded-xl m-6">
                    <Play size={48} strokeWidth={2.5} />
                  </div>
                </div>
              </ScrollStackItem>

              {/* Card 2 */}
              <ScrollStackItem>
                <div className="flex items-center justify-between w-full max-w-3xl mx-auto rounded-3xl bg-indigo-600 shadow-2xl">
                  <h2 className="text-4xl font-bold m-6">Customize</h2>
                  <div className="flex items-center justify-center w-32 h-20 border-4 border-white rounded-xl m-6">
                    <Type size={48} strokeWidth={2.5} />
                  </div>
                </div>
              </ScrollStackItem>

              {/* Card 3 */}
              <ScrollStackItem>
                <div className="flex items-center justify-between w-full max-w-3xl mx-auto rounded-3xl bg-purple-700 shadow-2xl">
                  <h2 className="text-4xl font-bold m-6">Debug</h2>
                  <div className="flex items-center justify-center w-32 h-20 border-4 border-white rounded-xl m-6">
                    <Sparkles size={48} strokeWidth={2.5} />
                  </div>
                </div>
              </ScrollStackItem>

              {/* Card 4 */}
              <ScrollStackItem>
                <div className="flex items-center justify-between w-full max-w-3xl mx-auto rounded-3xl bg-orange-600 shadow-2xl">
                  <h2 className="text-4xl font-bold m-6">All on NEXA!</h2>
                  <div className="flex items-center justify-center w-32 h-20 border-4 border-white rounded-xl m-6">
                    <Sparkles size={48} strokeWidth={2.5} />
                  </div>
                </div>
              </ScrollStackItem>

            </ScrollStack>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center justify-center w-full md:w-1/2 p-2">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-8 rounded-3xl shadow-2xl max-w-lg text-center md:text-left">
              <h2 className="text-4xl font-extrabold mb-4 text-white">
                The Power of NEXA
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                With <span className="font-semibold text-pink-400">NEXA</span>, 
                you can <span className="text-indigo-400">build</span> faster, 
                <span className="text-purple-400"> customize</span> freely, 
                and <span className="text-orange-400">debug</span> effortlessly.  
              </p>

              {/* Features */}
              <div className="mt-4 text-gray-400 space-y-4">
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v10a2 2 0 01-2 2z" />
                  </svg>
                  <p>Seamless workflow from idea generation to final deployment with precision and care at every step.</p>
                </div>

                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p>Focus on efficiency, scalability, and elegant design to deliver high-quality solutions.</p>
                </div>

                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v5h6v-5c0-1.657-1.343-3-3-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 20h14" />
                  </svg>
                  <p>Structured methodologies combined with modern technologies ensure smarter and faster execution.</p>
                </div>

                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <p>Impactful results that transform concepts into practical digital products with real-world value.</p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-6">
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-xl font-semibold shadow-lg hover:opacity-90 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Scroll
