import Link from 'next/link';
import { Leaf, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6 lg:px-20">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-background-dark">
            <Leaf className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-text-main">Racoonect</h2>
        </div>
        <p className="text-text-main/70 mb-6 max-w-md">
          Technologie au service de l&apos;agriculture régénératrice. Transformons ensemble le modèle agricole.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-dark font-medium text-sm mb-8">
          <span>🚀</span> Développé avec passion pour le Rab&apos;hack 2026
        </div>
        <div className="border-t border-gray-100 w-full pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-main/50">
          <p>© 2026 Racoonect AgriTech. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
