import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero modern architectural house roof with dark tiles */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Modern roof construction"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient wash for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary-foreground text-xs font-bold tracking-wider uppercase">Actief in heel Vlaanderen</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white leading-[1.1] mb-6 drop-shadow-lg">
              Meesters in <br />
              <span className="text-primary">Dakwerken.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 mb-8 font-sans font-light leading-relaxed max-w-xl">
              Van nieuwbouw tot renovatie, plat of hellend dak. P.G. Nijs Dakwerken combineert jarenlange ervaring met de beste materialen voor een dak dat generaties lang meegaat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 text-lg font-bold uppercase tracking-wide group"
              >
                Vraag een offerte aan
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => document.getElementById("diensten")?.scrollIntoView({ behavior: "smooth" })}
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-secondary-foreground hover:bg-white hover:text-secondary rounded-none h-14 px-8 text-lg font-bold uppercase tracking-wide bg-transparent backdrop-blur-sm"
              >
                Onze Diensten
              </Button>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/20 pt-8"
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-full backdrop-blur-sm">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <span className="text-white font-medium text-sm">10 Jaar Garantie</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-full backdrop-blur-sm">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <span className="text-white font-medium text-sm">Snelle Interventie</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-full backdrop-blur-sm">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <span className="text-white font-medium text-sm">Erkend Vakmanschap</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
