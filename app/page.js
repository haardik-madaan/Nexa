// app/page.js
import Cards from "../components/custom/LandingPage/Cards";
import Footer from "../components/custom/LandingPage/Footer";
import Founder from "../components/custom/LandingPage/Founder";
import Hero from "../components/custom/LandingPage/Hero";
import LightRays from "../components/reactBits/LightRays";
import Scroll from "../components/custom/LandingPage/Scroll";

export default function Home() {
  return (
    <div className="relative min-h-screen">
  
      <LightRays className="fixed inset-0 z-0 pointer-events-none" />

    
      <div className="relative z-10">
        <Hero />
        <Cards />
        <Scroll />
        <Founder />
        <Footer />
      </div>
    </div>
  );
}
