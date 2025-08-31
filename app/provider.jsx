"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MessagesContext } from "@/context/MessagesContext";
import { useEffect, useState } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useConvex } from "convex/react";

const Provider = ({ children }) => {
  const [messages,setMessages] = useState()
  const [userDetails, setUserDetails] = useState();
  const convex = useConvex()

  useEffect(()=>{
    isAuthenticated()
  },[])

 
  const isAuthenticated = async () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user?.email) return;

      const result = await convex.query("users:getUser", { email: user?.email });

      console.log(result);
      setUserDetails(result);
    }
  };
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
