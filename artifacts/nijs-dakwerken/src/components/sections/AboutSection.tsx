import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const bullets = [
    "Meer dan 20 jaar vakmanschap",
    "Persoonlijke en transparante aanpak",
    "Gebruik van A-merk materialen",
    "Gedetailleerde, vrijblijvende offertes",
    "Strikte naleving van deadlines",
    "Vlotte communicatie met de zaakvoerder"
  ];

  return (
    <section id="over-ons" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* construction workers installing modern roof tiles */}
              <img
                src="https://pixabay.com/get/gdc18d9a4c392d027076b6dd14af0b4030951634470981798e60860058b842ce9df821bcf658deb1062dcf1dc3b1077e79288ed57180720a151bbc542e7739415_1280.jpg"
                alt="Dakwerker aan het werk"
                className="w-full h-full object-cover shadow-2xl"
              />
              
              {/* Floating Experience Badge */}
              <div className="absolute -bottom-8 -right-8 bg-secondary p-8 text-white shadow-xl hidden md:block">
                <div className="text-5xl font-display text-primary mb-1">20+</div>
                <div className="text-sm font-bold uppercase tracking-wider">Jaren Ervaring</div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-muted z-0 ml-6 mt-6"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-primary font-bold tracking-widest text-sm mb-3">Over Ons</h2>
            <h3 className="text-4xl md:text-5xl font-display text-secondary mb-6 leading-tight">
              Bouwen op vertrouwen en <span className="text-primary">traditie</span>
            </h3>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              P.G. Nijs Dakwerken is een hecht familiebedrijf met een ware passie voor daken. Wij geloven dat een goed dak de belangrijkste bescherming is van uw woning. Daarom sluiten wij geen compromissen als het gaat om kwaliteit en duurzaamheid.
            </p>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Als u met ons samenwerkt, kiest u voor een partner die meedenkt, helder communiceert en pas tevreden is als de afwerking absoluut perfect is. Uw project wordt met de grootste zorg en precisie uitgevoerd.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-10">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-medium text-secondary">{bullet}</span>
                </li>
              ))}
            </ul>

            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white rounded-none h-14 px-8 text-lg font-bold uppercase tracking-wide"
            >
              Leer ons kennen
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
