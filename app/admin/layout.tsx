"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Calendar, BarChart3, Bell, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Users, label: 'Agriculteurs', href: '/admin/visites' }, // Simplifié pour cet exo
    { icon: Calendar, label: 'Visites', href: '/admin/visites' },
    { icon: BarChart3, label: 'Rapports', href: '/admin/rapports' },
  ];

  return (
    <div className="min-h-screen bg-background-light flex flex-col md:flex-row font-sans text-text-main">
      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-background-dark text-white h-screen sticky top-0 border-r border-white/5 shadow-2xl z-20 overflow-y-auto">
        <div className="p-8">
          <Link href="/app" className="text-2xl font-black text-primary tracking-tighter hover:scale-105 transition-transform inline-block">
            RACOONECT
          </Link>
          <div className="mt-12 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all group ${
                    isActive
                    ? 'bg-primary text-background-dark font-bold shadow-lg shadow-primary/20'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-background-dark' : 'text-primary'}`} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-auto p-8 space-y-4">
          <div className="bg-white/5 rounded-3xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-background-dark">
              IK
            </div>
            <div>
              <p className="text-sm font-bold">Ikram</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-black">Gestionnaire</p>
            </div>
          </div>
          <button className="flex items-center gap-4 px-4 py-3 text-white/40 hover:text-red-400 transition-colors w-full group">
            <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden bg-background-dark text-white px-6 py-4 flex justify-between items-center border-b border-white/5 sticky top-0 z-30">
        <Link href="/app" className="font-black text-xl text-primary tracking-tighter">
          RACOONECT
        </Link>
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
          <Bell className="w-5 h-5 text-primary" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto p-6 md:p-12">
          {children}
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background-dark border-t border-white/5 px-6 py-4 flex justify-between items-center z-50 shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-white/30'}`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
