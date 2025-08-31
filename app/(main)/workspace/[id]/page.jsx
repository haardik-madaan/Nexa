import ChatView from '@/components/custom/Workspace/ChatView'
import CodeView from '@/components/custom/Workspace/CodeView'
import React from 'react'

function workspace() {
  return (
    <div className='p-20 mt-10 '>
      <div className='grid grid-cols-3 md:grid-cols-4 h-screen'>
        <div className='col-span-3 md:col-span-1 border-r'>
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
