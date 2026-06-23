import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { HowWeMove } from "@/components/sections/HowWeMove";
import { Safety } from "@/components/sections/Safety";
import { GetApp } from "@/components/sections/GetApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <HowWeMove />
        <Safety />
        <GetApp />
      </main>
      <Footer />
    </div>
  );
}
