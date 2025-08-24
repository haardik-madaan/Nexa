"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MessagesContext } from "@/context/MessagesContext";
import { useState } from "react";

const Provider = ({ children }) => {
  const [messages,setMessages] = useState()
  return (
   <MessagesContext.Provider value = {{messages,setMessages}}>
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
    </MessagesContext.Provider>
  );
};

export default Provider;
