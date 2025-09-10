"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer
} from "@codesandbox/sandpack-react";

import MyTerminal from "../../../sandbox/MyTerminal";
import { MessagesContext } from "@/context/MessagesContext";

import {CodeGenPrompt} from "../../../constants/CodeGenPrompt"
import {Files} from "../../../constants/Files"
import { GenAiCode } from "@/config/AiModel";
import axios from "axios";



function CodeView() {
  const {messages,setMessages} = useContext(MessagesContext)
  const [files, setFiles] = useState(Files);


  useEffect(() => {
    if(messages?.length>0){
        const role = messages[messages?.length - 1].role;
        if(role=='user'){
          GenerateAiCode();
        }
    }
  
  },[messages])
  
   const GenerateAiCode= async()=>{
    const PROMPT = messages[messages?.length-1].content + CodeGenPrompt
    const result = await axios.post('/api/gen-ai-code',{
      prompt: PROMPT
    });

    console.log(result.data);
    const aiResp = result.data;
    const mergedFiles = {...Files,...aiResp?.files}
    setFiles(mergedFiles);

  }


  return (
     <SandpackProvider template="static" files={files}>
      <div style={{ display: "flex", height: "500px" }}>
        {/* Left side: File explorer + editor */}
        <div style={{ width: "40%", display: "flex", flexDirection: "column" }}>
          <SandpackFileExplorer />
          <SandpackCodeEditor style={{ flex: 1 }} />
        </div>

        {/* Right side: Preview */}
        <div style={{ width: "60%", paddingLeft: "10px" }}>
          <SandpackPreview style={{ height: "100%" }} />
        </div>
      </div>

      {/* Terminal below everything */}
      <div style={{ marginTop: "10px" }}>
        <MyTerminal />
      </div>
    </SandpackProvider>
  );
}

export default CodeView