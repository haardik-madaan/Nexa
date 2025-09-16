"use client"
import Image from 'next/image';
import ChatView from '../../../../components/custom/Workspace/ChatView';
import CodeView from '../../../../components/custom/Workspace/CodeView';
import React from 'react';
import logo from "./../../../../public/logo.png"
import { useRouter } from 'next/navigation';



function Workspace() {
  const router = useRouter()
  
  return (
    <div className="h-screen w-screen flex flex-col overflow-auto gap-0">
      {/* Navbar */}
      <div className="h-14 border-b border-gray-700 flex items-center justify-center ">
        <Image src={logo} alt='logo' height={140} width={140} onClick={()=>router.push("/")}/> 
      </div>

      {/* Workspace content */}
      <div className='flex flex-1'>
        <div className="flex flex-cols-12 h-screen">
          {/* Chat Section (slightly wider) */}
          <div className="grid grid-cols-12 gap-4 h-screen p-4">
  {/* Chat Panel */}
  <div className="col-span-2 md:col-span-5 lg:col-span-4 h-full border rounded-xl overflow-auto flex flex-col">
    <ChatView />
  </div>

  {/* Code Panel */}
  <div className="col-span-10 md:col-span-7 lg:col-span-8 border rounded-xl flex flex-col">
    <CodeView />
  </div>
</div>



        </div>
      </div>
    </div>
  );
}

export default Workspace;
