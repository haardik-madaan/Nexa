import Cards from "@/components/custom/Cards";
import Hero from "@/components/custom/Hero";
import Scroll from "@/components/custom/Scroll";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <div>
     <Hero/>
     <Cards/>
     <Scroll/>
    </div>
  );
}
