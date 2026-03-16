"use client";


import { LayoutDashboard, Leaf, Flame, Bell } from 'lucide-react';
import { usePathname } from 'next/navigation';
import LinkNext from 'next/link';

export default function FarmerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/farmer/dashboard' },
    { icon: Leaf, label: 'Compost', href: '/farmer/compost' },
    { icon: Flame, label: 'Biogaz', href: '/farmer/biogaz' },
    { icon: Bell, label: 'Conseils', href: '/farmer/conseils' },
  ];

  return (
    <div className="min-h-screen bg-background-light pb-24 text-text-main font-sans">
      <header className="bg-white px-6 py-4 border-b sticky top-0 z-10 flex justify-between items-center">
        <h1 className="font-bold text-xl text-primary">Racoonect</h1>
        <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center font-bold text-primary text-sm">
          RB
        </div>
      </header>

      <main className="max-w-md mx-auto p-4">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center z-50">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <LinkNext
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-gray-400'}`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
            </LinkNext>
          );
        })}
      </nav>
    </div>
  );
}
