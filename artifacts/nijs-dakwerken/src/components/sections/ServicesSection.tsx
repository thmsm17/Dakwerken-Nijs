import { motion } from "framer-motion";
import { 
  Home, 
  ThermometerSnowflake, 
  Wrench, 
  Layers, 
  CloudRain, 
  Square 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Hellende Daken",
    description: "Vakkundige plaatsing van pannen, leien of zink. Wij zorgen voor een perfecte afwerking en optimale weersbestendigheid.",
    icon: Home,
  },
  {
    title: "Platte Daken",
    description: "Specialist in platte daken met rubber- en bitumenbedekking. 100% waterdicht met een uiterst lange levensduur.",
    icon: Square,
  },
  {
    title: "Dakisolatie",
    description: "Verlaag uw energiefactuur aanzienlijk. Wij plaatsen hoogwaardige isolatie volgens de nieuwste normen.",
    icon: ThermometerSnowflake,
  },
  {
    title: "Dakrenovatie",
    description: "Volledige vernieuwing van uw oude dak, inclusief daktimmerwerken en onderdak, met minimale overlast.",
    icon: Wrench,
  },
  {
    title: "Zink- & Koperwerken",
    description: "Ambachtelijk maatwerk voor dakgoten, afvoerbuizen en gevelbekleding voor een karaktervolle uitstraling.",
    icon: Layers,
  },
  {
    title: "Herstellingen & Onderhoud",
    description: "Snelle interventie bij lekken, stormschade of preventief onderhoud om grotere problemen te voorkomen.",
    icon: CloudRain,
  },
];

export function ServicesSection() {
  return (
    <section id="diensten" className="py-24 bg-muted/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-bold tracking-widest text-sm mb-3">Onze Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display text-secondary mb-6">Wat wij voor uw dak doen</h3>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Van een kleine herstelling tot een compleet nieuw dakproject. Wij bieden een totaaloplossing met materialen van topkwaliteit.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card rounded-none group overflow-hidden relative">
                {/* Decorative top border that expands on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-border group-hover:bg-primary transition-colors duration-300"></div>
                
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-muted rounded-none flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl font-display text-secondary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
