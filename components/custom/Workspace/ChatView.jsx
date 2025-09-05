"use client";
import { api } from '../../../convex/_generated/api';
import { MessagesContext } from "../../../context/MessagesContext";
import { useConvex, useMutation } from "convex/react";
import React, { useEffect, useContext, useState } from "react";
import { useParams } from "next/navigation";
import Image from 'next/image';
import { UserDetailContext } from '../../../context/UserDetailContext';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { ArrowRightIcon, Loader2Icon } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'


function ChatView() {
  const convex = useConvex();
  const { messages, setMessages } = useContext(MessagesContext);
  const { userDetails } = useContext(UserDetailContext); 
  const { id } = useParams();
  const [inputMessage, setInputMessage] = useState("");  
  const [loading, setLoading] = useState(false);
  const updateWorkspace = useMutation(api.workspace.updateWorkspace)

  // Fetch workspace messages
  useEffect(() => {
    if (id) getWorkspace();
  }, [id]);

  useEffect(() => {
    console.log("Messages updated:", messages);
  }, [messages]);

  const getWorkspace = async () => {
    try {
      const result = await convex.query(api.workspace.getWorkspace, { workspaceId: id });
      setMessages(Array.isArray(result?.messages) ? result.messages : []);
      console.log("Fetched workspace messages:", result?.messages);
    } catch (error) {
      console.error("Error fetching workspace:", error);
      setMessages([]); 
    }
  };

  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };

  const onGenerate = async () => {
    if (!inputMessage.trim()) return;
  
    const newMessage = {
      role: "user",
      content: inputMessage,
    };
  
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInputMessage("");
    setLoading(true);
  
    try {
      const result = await axios.post("/api", {
        messages: updatedMessages,
      });
  
      const aiMessage = {
        role: "assistant",
        content: result.data.reply,
      };
  
      const finalMessages = [...updatedMessages, aiMessage];
      setMessages(finalMessages);
  
   
      await updateWorkspace({
        workspaceId: id,
        messages: finalMessages,
      });
  
    } catch (error) {
      console.error("Error getting AI response:", error);
    }
    setLoading(false);
  };
  

  return (
    <div className="flex flex-col h-full max-h-[92vh]">
  {/* Messages List */}
  <div className="flex-1 p-4 overflow-y-auto space-y-3">
    {(messages || []).map((msg, index) => (
      <div
        key={index}
        className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
      >
        <Image
          src={msg.role === "assistant" ? "/bot.png" : (userDetails?.image || "/default-profile.png")}
          alt={msg.role}
          width={45}
          height={45}
          className="rounded-full"
        />
        <div
          className={`px-3 py-2 rounded-xl max-w-[80%] break-words ${
            msg.role === "assistant" ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
          }`}
        >
         <div className="flex flex-col">
  <ReactMarkdown>{msg.content}</ReactMarkdown>
</div>
        </div>
      </div>
    ))}

    {/* Loading */}
    {loading && (
      <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
        <Loader2Icon className="w-5 h-5 animate-spin text-blue-500" />
        <p>Generating response...</p>
      </div>
    )}
  </div>

  {/* Input Box */}
  <div className="border-t border-gray-600 p-2 flex items-center gap-2">
    <Textarea
      placeholder="Type your message..."
      className="flex-1 h-20 px-4 py-3 text-lg resize-none pr-14"
      value={inputMessage}
      onChange={handleChange}
    />
    <Button
      type="submit"
      size="icon"
      className="rounded-xl hover:cursor-pointer"
      onClick={onGenerate}
    >
      <ArrowRightIcon className="w-6 h-6" />
    </Button>
  </div>
</div>

  );
}

export default ChatView;
