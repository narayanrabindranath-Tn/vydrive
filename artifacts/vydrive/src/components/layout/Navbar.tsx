import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "How We Move", href: "/how-we-move" },
    { label: "Get the App", href: "/get-the-app" },
    { label: "Contact", href: "/contact" },
  ];

  const navigate = (href: string) => {
    setIsOpen(false);
    setLocation(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="text-2xl md:text-3xl font-serif font-bold text-primary"
          data-testid="link-logo"
        >
          VyDrive
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => navigate(item.href)}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isActive(item.href)
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => navigate("/get-the-app")}
            className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-medium"
            data-testid="button-book-ride"
          >
            Book a Ride
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.href)}
              className={`text-lg font-medium text-left py-2 border-b border-border transition-colors ${
                isActive(item.href) ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => navigate("/get-the-app")}
            className="w-full rounded-full py-6 mt-4 bg-primary text-white text-lg"
          >
            Book a Ride
          </Button>
        </div>
      )}
    </header>
  );
}
