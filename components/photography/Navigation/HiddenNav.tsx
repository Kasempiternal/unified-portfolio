"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HiddenNav() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Hover Zone */}
      <div
        className="fixed top-0 left-0 right-0 h-20 z-40"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
            <Link
              href="/photography"
              className="text-xl font-light tracking-tight hover:text-black/60 transition-colors"
            >
              Elena Voss
            </Link>

            <div className="flex gap-8">
              <Link
                href="/photography"
                className={`text-sm font-light tracking-wide transition-colors ${
                  pathname === "/photography"
                    ? "text-black border-b border-black"
                    : "text-black/60 hover:text-black"
                }`}
              >
                Work
              </Link>
              <Link
                href="/photography/about"
                className={`text-sm font-light tracking-wide transition-colors ${
                  pathname === "/photography/about"
                    ? "text-black border-b border-black"
                    : "text-black/60 hover:text-black"
                }`}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
