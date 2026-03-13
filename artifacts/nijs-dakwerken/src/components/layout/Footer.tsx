import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="P.G. Nijs Dakwerken Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-2xl tracking-wider">
                P.G. NIJS <span className="text-primary">DAKWERKEN</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Uw betrouwbare partner voor alle dakwerken in Venlo en omgeving. Van kleine herstellingen tot complete renovaties, wij garanderen topkwaliteit en duurzaamheid.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-white tracking-wide">Snelle Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({behavior:'smooth'})} className="hover:text-primary transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => document.getElementById('diensten')?.scrollIntoView({behavior:'smooth'})} className="hover:text-primary transition-colors">Diensten</button>
              </li>
              <li>
                <button onClick={() => document.getElementById('over-ons')?.scrollIntoView({behavior:'smooth'})} className="hover:text-primary transition-colors">Over Ons</button>
              </li>
              <li>
                <button onClick={() => document.getElementById('realisaties')?.scrollIntoView({behavior:'smooth'})} className="hover:text-primary transition-colors">Realisaties</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-white tracking-wide">Diensten</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Hellende Daken</li>
              <li>Platte Daken (EPDM)</li>
              <li>Dakisolatie</li>
              <li>Dakrenovatie</li>
              <li>Zink- en Koperwerken</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} P.G. Nijs Dakwerken. Alle rechten voorbehouden.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-wider"
          >
            Terug naar boven <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
