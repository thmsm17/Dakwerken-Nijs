import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="max-w-md w-full px-6 py-12 text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="w-20 h-20 text-primary" />
        </div>
        
        <h1 className="text-6xl font-display font-bold text-secondary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-secondary mb-4">Pagina niet gevonden</h2>
        
        <p className="text-muted-foreground mb-8 text-lg">
          De pagina die u zoekt bestaat niet (meer) of is verplaatst.
        </p>
        
        <Link href="/" className="inline-block">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none uppercase font-bold tracking-widest px-8">
            Terug naar Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
