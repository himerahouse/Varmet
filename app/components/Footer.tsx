"use client";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="bg-gradient-to-t from-black via-black/95 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
            {/* Left side - Brand & Copyright */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-pulse" />
              <div className="text-center lg:text-left">
                <p className="text-sm text-white/70">
                  © {new Date().getFullYear()} Varmet. All rights reserved.
                </p>
                <p className="text-xs text-white/50 mt-1">
                  Industrial & Environmental Solutions
                </p>
              </div>
            </div>

            {/* Center - Tagline */}
            <div className="text-center">
              <p className="text-sm font-medium text-white/80">
                Building Sustainable Futures
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full" />
                <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                <div className="w-1 h-1 bg-cyan-500 rounded-full" />
              </div>
            </div>

            {/* Right side - Contact & Links */}
            <div className="flex flex-col items-center lg:items-end gap-2">
              <p className="text-xs text-white/60">
                Need immediate assistance?
              </p>
              <a 
                href="tel:+359890998827" 
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                +359 890 99 88 27
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}