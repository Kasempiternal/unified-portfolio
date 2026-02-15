import SmoothScrollProvider from '@components/hub/SmoothScrollProvider';
import HubHero from '@components/hub/Hero/HubHero';
import PortfolioGrid from '@components/hub/Portfolio/PortfolioGrid';
import AboutSection from '@components/hub/About/AboutSection';
import TechStackSection from '@components/hub/TechStack/TechStackSection';
import FiverrCTA from '@components/hub/CTA/FiverrCTA';
import Footer from '@components/hub/Navigation/Footer';
import './hub-globals.css';

export default function Home() {
  return (
    <div
      data-site="hub"
      className="min-h-screen font-inter"
      style={{
        '--site-bg': '#0f172a',
        '--site-fg': '#f8fafc',
        '--site-primary': '#6366f1',
        '--site-secondary': '#8b5cf6',
        '--site-accent': '#06b6d4',
        '--site-muted': '#94a3b8',
      } as React.CSSProperties}
    >
      <SmoothScrollProvider>
        <main className="min-h-screen">
          <HubHero />
          <PortfolioGrid />
          <AboutSection />
          <TechStackSection />
          <FiverrCTA />
          <Footer />
        </main>
      </SmoothScrollProvider>
    </div>
  );
}
