import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "home" },
  { name: "Diensten", href: "diensten" },
  { name: "Over Ons", href: "over-ons" },
  { name: "Realisaties", href: "realisaties" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/logo.png`} 
              alt="P.G. Nijs Dakwerken Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className={`font-display text-2xl md:text-3xl leading-none tracking-wider ${isScrolled ? 'text-secondary' : 'text-white text-shadow'}`}>
                P.G. Nijs
              </span>
              <span className={`font-sans text-xs md:text-sm font-semibold tracking-widest uppercase ${isScrolled ? 'text-primary' : 'text-primary'}`}>
                Dakwerken
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-sans font-medium text-sm hover:text-primary transition-colors duration-200 relative group ${
                    isScrolled ? "text-secondary" : "text-white text-shadow"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4 ml-4">
              <div className={`hidden lg:flex items-center gap-2 ${isScrolled ? 'text-secondary' : 'text-white text-shadow'}`}>
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-bold text-sm">Venlo &amp; omgeving</span>
              </div>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-white font-bold tracking-wider rounded-none uppercase text-sm px-6 h-11"
              >
                Offerte Aanvragen
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={isScrolled ? "text-secondary" : "text-white"}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass bg-background/95 border-b shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-4 text-base font-bold text-secondary hover:bg-muted hover:text-primary transition-colors border-b border-border/50"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-6 px-3">
              <div className="flex items-center gap-3 mb-4 text-secondary">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-bold">Venlo &amp; omgeving</span>
              </div>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase rounded-none h-12"
              >
                Offerte Aanvragen
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
