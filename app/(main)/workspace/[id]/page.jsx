import ChatView from '@/components/custom/Workspace/ChatView'
import CodeView from '@/components/custom/Workspace/CodeView'
import React from 'react'

function workspace() {
  return (
    <div className=' h-screen w-screen p-1 flex flex-col overflow-hidden'>
      <div className='grid grid-cols-3 md:grid-cols-4 h-screen gap-5 mt-30'>
        <div className='w-full max-w-2xl h-[83vh] border rounded-xl overflow-hidden flex flex-col'>
          <ChatView/>
        </div>
        <div className='col-span-3 md:col-span-3'>
         <CodeView/>

      </div>
    </div>
    </div>
  )
}

export default workspace
