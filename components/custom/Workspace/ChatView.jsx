"use client"
import { api } from '@/convex/_generated/api';
import { MessagesContext } from "@/context/MessagesContext"
import { useConvex } from "convex/react";
import React, { useEffect, useContext } from "react";
import { useParams } from "next/navigation";

function ChatView() {
    const convex = useConvex();
    const {messages,setMessages} = useContext(MessagesContext);
    const {id} = useParams();


    useEffect(()=>{
       id && getWorkspace();
    },[id])
    const getWorkspace = async() => {
        const result = await convex.query(api.workspace.getWorkspace, {workspaceId : id});
        setMessages(result?.messages);
        console.log(result.messages);
    }
  return (
   
    <div>
      <h2>chat appears here</h2>
    </div>
  )
}

export default ChatView
