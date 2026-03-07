import Link from 'next/link';
import { Leaf, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-primary/10 bg-background-light/95 backdrop-blur-md px-6 py-4 lg:px-20">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-background-dark">
          <Leaf className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-text-main">RACOONS</h2>
      </div>
      <nav className="hidden lg:flex items-center gap-8">
        <Link href="#" className="text-sm font-medium text-text-main hover:text-primary transition-colors">Solution</Link>
        <Link href="#" className="text-sm font-medium text-text-main hover:text-primary transition-colors">Agriculteurs</Link>
        <Link href="#" className="text-sm font-medium text-text-main hover:text-primary transition-colors">Impact</Link>
        <Link href="#" className="text-sm font-medium text-text-main hover:text-primary transition-colors">À propos</Link>
      </nav>
      <div className="flex items-center gap-4">
        <button className="hidden lg:flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-background-dark transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 cursor-pointer">
          Commencer
        </button>
        <button className="lg:hidden p-2 text-text-main">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
