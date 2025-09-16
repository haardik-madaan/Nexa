"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Sandpack,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer
} from "@codesandbox/sandpack-react";

import { MessagesContext } from "@/context/MessagesContext";
import { CodeGenPrompt } from "../../../constants/CodeGenPrompt";
import { Files } from "../../../constants/Files";
import { GenAiCode } from "@/config/AiModel";
import axios from "axios";
import { amethyst } from "@codesandbox/sandpack-themes";
import { useConvex, useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { Loader2Icon, LoaderPinwheel, LoaderPinwheelIcon } from "lucide-react";
import Loader from "../../../components/reactBits/Loader"

function CodeView() {
  const {id} = useParams();
  const { messages, setMessages } = useContext(MessagesContext);
  const [files, setFiles] = useState(Files);
  const [section, setSection] = useState("code");
  const [loading,setLoading] = useState(false);
  const updateFiles = useMutation(api.workspace.updateFiles)
  const convex = useConvex();


  const [prevLength, setPrevLength] = useState(0);

useEffect(() => {
  if (messages?.length > prevLength) {
    const role = messages[messages.length - 1].role;
    if (role === "user") {
      GenerateAiCode();
    }
    setPrevLength(messages.length);
  }
}, [messages, prevLength]);

useEffect(()=>{
  id&&GetFiles()
  return;
},[id])


  const GetFiles = async () => {
    setLoading(true);
    const result = await convex.query(api.workspace.getWorkspace,{
      workspaceId: id
    });

    const mergedFiles = { ...Files, ...result?.fileData };
    setFiles(mergedFiles)
    setLoading(false)
  }

  const GenerateAiCode = async () => {
    setLoading(true);
    const PROMPT = messages[messages.length - 1].content + CodeGenPrompt;
    const result = await axios.post("/api/gen-ai-code", { prompt: PROMPT });

    console.log(result.data);
    const aiResp = result.data;
    const mergedFiles = { ...Files, ...aiResp?.files };
    setFiles(mergedFiles);
    await updateFiles({
        workspaceId: id,
        files: aiResp?.files
    })
    setLoading(false);
  };

  return (
    <div>
        {loading && (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/40 z-50">
      <div className="w-70 h-70">
        <Loader />  
      </div>
      <h2 className="text-white mt-0 text-md">Cooking your website...</h2>
    </div>
    
    )}
         
      <div className="flex justify-center ">
        <div className="flex row justify-center items-center gap-2  p-2">
          <h2
            className={`cursor-pointer px-3 py-1 rounded-2xl ${
              section === "code" ? "text-blue-500  " : "text-gray-300"
            }`}
            onClick={() => setSection("code")}
          >
            Code
          </h2>
          <h2
            className={`cursor-pointer px-3 py-1 rounded-2xl ${
              section === "preview" ? "text-blue-500" : "text-gray-300"
            }`}
            onClick={() => setSection("preview")}
          >
            Preview
          </h2>
        </div>
      </div>

      {/* Sandpack Editor */}
      <div>
        <SandpackProvider template="static" files={files} theme="dark">
          <SandpackLayout style={{width : "121.5vh"}}>
            {section == "code" ? 
            <>
              <SandpackFileExplorer style={{ height: "93vh" }} />
              <SandpackCodeEditor style={{ height: "93vh" }} />
            </>
            :
              <>
              <SandpackPreview style={{ height: "93vh" }}  showNavigator={true} />
              </>
}
          </SandpackLayout>
        </SandpackProvider>
      
      </div>
    </div>
  );
}

export default CodeView;
