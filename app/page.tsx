import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Features from '@/components/Features';
import ImpactDashboard from '@/components/ImpactDashboard';
import MobileAppShowcase from '@/components/MobileAppShowcase';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <ImpactDashboard />
      <MobileAppShowcase />
      <CTA />
      <Footer />
    </div>
  );
}
