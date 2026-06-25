import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GetApp as GetAppSection } from "@/components/sections/GetApp";

export default function GetApp() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <GetAppSection />
      </main>
      <Footer />
    </div>
  );
}
