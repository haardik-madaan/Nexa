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

function CodeView() {
  const { messages, setMessages } = useContext(MessagesContext);
  const [files, setFiles] = useState(Files);
  const [section, setSection] = useState("code");

  useEffect(() => {
    if (messages?.length > 0) {
      const role = messages[messages.length - 1].role;
      if (role === "user") {
        GenerateAiCode();
      }
    }
  }, [messages]);

  const GenerateAiCode = async () => {
    const PROMPT = messages[messages.length - 1].content + CodeGenPrompt;
    const result = await axios.post("/api/gen-ai-code", { prompt: PROMPT });

    console.log(result.data);
    const aiResp = result.data;
    const mergedFiles = { ...Files, ...aiResp?.files };
    setFiles(mergedFiles);
  };

  return (
    <div>
      {/* Toggle Buttons */}
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
              <SandpackPreview style={{ height: "93vh" }} />
              </>
}
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
}

export default CodeView;
