import ChatView from '../../../../components/custom/Workspace/ChatView';
import CodeView from '../../../../components/custom/Workspace/CodeView';
import React from 'react';

function Workspace() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className="h-14 border-b border-gray-700 flex items-center px-4">
        <h1 className="text-lg font-semibold">Navbar</h1>
      </div>

      {/* Workspace content */}
      <div className="flex-1 p-2">
        <div className="grid grid-cols-12 gap-4 h-full">
          {/* Chat Section (slightly wider) */}
          <div className="col-span-4 md:col-span-4 lg:col-span-4 h-full border rounded-xl overflow-hidden flex flex-col">
            <ChatView />
          </div>

          {/* Code Section */}
          <div className="col-span-8 md:col-span-8 lg:col-span-8 h-full border rounded-xl overflow-hidden">
            <CodeView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
