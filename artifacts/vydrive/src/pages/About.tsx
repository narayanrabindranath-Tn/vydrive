import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About as AboutSection } from "@/components/sections/About";
import { Safety } from "@/components/sections/Safety";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <AboutSection />
        <Safety />
      </main>
      <Footer />
    </div>
  );
}
