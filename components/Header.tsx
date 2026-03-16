import Link from 'next/link';
import { Leaf, Menu, LogIn } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-primary/10 bg-background-light/95 backdrop-blur-md px-6 py-4 lg:px-20">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-background-dark">
            <Leaf className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-text-main">Racoonect</h2>
        </Link>
      </div>
      <nav className="hidden lg:flex items-center gap-8">
        <Link href="#solution" className="text-sm font-medium text-text-main hover:text-primary transition-colors">Solution</Link>
        <Link href="#agriculteurs" className="text-sm font-medium text-text-main hover:text-primary transition-colors">Agriculteurs</Link>
        <Link href="#impact" className="text-sm font-medium text-text-main hover:text-primary transition-colors">Impact</Link>
        <Link href="#about" className="text-sm font-medium text-text-main hover:text-primary transition-colors">À propos</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          href="/app"
          className="text-sm font-bold text-text-main hover:text-primary transition-colors flex items-center gap-2"
        >
          <LogIn className="h-4 w-4" />
          Se connecter
        </Link>
        <a href="#waitlist" className="hidden lg:flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-background-dark transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 cursor-pointer">
          Rejoindre
        </a>
        <button className="lg:hidden p-2 text-text-main">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
