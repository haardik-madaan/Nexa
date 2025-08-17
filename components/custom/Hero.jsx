"use client";
import React from "react";
import LightRays from "../reactBits/LightRays";
import TextType from "../reactBits/TextType";

const Hero = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        position: "relative",
        overflow: "hidden",
      }}
    >
    
      <LightRays
        raysOrigin="top-center"
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

     
      <div
        style={{
          position: "absolute",
          top: "65%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          zIndex: 10,
          maxWidth: "800px",
        }}
      >
     <section className="flex flex-col items-center justify-center text-center py-32 px-6">
    

     <div className="text-5xl font-bold mb-5">
  <TextType 
    text={[
        "Build Smart, Launch Fast, Transform Your Ideas",
        "Craft Your Vision, Share It Instantly",
        "Turn Ideas into Stunning Digital Experiences",
        "Design Boldly, Launch Effortlessly",
        "Bring Your Imagination to Life Online"
      ]}
    typingSpeed={100}
    pauseDuration={2000}
    showCursor={true}
    cursorCharacter="|"
  />
</div>



      <div className="flex space-x-4 mt-8">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 text-black font-medium shadow-md hover:opacity-90 transition">
          Get Started
        </button>

        <button className="px-6 py-3 rounded-full border border-gray-500 text-gray-400 font-medium hover:border-gray-300 hover:text-gray-200 transition">
          Learn More
        </button>
      </div>
    </section>
      </div>
    </div>
  );
};

export default Hero;
