"use client"

import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import LightRays from '@/components/reactBits/LightRays'

const Provider = ({children}) => {
  return (
    <div className="relative">
        <LightRays className="!fixed inset-0 !-z-10 pointer-events-none" />
        <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange>
        
      
        {children}

        </NextThemesProvider>
        </div>
  )
}

export default Provider