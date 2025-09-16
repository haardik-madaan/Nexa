"use client"

import React from 'react'
import LogoLoop from '../../reactBits/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function Loop() {
    return (
      <div
        style={{
          height: '300px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // centers both loops vertically
          gap: '100px',               // vertical space between the loops
          padding: '',          // optional horizontal padding
        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={48}
          gap={140}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#00000"
          ariaLabel="Technology partners"
        />
  
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="right"
          logoHeight={48}
          gap={140}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#00000"
          ariaLabel="Technology partners"
        />
      </div>
    )
  }
  

export default Loop
