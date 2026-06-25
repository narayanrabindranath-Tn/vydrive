import { useLocation } from "wouter";

export function Footer() {
  const [, setLocation] = useLocation();

  const navigate = (href: string) => {
    setLocation(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <button
              onClick={() => navigate("/")}
              className="text-3xl font-serif font-bold text-primary mb-4 block"
            >
              VyDrive
            </button>
            <p className="text-muted-foreground max-w-sm mb-6 text-lg">
              Dependable, dignified, autonomous transportation for Clarksville, Tennessee.
            </p>
            <div className="text-muted-foreground">
              <p>VyDrive LLC</p>
              <p>Clarksville, TN</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => navigate("/about")} className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/how-we-move")} className="text-muted-foreground hover:text-primary transition-colors">
                  How We Move
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/get-the-app")} className="text-muted-foreground hover:text-primary transition-colors">
                  Get the App
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/contact#partner")} className="text-muted-foreground hover:text-primary transition-colors">
                  Partner With Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground">Terms of Service</span></li>
              <li><span className="text-muted-foreground">Privacy Policy</span></li>
              <li><span className="text-muted-foreground">HIPAA Compliance</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-muted/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} VyDrive LLC. All rights reserved.
          </p>
          <div className="text-sm text-muted-foreground">
            <span>Fully Insured &amp; Monitored 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
