"use client"
import { api } from '@/convex/_generated/api';
import { MessagesContext } from "@/context/MessagesContext";
import { useConvex } from "convex/react";
import React, { useEffect, useContext, useState } from "react";
import { useParams } from "next/navigation";
import Image from 'next/image';
import { UserDetailContext } from '@/context/UserDetailContext';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

function ChatView() {
  const convex = useConvex();
  const { messages, setMessages } = useContext(MessagesContext);
  const { userDetails } = useContext(UserDetailContext); 
  const { id } = useParams();
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    if (id) getWorkspace();
  }, [id]);

  useEffect(() => {
    console.log("Messages updated:", messages);
  }, [messages]);

  const getWorkspace = async () => {
    const result = await convex.query(api.workspace.getWorkspace, { workspaceId: id });
    setMessages(result?.messages || []);
    console.log(result?.messages);
  };
  const handleChange = (e) => {
    setPrompt(e.target.value);
  };
  
  const onGenerate = async () => {
    if (!prompt.trim()) return;
    setMessages(prev => Array.isArray(prev) 
      ? [...prev, { content: prompt, sender: "user" }] 
      : [{ content: prompt, sender: "user" }]
    );
    console.log(messages)
    setPrompt("");
  };
  

  return (
    <div className="flex flex-col h-full max-h-[83vh]">
      
 
      <div className="flex-1 p-4 overflow-y-auto space-y-3 ml-20">
        {messages?.map((msg, index) => (
          <div key={index} className="flex items-start gap-3">
            <Image 
              src={userDetails?.image || '/default-user.png'} 
              alt="user" 
              width={45} 
              height={45} 
              className="rounded-full"
            />
            <div className="bg-gray-700 px-3 py-2 rounded-xl max-w-[80%] break-words">
              <p className="text-white text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="relative w-full max-w-2xl mt-auto border-t border-gray-600 flex items-center gap-2">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 h-20 px-4 py-3 text-lg resize-none pr-14"
          value={prompt}
          onChange={handleChange}
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-6 top-1/2 -translate-y-1/2 rounded-xl hover:cursor-pointer"
          onClick={onGenerate}
        >
          <ArrowRightIcon className="w-6 h-6" />
        </Button>
      </div>

    </div>
  );
}

export default ChatView;
