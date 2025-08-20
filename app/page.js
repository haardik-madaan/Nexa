import Cards from "@/components/custom/Cards";
import Footer from "@/components/custom/Footer";
import Founder from "@/components/custom/Founder";
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
    <Founder/>
    <Footer/>
   
    </div>
  );
}
