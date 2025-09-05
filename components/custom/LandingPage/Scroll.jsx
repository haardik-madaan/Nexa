'use client'

import React from 'react'
import ScrollStack, { ScrollStackItem } from '../../reactBits/ScrollStack'
import { Play, Type, Sparkles } from 'lucide-react' 
import ResumeCodeEditor from "../../reactBits/Editor";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 text-white">
          {/* Left: ScrollStack */}
          <div>
            <ScrollStack>
              <ScrollStackItem title="Build" icon={Play}>
                Build your web applications with speed and precision.
              </ScrollStackItem>
              <ScrollStackItem title="Customize" icon={Type}>
                Tailor your projects to fit your exact needs.
              </ScrollStackItem>
              <ScrollStackItem title="Shine" icon={Sparkles}>
                Make your websites stand out with stunning effects.
              </ScrollStackItem>
            </ScrollStack>
          </div>

          {/* Right: Code Editor */}
          <div className="w-full h-[450px] bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden text-white">
            <ResumeCodeEditor/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scroll
