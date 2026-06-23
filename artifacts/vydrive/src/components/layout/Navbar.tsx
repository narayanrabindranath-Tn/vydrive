import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      if (location !== "/") {
        setLocation("/");
        setTimeout(() => {
          document.querySelector(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setLocation(href);
    }
  };

  const navItems = [
    { label: "Home", href: "/#hero" },
    { label: "About", href: "/#about" },
    { label: "How We Move", href: "/#how-we-move" },
    { label: "Get the App", href: "/#get-app" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-primary flex items-center gap-2">
          VyDrive
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <Button onClick={() => handleNavClick("/#get-app")} className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-medium">
            Book a Ride
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-lg font-medium text-foreground hover:text-primary text-left py-2 border-b border-border"
            >
              {item.label}
            </button>
          ))}
          <Button onClick={() => handleNavClick("/#get-app")} className="w-full rounded-full py-6 mt-4 bg-primary text-white text-lg">
            Book a Ride
          </Button>
        </div>
      )}
    </header>
  );
}
