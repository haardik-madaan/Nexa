'use client'

import React from 'react'
import ScrollStack, { ScrollStackItem } from '../reactBits/ScrollStack'
import { Play, Type, Sparkles } from 'lucide-react' 
import ResumeCodeEditor from "@/components/reactBits/Editor";

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
                <div className="flex items-center justify-between w-full max-w-3xl mx-auto rounded-3xl bg-green-500 shadow-2xl">
                  <h2 className="text-4xl font-bold m-6">Deploy</h2>
                  <div className="flex items-center justify-center w-32 h-20 border-4 border-white rounded-xl m-6">
                    <Sparkles size={48} strokeWidth={2.5} />
                  </div>
                </div>
              </ScrollStackItem>

              {/* Card 5 */}
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
            <ResumeCodeEditor/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Scroll
