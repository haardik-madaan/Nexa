"use client";
import React from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer
} from "@codesandbox/sandpack-react";

import MyTerminal from "../../../sandbox/MyTerminal";

export default function CodeView() {
  return (
    <SandpackProvider template="static">
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
