import Link from 'next/link';
import { Leaf, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6 lg:px-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-background-dark">
              <Leaf className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-text-main">Racoonect</h2>
          </div>
          <p className="text-text-main/70 mb-6 max-w-sm">
            Technologie au service de l&apos;agriculture régénératrice. Transformons ensemble le modèle agricole en valorisant chaque ressource.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 rounded-full bg-gray-50 text-text-main/50 hover:text-primary hover:bg-primary/10 transition-all">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="p-2 rounded-full bg-gray-50 text-text-main/50 hover:text-primary hover:bg-primary/10 transition-all">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-text-main mb-4">Navigation</h3>
          <ul className="space-y-3 text-sm text-text-main/60">
            <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
            <li><Link href="#solution" className="hover:text-primary transition-colors">Notre Solution</Link></li>
            <li><Link href="#impact" className="hover:text-primary transition-colors">Impact Environnemental</Link></li>
            <li><Link href="#waitlist" className="hover:text-primary transition-colors">Nous rejoindre</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-text-main mb-4">Plateforme</h3>
          <ul className="space-y-3 text-sm text-text-main/60">
            <li>
              <Link href="/app" className="flex items-center gap-2 hover:text-primary transition-colors font-semibold text-text-main">
                Connexion <ExternalLink className="h-3 w-3" />
              </Link>
            </li>
            <li><Link href="/farmer/dashboard" className="hover:text-primary transition-colors">Espace Agriculteur</Link></li>
            <li><Link href="/admin/dashboard" className="hover:text-primary transition-colors">Espace Administration</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-gray-100 pt-8 flex flex-col md:row justify-between items-center gap-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-dark font-medium text-xs">
          <span>🚀</span> Développé avec passion pour le Rab&apos;hack 2026
        </div>
        <p className="text-xs text-text-main/40">© 2026 Racoonect AgriTech. Tous droits réservés. Construit pour un avenir durable.</p>
      </div>
    </footer>
  );
}
