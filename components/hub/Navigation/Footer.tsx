'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 sm:py-16 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-display font-bold text-gradient">Fisko AI</h3>
            <p className="text-sm text-gray-400">Award-Worthy Web Development</p>
          </div>

          {/* Social Links Placeholder */}
          <div className="flex items-center justify-center gap-4">
            <div className="text-sm text-gray-500">
              {/* Social links can be added here */}
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center sm:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
            >
              <span>Back to Top</span>
              <span className="text-lg">↑</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Fisko AI. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Built with Next.js 15 • GSAP • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
