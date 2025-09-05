"use client";
import { usePathname } from "next/navigation";
import Header from "./LandingPage/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  if (pathname === "/" || pathname.startsWith("/chat")) {
    return <Header />;
  }
  return null;
}