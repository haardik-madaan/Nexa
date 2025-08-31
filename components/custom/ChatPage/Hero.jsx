"use client"
import React, { useContext, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRightIcon } from "lucide-react";
import { suggestions } from "../../../constants/Suggestions";
import { MessagesContext } from "@/context/MessagesContext";
import { UserDetailContext } from "@/context/UserDetailContext";
import SignInDialog from "./SignInDialog";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api"; 
import { useRouter } from "next/navigation";



function Hero() {
  const [prompt, setPrompt] = useState("");
  const [click, setClick] = useState(false);
  const { messages, setMessages } = useContext(MessagesContext);
  const { userDetails } = useContext(UserDetailContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const createWorkspace = useMutation(api.workspace.createWorkspace);
  const router = useRouter();

  const onGenerate = async (input) => {
    const msg = {
      role: "user",
      content: input,
    }
    setMessages(msg);
    const workspaceId = await createWorkspace({
      messages: [msg],
      user: userDetails._id,
    })
    console.log("Workspace ID:", workspaceId);
    router.push('/workspace/' + workspaceId);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPrompt(value);
    setClick(value.trim().length > 0);
  };

  const handleSubmit = () => {
    if (!userDetails?.name) {
      setDialogOpen(true);
      return;
    }
    onGenerate(prompt);
  };

  const handleSuggestionClick = (suggestion) => {
    setPrompt(suggestion);
    setClick(true);
    
  };

  useEffect(() => {
    console.log("Updated messages:", messages);
  }, [messages]);


  
  return (
    <div className="container h-screen flex flex-col justify-center items-center text-center px-4">


      {userDetails && (
        
        <div className="absolute top-4 right-4">
       <Image
  src={userDetails.image || "/default-profile.png"}
  alt={userDetails.name || "Profile Picture"}
  width={40}
  height={40}
  className="rounded-full shadow-md mt-7"
  unoptimized
  onError={(e) => { e.currentTarget.src = "/default-profile.png"; }}
/>

         


        </div>
        
      )}
 
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
        Let’s build a website from scratch
      </h1>
      <p className="mt-4 text-gray-500 max-w-xl">
        Share your vision, and we'll turn it into a website.
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
            className="absolute right-3 top-7 -translate-y-1/2 rounded-xl hover:cursor-pointer "
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
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </h2>
        ))}
      </div>

      <SignInDialog open={dialogOpen} onOpenChange={setDialogOpen} />

    </div>
  );
}

export default Hero;
