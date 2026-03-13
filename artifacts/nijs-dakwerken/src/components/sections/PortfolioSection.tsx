import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
  {
    id: 1,
    title: "Renovatie Pannendak",
    category: "Dakrenovatie",
    // modern suburban house with brand new clay roof tiles
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Nieuwbouw Platte Daken",
    category: "EPDM",
    // modern minimal flat roof house exterior
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Zink- & Koperwerken",
    category: "Zinkwerken",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Dakrenovatie",
    category: "Renovatie",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  }
];

export function PortfolioSection() {
  return (
    <section id="realisaties" className="py-24 bg-secondary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-bold tracking-widest text-sm mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display mb-6">Recent Uitgevoerde Projecten</h3>
            <p className="text-gray-300 text-lg">
              Een beeld zegt meer dan duizend woorden. Bekijk een selectie van onze recente realisaties en overtuig uzelf van ons vakmanschap en oog voor detail.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer relative overflow-hidden bg-card"
            >
              <AspectRatio ratio={16/10}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-display text-white">
                    {project.title}
                  </h4>
                </div>
              </AspectRatio>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
