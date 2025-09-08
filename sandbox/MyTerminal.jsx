"use client";
import React, { useState } from "react";
import { useSandpack } from "@codesandbox/sandpack-react";

function MyTerminal() {
  const { sandpack } = useSandpack();
  const [output, setOutput] = useState("");

  const runCommand = (cmd) => {
    const [command, ...args] = cmd.split(" ");

    switch (command) {
      case "ls":
        setOutput(Object.keys(sandpack.files).join("\n"));
        break;

      case "cat": {
        const file = args[0];
        if (sandpack.files[file]) setOutput(sandpack.files[file]);
        else setOutput(`File ${file} not found`);
        break;
      }

      case "reset":
        sandpack.updateFile(
          "/App.js",
          `export default function App() { return <h1>Hello Sandpack!</h1>; }`
        );
        setOutput("Reset App.js");
        break;

      case "touch": {
        const file = args[0];
        if (!file) {
          setOutput("Usage: touch <filename>");
          break;
        }
        if (sandpack.files[file]) {
          setOutput(`File ${file} already exists`);
        } else {
          sandpack.updateFile(file, ""); // create empty file
          setOutput(`Created ${file}`);
        }
        break;
      }

      case "echo": {
        // support: echo "hello" > filename.js
        const arrowIndex = args.indexOf(">");
        if (arrowIndex === -1 || !args[arrowIndex + 1]) {
          setOutput('Usage: echo "content" > filename');
          break;
        }

        const content = args.slice(0, arrowIndex).join(" ").replace(/"/g, "");
        const file = args[arrowIndex + 1];
        sandpack.updateFile(file, content);
        setOutput(`Written to ${file}`);
        break;
      }

      default:
        setOutput(`Command not found: ${command}`);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#0f0",
        padding: "10px",
        fontFamily: "monospace",
      }}
    >
      <div style={{ whiteSpace: "pre-wrap", marginBottom: "10px" }}>{output}</div>
      <input
        style={{
          width: "100%",
          backgroundColor: "#000",
          color: "#0f0",
          border: "none",
          outline: "none",
          fontFamily: "monospace",
        }}
        placeholder='Type command (ls, cat filename, reset, touch filename, echo "text" > filename)'
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            runCommand(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}

export default MyTerminal;
