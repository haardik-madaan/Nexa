'use client'

import React from 'react'
import ScrollStack, { ScrollStackItem } from '../reactBits/ScrollStack'
import { Play, Type, Sparkles } from 'lucide-react' // icons

const Scroll = () => {
  return (
    <div className="w-full h-screen bg-black text-white">
      <ScrollStack>
        
        {/* Card 1 */}
        <ScrollStackItem>
          <div className="flex items-center justify-between w-full max-w-3xl px-8 py-12 mx-auto rounded-3xl bg-pink-500 shadow-2xl">
            <h2 className="text-4xl font-bold">Build</h2>
            <div className="flex items-center justify-center w-32 h-20 border-4 border-white rounded-xl">
              <Play size={48} strokeWidth={2.5} />
            </div>
          </div>
        </ScrollStackItem>

        {/* Card 2 */}
        <ScrollStackItem>
          <div className="flex items-center justify-between w-full max-w-3xl px-8 py-12 mx-auto rounded-3xl bg-indigo-600 shadow-2xl">
            <h2 className="text-4xl font-bold">Customize</h2>
            <div className="flex items-center justify-center w-32 h-20 border-4 border-white rounded-xl">
              <Type size={48} strokeWidth={2.5} />
            </div>
          </div>
        </ScrollStackItem>

        {/* Card 3 */}
        <ScrollStackItem>
          <div className="flex items-center justify-between w-full max-w-3xl px-8 py-12 mx-auto rounded-3xl bg-purple-700 shadow-2xl">
            <h2 className="text-4xl font-bold">Debug</h2>
            <div className="flex items-center justify-center w-32 h-20 border-4 border-white rounded-xl">
              <Sparkles size={48} strokeWidth={2.5} />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem>
          <div className="flex items-center justify-between w-full max-w-3xl px-8 py-12 mx-auto rounded-3xl bg-orange-600 shadow-2xl">
            <h2 className="text-4xl font-bold">All on NEXA!</h2>
            <div className="flex items-center justify-center w-32 h-20 border-4 border-white rounded-xl">
              <Sparkles size={48} strokeWidth={2.5} />
            </div>
          </div>
        </ScrollStackItem>

      </ScrollStack>
    </div>
  )
}

export default Scroll
