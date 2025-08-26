"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MessagesContext } from "@/context/MessagesContext";
import { useState } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Provider = ({ children }) => {
  const [messages,setMessages] = useState()
  const [userDetails, setUserDetails] = useState();
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
    <UserDetailContext.Provider value={{userDetails,setUserDetails}}>
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
    </UserDetailContext.Provider>
    </GoogleOAuthProvider>
  );
};

export default Provider;
