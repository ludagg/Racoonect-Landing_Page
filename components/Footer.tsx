import Link from 'next/link';
import { Leaf, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-background-dark">
                <Leaf className="h-4 w-4" />
              </div>
              <h2 className="text-lg font-bold tracking-tight text-text-main">Racoonect</h2>
            </div>
            <p className="text-sm text-text-main/60 mb-6">
              Technologie au service de l&apos;agriculture régénératrice. Transformons ensemble le modèle agricole.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-text-main mb-4">Produit</h3>
            <ul className="space-y-3 text-sm text-text-main/70">
              <li><Link href="#" className="hover:text-primary">Fonctionnalités</Link></li>
              <li><Link href="#" className="hover:text-primary">Capteurs IoT</Link></li>
              <li><Link href="#" className="hover:text-primary">Application Mobile</Link></li>
              <li><Link href="#" className="hover:text-primary">Tarifs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-text-main mb-4">Ressources</h3>
            <ul className="space-y-3 text-sm text-text-main/70">
              <li><Link href="#" className="hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary">Guides de compostage</Link></li>
              <li><Link href="#" className="hover:text-primary">Cas clients</Link></li>
              <li><Link href="#" className="hover:text-primary">Webinaires</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-text-main mb-4">Entreprise</h3>
            <ul className="space-y-3 text-sm text-text-main/70">
              <li><Link href="#" className="hover:text-primary">À propos</Link></li>
              <li><Link href="#" className="hover:text-primary">Carrières</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary">Presse</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-main/50">
          <p>© 2024 Racoonect AgriTech. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-text-main">Mentions légales</Link>
            <Link href="#" className="hover:text-text-main">Confidentialité</Link>
            <Link href="#" className="hover:text-text-main">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
