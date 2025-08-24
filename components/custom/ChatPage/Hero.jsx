"use client"
import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRightIcon } from "lucide-react";
import { suggestions } from "../../../constants/Suggestions";
import { MessagesContext } from "@/context/MessagesContext";

function Hero() {
  const [prompt, setPrompt] = useState("");
  const [click, setClick] = useState(false);
  const { messages, setMessages } = useContext(MessagesContext);

  const onGenerate = (input) => {
    setMessages({
      role: "user",
      content: input
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPrompt(value);
    setClick(value.trim().length > 0);
  };

  const handleSubmit = () => {
    onGenerate(prompt);
    console.log(messages);
  };

  
  const handleSuggestionClick = (suggestion) => {
    setPrompt(suggestion);   
    setClick(true);         
  };

  return (
    <div className="container h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
        Let’s build a website from scratch
      </h1>
      <p className="mt-4 text-gray-500 max-w-xl">
        Share your vision, and we’ll turn it into a website.
      </p>

      <div className="relative w-full max-w-2xl mt-6">
        <Textarea
          placeholder="Describe your website idea..."
          className="flex-1 h-20 px-4 py-3 text-lg resize-none pr-14"
          value={prompt}
          onChange={handleChange}
        />
        {click && (
          <Button
            type="submit"
            size="icon"
            className="absolute right-3 top-7 -translate-y-1/2 rounded-xl"
            onClick={handleSubmit}
          >
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        )}
      </div>

      <div className="flex flex-row flex-wrap gap-2 justify-center mt-5 max-w-2xl">
        {suggestions.map((suggestion, index) => (
          <h2
            key={index}
            className="text-gray-400 bg-transparent text-sm border rounded-full p-1.5 hover:text-white cursor-pointer"
            onClick={
              () => {
                handleSuggestionClick(suggestion)
                onGenerate(suggestion)
              }
              
            } 
          >
            {suggestion}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Hero;
