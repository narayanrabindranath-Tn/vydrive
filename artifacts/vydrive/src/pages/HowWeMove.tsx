import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HowWeMove as HowWeMoveSection } from "@/components/sections/HowWeMove";

export default function HowWeMove() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <HowWeMoveSection />
      </main>
      <Footer />
    </div>
  );
}
