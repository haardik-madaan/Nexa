"use client"
import React from 'react'
import ProfileCard from '../../reactBits/ProfileCard'
import TrueFocus from '../../reactBits/TrueFocus';

const Founder = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden">
      
      {/* Main wrapper: 2-column layout */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left side: Text */}
        <div className="flex-1">
          <div className="mb-8 -mt-6">
            <TrueFocus
              className="text-4xl font-extrabold text-white"
              sentence="Meet the Developer"
              manualMode={false}
              blurAmount={2}
              borderColor="blue"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I’m <span className="font-semibold text-white">Haardik Madaan</span>, a passionate Software Engineer 
            with strong expertise in <span className="text-indigo-400">Full-Stack Development</span>, 
            <span className="text-indigo-400"> Data Structures & Algorithms</span>, and 
            <span className="text-indigo-400"> Artificial Intelligence</span>. 
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Currently pursuing my <span className="font-medium text-white">B.Tech in Computer Science</span> 
            at <span className="font-medium text-white">Bennett University</span>, I enjoy building impactful, 
            user-focused applications and solving complex problems through clean and scalable code.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Beyond academics, I’ve developed projects ranging from 
            <span className="text-indigo-400"> AI-powered chatbots</span> to 
            <span className="text-indigo-400"> trading platforms</span> and 
            <span className="text-indigo-400"> real-time tracking systems</span>. 
            My vision is to create technology that merges innovation with practical use, 
            helping people experience the true power of software.
          </p>
        </div>

        {/* Right side: Profile card */}
        <div className="flex-1 flex justify-center">
          <ProfileCard
            name="Haardik Madaan"
            title="Software Engineer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/avatar.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>
      </div>
    </div>
  )
}

export default Founder
