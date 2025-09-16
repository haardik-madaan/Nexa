"use client";
import { api } from "../../../convex/_generated/api";
import { MessagesContext } from "../../../context/MessagesContext";
import { useConvex, useMutation } from "convex/react";
import React, { useEffect, useContext, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { UserDetailContext } from "../../../context/UserDetailContext";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { ArrowRightIcon, Loader2Icon } from "lucide-react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { ChatGenPrompt } from "../../../constants/ChatGenPrompt";

function ChatView() {
  const { id } = useParams();
  const convex = useConvex();
  const { messages, setMessages } = useContext(MessagesContext);
  const { userDetails } = useContext(UserDetailContext);

  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const updateWorkspace = useMutation(api.workspace.updateWorkspace);

  // Guards to avoid duplicate requests:
  const isProcessingRef = useRef(false);
  // index of the last user message we've processed (0-based). Start at -1 (none).
  const lastProcessedIndexRef = useRef(-1);

  useEffect(() => {
    if (!id) return;
    getWorkspace();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    console.log("Messages updated:", messages);
  }, [messages]);

  // Trigger AI response only for NEW user messages.
  useEffect(() => {
    if (!Array.isArray(messages) || messages.length === 0) return;

    const lastIndex = messages.length - 1;
    const lastMsg = messages[lastIndex];

    // If last msg is a user msg and we haven't processed that index yet, trigger AI.
    if (lastMsg?.role === "user" && lastIndex > lastProcessedIndexRef.current) {
      // Avoid starting a new request if one is already in-flight
      if (!isProcessingRef.current) {
        GetAiResponse(lastIndex);
      } else {
        console.log("AI call skipped because a request is already in-flight.");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  const getWorkspace = async () => {
    try {
      const result = await convex.query(api.workspace.getWorkspace, {
        workspaceId: id,
      });

      // Defensive: only set if messages are actually different
      const fetched = result?.messages || [];
      // crude deep-check: length + last content - you can improve the equality check if desired
      const same =
        Array.isArray(messages) &&
        messages.length === fetched.length &&
        (fetched.length === 0 ||
          messages[messages.length - 1]?.content === fetched[fetched.length - 1]?.content);

      if (!same) {
        setMessages(fetched);
        // reset processed index so we don't re-trigger on old messages
        lastProcessedIndexRef.current = fetched.length - 1;
      }
      console.log("Fetched workspace messages:", result?.messages);
    } catch (error) {
      console.error("Error fetching workspace:", error);
      setMessages([]);
      lastProcessedIndexRef.current = -1;
    }
  };

  const GetAiResponse = async (triggerIndex) => {
    // mark that a request is in-flight
    if (isProcessingRef.current) return;
    isProcessingRef.current = true;
    setLoading(true);

    try {
      // Build prompt from current messages. Use a shallow copy to avoid mutation races.
      const promptMessages = Array.isArray(messages) ? [...messages] : [];
      const PROMPT = JSON.stringify(promptMessages) + ChatGenPrompt;

      const result = await axios.post("/api/ai", {
        prompt: PROMPT,
      });

      const assistantContent = result?.data?.result ?? "Apologies! we're facing a lot of requests. Can you please try again later?";

      // IMPORTANT: append assistant reply using functional update (safe with concurrent updates)
      setMessages((prev) => {
        const base = Array.isArray(prev) ? prev : [];
        return [...base, { role: "assistant", content: assistantContent }];
      });

      // Mark we have processed the user message at triggerIndex.
      // It's possible messages length changed in between; we set processed index conservatively.
      lastProcessedIndexRef.current = Math.max(lastProcessedIndexRef.current, triggerIndex);
    } catch (error) {
      console.error("Error getting AI response:", error);
    } finally {
      isProcessingRef.current = false;
      setLoading(false);
    }
  };

  const onGenerate = () => {
    if (!inputMessage.trim()) return;

    // append user message
    setMessages((prev) => {
      const base = Array.isArray(prev) ? prev : [];
      return [...base, { role: "user", content: inputMessage }];
    });

    setInputMessage("");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages?.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <Image
              src={msg.role === "assistant" ? "/bot.png" : userDetails?.image || "/default-profile.png"}
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
              <ReactMarkdown>{msg.content}</ReactMarkdown>
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
          className="flex-1 h-20 px-4 py-3 text-lg resize-none"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <Button
          type="submit"
          size="icon"
          className="rounded-xl hover:cursor-pointer"
          onClick={onGenerate}
          disabled={isProcessingRef.current}
        >
          <ArrowRightIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}

export default ChatView;
