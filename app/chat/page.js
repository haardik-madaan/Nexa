import Hero from "@/components/custom/ChatPage/Hero";
import React from "react";
import Prism from "@/components/reactBits/Prism";

function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Prism Background */}
      <div className="absolute inset-0">
        <Prism
          animationType="rotate"
          timeScale={0.8}
          height={3.5}
          baseWidth={3.5}
          scale={4}
          hueShift={0.2}
          colorFrequency={0.6}
          noise={0}
          glow={0.3}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}

export default Page;
